import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.css";
import MainLayout from "src/layout/main-layout";

import { store } from "src/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
