import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "@/components/navBar";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <AppBar />
  <Component {...pageProps} />
  </>;
}
