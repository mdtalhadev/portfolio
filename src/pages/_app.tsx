import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppBar from "@/components/navBar";
import Footer from "@/components/footer";
import WhatsappIcon from "@/components/whatsappIcon";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <AppBar />
    <Component {...pageProps} />
    <Footer />
    <WhatsappIcon /> 
  
  </>;
}
