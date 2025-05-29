import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { LuFilter } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const FilterBar = () => {
    const { filters, setFilters } = useContext(FilterContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="bg-white p-4 rounded shadow sticky top-4 h-[90vh] overflow-y-auto">

            <div className="flex items-center justify-center gap-1 mb-5 mt-3">
                <span className="text-cyan-500" ><LuFilter /></span>
                <h2 className="text-md font-medium ">Filters</h2>
            </div>

            <div className="flex gap-2 mt-2 mb-3">
                <input type='checkbox' />
                <p className="text-sm" >As per my<span className="text-cyan-500 cursor-pointer "> preferences</span>
                </p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Profile</label>
                <input
                    type="text"
                    name="title"
                    value={filters.title}
                    onChange={handleChange}
                    className="w-full mt-1 text-sm border border-gray-300 rounded px-2 py-1"
                    placeholder="e.g. Web Developer"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                    type="text"
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    className="w-full text-sm mt-1 border border-gray-300 rounded px-2 py-1"
                    placeholder="e.g. Delhi"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Duration (in months)</label>
                <input
                    type="text"
                    name="duration"
                    value={filters.duration}
                    onChange={handleChange}
                    className="w-full text-sm mt-1 border border-gray-300 rounded px-2 py-1"
                    placeholder="e.g. 6"
                />
            </div>

            <div className="flex gap-2 mt-5 mb-3">
                <input type='checkbox' />
                <p className="text-sm" >Internships in my city</p>
            </div>

            <div className="flex gap-2 mt-2 mb-3">
                <input type='checkbox' />
                <p className="text-sm" >Work from home</p>
            </div>

            <div className="flex gap-2 mt-2 mb-3">
                <input type='checkbox' />
                <p className="text-sm" >Part-time</p>
            </div>

            <div className="flex gap-2 items-center text-cyan-500 text-sm mt-2 mb-5 cursor-pointer" >
                <p>View more filters</p>
                <FaCaretDown />
            </div>

            <div>
                <p className="text-end text-xs text-cyan-500 cursor-pointer">Clear all</p>
            </div>

            <div>
                <h1 className="font-semibold text-md text-center" >Keyword Search</h1>

                <div className="flex items-center mt-5">

                    <input
                        type="text"
                        className="text-sm border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none w-64"
                        placeholder="e.g. Design, Mumbai, Infosys"/>
                    <span className="bg-cyan-600 text-white p-3 rounded-r-md cursor-pointer">
                        <FaSearch />
                    </span>
                </div>

            </div>
        </div>
    );
};

export default FilterBar;
