import Image from "next/image"

export default function Kelebihan() {
    const Card = (animate, src, title, content) => {
        return (
          <div className="CARD group border-primary border- 
          border-spacing-5 p-4/ rounded-lg shadow-md hover:shadow-xl z-10
          relative duration-150 transition-shadow ease-in
          overflow-hidden 
           h-[18rem] w-[18rem] 64 bg-white">
          <div className={`img-card rounded-full py-5 flex group-hover:animate-${animate}`}>
          <Image width={130} height={130} src={src} 
          className={`mx-auto p-5 group-hover:animate-bounce/
           transition-all animate-/ duration-300 animate-bounce/
            ease-in delay-100`} alt="" />
            </div>
          <div className="text-card p-4 flex flex-col absolute 
          justify-center items-center/ top-[7rem] text-center  ">
            <h4 className="text-xl font-black text-[#545572] /text-[#22293e] ">{title}</h4>
            <p className="group-hover:animate-pulse text-[#22293e]/
             text-[#545572]">{content}</p>
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
                {Card("bounce","/3drocket.png", "Anti Lemot", "Bebas dari keterlambatan, jasa pembuatan website kami menawarkan kecepatan tanpa hambatan.")}
                {Card("pulse","/3dwww.png", "SEO Friendly", "Mengoptimalkan peringkat pencarian, kami menciptakan website yang ramah SEO untuk keberhasilan online Anda.")}
                {Card("bounce","/responsive.png", "Responsive", "Tampil sempurna di setiap perangkat, desain responsif kami menjawab kebutuhan pengguna mobile.")}
                {Card("pulse","/unique-design.png", "Design Premium", "Kesempurnaan visual, website dengan desain premium yang memukau akan meningkatkan citra merek Anda.")}
                {Card("spin","/maintenance.png", "Gratis Maintenance", "Lebih dari sekadar pembuatan, kami juga menyediakan layanan perawatan website yang andal.")}
            </div>
    </div> 
    </section>
  )
}
