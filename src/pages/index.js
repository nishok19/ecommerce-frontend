import Fav from "src/components/Hero/Fav.component";
import Section1 from "src/components/Hero/Sect1.component";

export default function Home() {
  return (
    <div className="flex flex-col mt-8">
      {/* Product Categories */}
      <Section1 />
      <Fav />
    </div>
  );
}
