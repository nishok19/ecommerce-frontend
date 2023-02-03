import Header from "src/components/Header.component";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
