import styles from './NikeCard.module.css'


export default function CardImport() {
  return (
    <div class={styles.container}>
    <div class={styles.card}>
      <div class={styles.imgContainer}>
          <div className="text-primary w-[300px] absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              hello
          </div>
      </div>
      <div class={styles.content}>
        <h2>Nike Air</h2>
        <div class={styles.size}>
          <h3>Size:</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <div class={styles.colors}>
          <h3>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="">Buy Now</a>
      </div>
    </div>
    <div class={styles.card}>
      <div class={styles.imgContainer}>
        <img
src='/black-laptop.jpg'
alt="Nike Shoes"
        />
      </div>
      <div class={styles.content}>
        <h2>Nike Air</h2>
        <div class={styles.size}>
          <h3>Size:</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <div class={styles.colors}>
          <h3>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="">Buy Now</a>
      </div>
    </div>
    <div className="w-80 h-[450px] bg-green-300 rounded-xl overflow-hidden group relative">
        <div className="w-full h-[220px] absolute top-1/2
         group-hover:top-[0%] group-hover:translate-y-[0%] 
         -translate-y-1/2 duration-500 transition-all">
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Nike Shoes"
            className="w-[300px] absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-25deg]"
          />
        </div>
        <div className="content text-center w-full h-[100px] absolute bottom-0 z-10 
        duration-1000 transition-all group-hover:h-[210px]">
          <h2 className="relative font-semibold text-white text-2xl mb-3 tracking-wide">Nike Air</h2>
          <div className="opacity-0 flex items-center justify-center  invisible p-2
          group-hover:opacity-100 group-hover:visible duration-500 delay-400 transition-all">
            <h3 className="text-white mr-2 font-light text-xs uppercase tracking-widest">Size:</h3>
            <span className="inline-block duration-500 text-black bg-white text-xs w-6 h-6 leading-[1.6rem] mx-2 text-center rounded cursor-pointer transition">6</span>
            <span className="inline-block duration-500 transiti text-black bg-white text-xs w-6 h-6 leading-[1.6rem] mx-2 text-center rounded cursor-pointer transition">7</span>
            <span className="inline-block duration-500 text-black bg-white text-xs w-6 h-6 leading-[1.6rem] mx-2 text-center rounded cursor-pointer transition">8</span>
            <span className="inline-block duration-500 text-black bg-white text-xs w-6 h-6 leading-[1.6rem] mx-2 text-center rounded cursor-pointer transition">9</span>
          </div>
          <div className="opacity-0 flex items-center justify-center  invisible p-2
          group-hover:opacity-100 group-hover:visible duration-500 delay-[0.6s] transition-all">
            <h3 className="text-white mr-2 font-light text-xs uppercase tracking-widest">Color:</h3>
            <span className="w-4 h-4 mx-2 cursor-pointer rounded-full bg-yellow-300 "></span>
            <span className="w-4 h-4 mx-2 cursor-pointer rounded-full bg-red-500 "></span>
            <span className="w-4 h-4 mx-2 cursor-pointer rounded-full bg-blue-500 "></span>
          </div>
          <a href="" className="opacity-0 group-hover:opacity-100
           text-black rounded mt-4 font-semibold inline-block px-5 py-2 bg-white 
           no-underline translate-y-[3.125rem] group-hover:translate-y-0 transition-all delay-[0.75s] duration-500">Buy Now</a>
        </div>
      </div>
  </div>

  )
}
