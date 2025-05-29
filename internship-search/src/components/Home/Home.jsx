import { useEffect, useState, useContext } from "react";
import FilterBar from "../FilterBar.jsx";
import InternshipCard from "../InternshipCard.jsx";
import { FilterContext } from "../../context/FilterContext.jsx";
import { FaAngleRight } from "react-icons/fa";

const Home = () => {

    const { filters } = useContext(FilterContext);
    const [internships, setInternships] = useState([]);
    const [filteredInternships, setFilteredInternships] = useState([]);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const res = await fetch("https://internshala.com/hiring/search");
                const data = await res.json();
                const internshipsArray = Object.values(data?.internships_meta || {});
                setInternships(internshipsArray);
                setFilteredInternships(internshipsArray);
            } catch (err) {
                console.error("Error fetching internships:", err);
            }
        };

        fetchInternships();
    }, []);

    useEffect(() => {
        const filtered = internships.filter((internship) => {
            const matchesProfile = (internship.title || "")
                .toLowerCase()
                .includes((filters.title || "").toLowerCase());

            const locationFilter = (filters.location || "").toLowerCase();
            const matchesLocation =
                !locationFilter || (internship.location_names?.length ? internship.location_names.some((loc) =>
                    loc.toLowerCase().includes(locationFilter)) : "delhi".includes(locationFilter));

            const internshipDuration = internship.duration ? parseInt(internship.duration) : null;
            const filterDuration = filters.duration ? parseInt(filters.duration) : null;
            const matchesDuration = filterDuration ? internshipDuration === filterDuration : true;

            return matchesProfile && matchesLocation && matchesDuration;
        });

        setFilteredInternships(filtered);
    }, [filters, internships]);

    return (
        <>
            <div className="bg-gray-100 md:block hidden ">
                <div className="bg-gray-100 max-w-5xl mx-auto py-10">
                    <div className="flex text-sm font-light gap-2 items-center px-2">
                        <p className="cursor-pointer text-slate-700">Home</p>
                        <FaAngleRight />
                        <p className="cursor-pointer">Internships</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 md:block hidden ">
                <div className="max-w-5xl mx-auto mr-10 bg-gray-100">
                <div className="text-center">
                    <p className="font-medium text-lg mb-2">6780 Total Internships</p>
                    <p className="font-light text-xs text-slate-700">Latest Summer Internships in India</p>
                </div>
            </div>
            </div>

            <div className="min-h-screen p-4 bg-gray-100">

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="md:col-span-1 md:block hidden ">
                        <FilterBar />
                    </div>

                    <div className="md:col-span-2 space-y-4">

                    <div className="bg-white p-3 rounded-xl hover:shadow-2xl hover:scale-101 transform transition duration-300" >
                        <h2 className="font-semibold text-md">Get Internship and Job Preparation training FREE !</h2>
                        <p className="font-light text-xs text-slate-800 mt-2">By enrolling in trainings at Flat 80% OFF!</p>
                        <p className="mt-4 font-medium text-sm" >Use Coupon: <span className="font-bold" >COLLEGE10</span></p>
                        <p className="text-sm font-light mt-2 mb-3">Choose from Web Dev, Machine Learning, Python, React & more</p>
                        <p className="text-xs font-light bg-gray-200 p-1 rounded-md inline mb-3 ">Government Certified Trainings</p>
                    </div>

                        {filteredInternships.length > 0 ? (
                            filteredInternships.map((item, index) => (
                                <InternshipCard key={index} internship={item} />
                            ))
                        ) : (
                            <p className="text-center text-gray-600 mt-10">No internships found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;
