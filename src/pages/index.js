import Section1 from "src/components/Hero/Sect1.component";
import Sect2 from "src/components/Hero/Sect2.component";

export default function Home() {
  return (
    <div className="flex flex-col mt-8">
      {/* Product Categories */}
      <Section1 />
      <Sect2 />
    </div>
  );
}
