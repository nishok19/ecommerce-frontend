import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
import Header from "src/components/Header.component";
import Footer from "src/components/Footer.component";
import MainLayout from "src/layout/main-layout";

export default function App({ Component, pageProps }) {
  // const user = false;
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
