import React from "react";

function Single({image , name , bodyPart , target}) {
  return (
    
      <div className="shadow-md bg-white p-4 rounded-lg lg:w-[288px] sm:w-[320px]  xl:w-[380px] w-full ">
        <img className="w-full h-auto"
          src={image}
          alt=""
        />
        <h2 className="text-xl font-semibold text-gray-500 uppercase">{name}</h2>
        <p className="text-gray-500 uppercase -tracking-tighter">{bodyPart}</p>
        <p className="text-gray-500 uppercase -tracking-tighter">{target}</p>
      </div>
    
  );
}

export default Single;
