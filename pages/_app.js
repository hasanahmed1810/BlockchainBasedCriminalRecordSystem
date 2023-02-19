import "../styles/globals.css";
// import NoSSR from "react-no-ssr";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
