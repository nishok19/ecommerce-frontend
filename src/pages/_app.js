import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
import Header from "src/components/Header.component";
import Footer from "src/components/Footer.component";
import Login from "src/components/Login.component";
import Singup from "src/components/Signup.component";

export default function App({ Component, pageProps }) {
  const user = false;
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
