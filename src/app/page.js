
import Hero from "@/components/Hero";
import AllFacilitiesPage from "./allFacilities/page";
import FieldRating from "@/components/FieldRating";
import SliderClub from "@/components/SliderClub";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SliderClub></SliderClub>
       <FieldRating></FieldRating>
      <AllFacilitiesPage></AllFacilitiesPage> 
    </div>
  );
}
