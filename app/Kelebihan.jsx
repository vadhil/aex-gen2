import Image from "next/image"

export default function Kelebihan() {
    const Card = (src, title) => {
        return (
          <div className="CARD group border-primary border- 
          border-spacing-5 p-4/ rounded-lg shadow-md hover:shadow-xl
          
          relative duration-150 transition-shadow ease-in
          overflow-hidden 
           h-[18rem] w-[18rem] 64 bg-white">
          <div className="img-card rounded-full py-5 flex">
          <Image width={130} height={130} src={src} 
          className="mx-auto p-5 group-hover:animate-bounce
           transition-all hover:animate-pulse duration-300 ease-in delay-100 
           
          " alt="" />
            </div>
          <div className="text-card p-4 flex flex-col absolute 
          justify-center items-center/ top-[7rem] text-center  ">
            <h4 className="text-xl font-black text-indigo-500/ ">{title}</h4>
            <p className="group-hover:animate-pulse">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate saepe quaerat porro nihil corporis reiciendis?</p>
          </div>
      </div>
        )
      }
  return (
    <section>
        <div className="container-kelebihan-AEX 
        py-16 flex flex-col justify-center items-center gap-9">
           <div className="title-box flex flex-col text-center gap-3">
            <h2 className="sub-title-primary px-[3rem]">
                MENGAPA PILIH JASA PEMBUATAN WEBSITE AEX DIGITAL</h2>
            <h3 className="lead text-lg lg:text-xl text-center px-[3rem] lg:px-[12rem] text-gray-700">
                Kami tidak hanya fokus pada <span className="text-primary">jasa pembuatan website</span>, tetapi juga memberikan layanan modifikasi desain website yang dapat meningkatkan kinerja bisnis Anda di Indonesia</h3>
        </div>
            <div className="card-box flex flex-wrap justify-center lg:mx-[10rem]  gap-3">
                {Card("/3drocket.png", "Anti Lemot", "")}
                {Card("/3dwww.png", "SEO Friendly", "")}
                {Card("/responsive.png", "Responsive", "spin")}
                {Card("/unique-design.png", "Design Unik dan Premium", "spin")}
                {Card("/maintenance.png", "Gratis Maintenance", "spin")}
            </div>
    </div> 
    </section>
  )
}
