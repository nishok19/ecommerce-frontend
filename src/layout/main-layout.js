import { useRouter } from "next/router";
import Footer from "src/components/Footer.component";
import Header from "src/components/Header.component";
import Login from "src/components/Login.component";

const MainLayout = ({ children }) => {
  const isUserLogged = false;
  const router = useRouter();

  // if (!isUserLogged) {
  //   router.replace("/login");
  //   return null;
  // } else {
  //   // router.push("/login")
  return (
    <>
      {isUserLogged ? <Header /> : null}
      {children}
      {isUserLogged ? <Footer /> : null}
    </>
  );
};
// };
export default MainLayout;
