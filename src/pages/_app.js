import Header from "src/components/Header.component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
