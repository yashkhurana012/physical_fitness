import React, { useEffect, useState } from "react";
import axios from "axios";
import Single from "./Single";

function Main() {
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [increase, setIncrease] = useState(12);
  //   const [search, setSearch] = useState("");

  useEffect(() => {
    const fecthApi = async () => {
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises",
        params: { limit: increase },
        headers: {
          "X-RapidAPI-Key":
            "9007abbd3emshec4506c43be6245p1e3eafjsn0e86dd3945b6",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        setContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fecthApi();
  }, [increase]);

  const handleChange = (name) => {
    // console.log(e.target.value); // doubt empty arr given in search input
    if (name == "") {
      setData(content);
    } else {
      let filterData = [...content];
      let newData = filterData.filter((item, idx) => {
        if (item.name.includes(name)) {
          // console.log("name" + item.name.includes(name));
          return true;
        } else {
          return false;
        }
      });
      setData(newData);
      // console.log(newData);
    }
    
    
  };

  //   console.log(data);
  return (
    <div className="m-3 mt-14">
      <h1 className="text-3xl font-semibold sm:text-center">Exercise List</h1>

      <div className="mt-4 mb-6">
        <input
          type="text"
          placeholder="Search by target, body part,or exercise"
          className="w-full border py-2 px-4 rounded-lg border-gray-300"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      {data.length > 0 ? (
        <div className="w-full flex items-center gap-4 flex-wrap mt-4 justify-center md:gap-6">
          {data.map((e, i) => {
            // console.log(e);
            return (
              <Single
                key={e.id}
                image={e.gifUrl}
                name={e.name}
                bodyPart={e.bodyPart}
                target={e.target}
              />
            );
          })}{" "}
        </div>
      ) : (
        <h2 className="text-center">Data Not Found</h2>
      )}

      <div className="mt-8 pb-10 flex justify-center items-center ">
        <button
          className="px-6 py-2 bg-blue-800 rounded-lg text-white"
          onClick={() => setIncrease(increase + 10)}
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default Main;
