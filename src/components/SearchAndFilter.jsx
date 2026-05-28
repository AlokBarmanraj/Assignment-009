"use client";
import { useEffect, useMemo, useState } from "react";
import FacilityCard from "./FacilityCard";
import { Button } from "@heroui/react";

const SearchAndFilter = () => {
  const [facilities, setFacilities] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const res = await fetch("http://localhost:5000/allFacility");
        const data = await res.json();
        setFacilities(data);
      } catch (error) {
        console.error("Failed to fetch facilities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  const facilityTypes = [
    ...new Set(facilities.map((item) => item.facilityType)),
  ];

  const filteredFacilities = useMemo(() => {
    return facilities.filter((facility) => {
      const matchSearch = facility.facilityName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchType =
        selectedType === "" || facility.facilityType === selectedType;

      return matchSearch && matchType;
    });
  }, [facilities, searchTerm, selectedType]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search facility name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full md:w-[400px] border rounded-xl px-4 py-3 outline-none"
        />


        <Button
          onClick={() => setSearchTerm(searchInput)}
          className="p-6 text-white rounded-xl w-full md:w-auto"
        >
          Search
        </Button>


        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full md:w-[250px] border rounded-xl px-4 py-3 outline-none"
        >
          <option value="">All Facility Types</option>

          {facilityTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading facilities...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <FacilityCard key={facility._id} facility={facility} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
