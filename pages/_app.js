import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AuthProvider>
  );
}

export default MyApp;
