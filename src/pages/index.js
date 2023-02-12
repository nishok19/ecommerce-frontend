import { useRouter } from "next/router";
import Section1 from "src/components/Hero/Sect1.component";
import Sect2 from "src/components/Hero/Sect2.component";

export default function Home() {
  const router = useRouter();
  const isUserLogged = false;

  return (
    <>
      {/* {!isUserLogged ? (
        () => router.push("/login")
      ) : ( */}
      <div className="flex flex-col justify-center items-center">
        {/* Product Categories */}
        <Section1 />
        {/* Current Offers and Coupons Section */}
        <Sect2 />
      </div>
      {/* )} */}
    </>
  );
}
