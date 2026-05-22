
import Hero from "@/components/Hero";

import FieldRating from "@/components/FieldRating";
import SliderClub from "@/components/SliderClub";
import PlayBasket from "@/components/PlayBasket";
import AllFacilitiesPage from "../(auth)/allFacilities/page";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SliderClub></SliderClub>
       <FieldRating></FieldRating>
      {/* <AllFacilitiesPage></AllFacilitiesPage>  */}
      <AllFacilitiesPage></AllFacilitiesPage>
      <PlayBasket></PlayBasket>
    </div>
  );
}
