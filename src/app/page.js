
import Hero from "@/components/Hero";
import AllFacilitiesPage from "./allFacilities/page";
import FieldRating from "@/components/FieldRating";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FieldRating></FieldRating>
      <AllFacilitiesPage></AllFacilitiesPage>
    </div>
  );
}
