import Image from "next/image";
import Hero from "./components/Hero";
import FieldRating from "./components/FieldRating";
import Demo from "./components/Demo";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FieldRating></FieldRating>
      <Demo></Demo>
    </div>
  );
}
