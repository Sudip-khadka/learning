'use client'
import { ArrowBigRight, ArrowRight, Heart } from "lucide-react";
import React, { useState } from "react";
export type CardProps = {
  logo?: string;
  institute?: string;
  address?: string;
  saved?: boolean;
  course?: string;
  fee?: string;
  duration?: string;
  degree?: string;
};
function Card({
  logo = "https://as2.ftcdn.net/jpg/06/55/93/73/1000_F_655937342_RgEXCeEXTHuw3Wg0JGLbh0WAPoAcSidM.webp",
  institute = "Melbourne Institute of Technology",
  address = "Melbourn , Australia",
  saved = false,
  course="Master of Technology (Enterprise Systems and Business Analytics)",
  fee="AUD 20,000",
  duration="2 Year",
  degree="Advance Diploma",
}: CardProps) {
    const [savedCard,setSavedCard]=useState<boolean>(saved);
    const [isSubmitting,setIsSubmitting]=useState<boolean>(false)
    const handleSubmit=(e: React.MouseEvent<HTMLButtonElement>)=>{
        if(isSubmitting) return
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);
        setTimeout(()=>{
            alert("Application process Started")
            setIsSubmitting(false);
        },2000)
    }
  return (
    <div className="w-full h-auto flex flex-col gap-5 pt-4 pb-8 max-w-[400px] border border-gray-400 rounded-xl relative group hover:border-primary-500 hover:-translate-y-1 hover:border-2 hover:shadow-lg hover:shadow-primary-500">
      <div className="header px-4 flex gap-4 justify-start">
        <div className="logo h-15 w-15 rounded-full place-self-center">
          <img src={logo} className="h-full w-full rounded-full" />
        </div>
        <div className="info flex flex-col flex-1">
          <h1 className="line-clamp-2 text-[#2C2F3A] font-primary text-base font-semibold leading-6">
            {institute}
          </h1>
          <h6 className="text-gray-600 font-primary text-sm font-normal leading-5 line-clamp-2">
            {address}
          </h6>
        </div>
        <div className="save">
        <div
            className="cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                // e.stopPropagation();
                setSavedCard(!savedCard)}}
        >
            {savedCard ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ff0000"
                    className="hover:opacity-80 transition-opacity"
                >
                    <path
                        d="M16.5 4C19.0289 4 21 5.96348 21 8.5C21 10.0562 20.3069 11.5515 18.8818 13.2949C17.8048 14.6125 16.3699 16.0025 14.625 17.6074L12.7783 19.2891L12.7764 19.29L12 19.9971L11.2236 19.29L11.2217 19.2891L9.375 17.6074C7.63013 16.0025 6.19518 14.6125 5.11816 13.2949C3.69311 11.5515 3 10.0562 3 8.5C3 5.96348 4.97109 4 7.5 4C8.9377 4 10.3342 4.67462 11.2412 5.73145L12 6.61523L12.7588 5.73145C13.6658 4.67462 15.0623 4 16.5 4Z"
                    />
                </svg>
            ) : (
                <Heart 
                    className="hover:text-red-500 transition-colors h-6 w-6"
                    onClick={() => setSavedCard(!savedCard)}
                />
            )}
        </div>
        </div>
      </div>
      <hr />
      <div className="card-body flex flex-col px-4">
        <p className="text-gray-400 font-primary text-sm font-normal leading-5">Course Name</p>
        <h2 className="text-gray-800 font-primary text-sm font-semibold leading-5 line-clamp-2">
          {course}
        </h2>
      </div>
      <div className="card-footer flex gap-8 items-center justify-start px-4 flex-wrap">
        {fee&&<div className="card-a">
          <p className="text-gray-400 font-primary text-sm font-normal leading-5">Fee Per Course</p>
          <h2 className="text-gray-800 font-primary text-sm font-semibold leading-5 line-clamp-1 max-w-[150px]">
            {fee}
          </h2>
        </div>}
        {duration&&<div className="card-b">
          <p className="text-gray-400 font-primary text-sm font-normal leading-5">Duration</p>
          <h2 className="text-gray-800 font-primary text-sm font-semibold leading-5 line-clamp-1 max-w-[150px]">
            {duration}
          </h2>
        </div>}
       {degree&& <div className="card-c">
          <p className="text-gray-400 font-primary text-sm font-normal leading-5">Degree</p>
          <h2 className="text-gray-800 font-primary text-sm font-semibold leading-5 line-clamp-1 max-w-[150px]">
            {degree}
          </h2>
        </div>}
      </div>
    <button className="flex w-[90%] left-[50%] translate-x-[-50%]  h-12 px-6 justify-center items-center gap-2.5 text-white bg-primary-500 rounded-lg absolute translate-y-5 opacity-0 group-hover:-translate-y-2 bottom-0 group-hover:opacity-100 transition-all duration-500 ease-in-out disabled:pointer-events-none active:opacity-100 active:-translate-y-2" onClick={(e)=>handleSubmit(e)} disabled={isSubmitting}>{isSubmitting?"Submitting":"Apply"} <ArrowRight size={20}/></button>
    </div>
  );
}

export default Card;
