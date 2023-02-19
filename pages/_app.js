import "../styles/globals.css";
import AuthGuard from "../components/AuthGuard";
// import NoSSR from "react-no-ssr";

function MyApp({ Component, pageProps }) {
  return (
    <AuthGuard>
      <Component {...pageProps} />
    </AuthGuard>
  );
}

export default MyApp;
