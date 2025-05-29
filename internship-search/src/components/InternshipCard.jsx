import React from "react";
import { IoLocation } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

const InternshipCard = ({ internship }) => {
    return (
        <>
        <a className="cursor-pointer">
            <div className="bg-white rounded-2xl p-5 hover:shadow-2xl hover:scale-101 transform transition duration-300 mb-5">

                <div className="flex justify-between items-center" >
                    <h2 className="font-bold text-md text-md">{internship.title}</h2>
                    <img src="/company-17.png" className="w-6"/>
                </div>

                <div className="flex gap-2 items-center mt-2">
                    <p className="text-gray-500 text-sm ">{internship.company_name}</p>
                    <span className="border border-cyan-600 px-1 rounded-2xl text-[10px] text-cyan-600">Actively Hiring</span>
                </div>

                <div className="flex gap-3 items-center mt-3 text-xs md:text-sm font-light" >
                    <div className="flex gap-2 items-center ">
                        <span><IoLocation /></span>
                        <p>{internship.location_names[0] || "Delhi"}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span><CiMoneyBill /></span>
                        <p>{internship.stipend.salary}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span><CiCalendarDate /></span>
                        <p>{internship.duration}</p>
                    </div>
                </div>

                <div className="mt-3">
                    <p className="items-center text-xs bg-gray-400 inline text-white px-2 py-1 rounded-md "> {internship.posted_by_label}</p>
                </div>

            </div>
        </a>
        </>
    );
};

export default InternshipCard;
