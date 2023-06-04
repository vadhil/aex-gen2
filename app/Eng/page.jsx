import Hero from "./Hero";
import Pertanyaan from "./pertanyaan";
import Pink from "./Pink";
import Pricing from "./Pricing";
import Kelebihan from "./Kelebihan";
import Testimoni from "./Testimoni";
import CardImport from "../components/NikeCard";
import Nav from "./Nav";
import Footer from "../Footer";

export default function Home() {
 

  
  return (
      <>
      <Nav />
        <Hero />
       {/* <CtaCard/> */}
       <Kelebihan />
       <Pricing />
       {/* <CardImport /> */}
       <Testimoni />
       <Pink />
       <Pertanyaan/>
      </>
  )
}

