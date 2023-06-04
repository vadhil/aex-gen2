import Hero from "./Hero";
import Pertanyaan from "./pertanyaan";
import Pink from "./Pink";
import Pricing from "./Pricing";
import Kelebihan from "./Kelebihan";
import Testimoni from "./Testimoni";
import CardImport from "../components/NikeCard";

export default function Home() {
 

  
  return (
      <>
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

