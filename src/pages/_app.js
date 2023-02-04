import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
import Header from "src/components/Header.component";
import Footer from "src/components/Footer.component";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
