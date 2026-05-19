import FacilityCard from '@/components/FacilityCard';
import React from 'react';


const AllFacilitiesPage = async () => {
    const res= await fetch("http://localhost:5000/addFacility");
    const facility = await res.json();
    console.log(facility);
    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <h1 className='font-bold text-3xl px-5 sm:text-4xl lg:text-5xl pb-5'>All Facility</h1>
            <div className='grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    facility.map(facility=><div key={facility._id}>
                        <FacilityCard facility={facility}></FacilityCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllFacilitiesPage;