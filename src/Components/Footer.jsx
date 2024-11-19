
export default function Footer() {
  return (
    <footer className="footer footer-center bg-green-950 text-primary-content p-10">
    <aside>
        <img className="h-14" src="/img/fl.svg" alt="" />
      
      <p className="font-bold text-peela font-custom text-lg">
        KHASS
        <br />
        Known for meticulous attention to detail and impeccable craftsmanship.
      </p>
      <p className="text-peela font-custom text-md">Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
    <nav>
      <div className="grid grid-flow-col gap-4 ">
        <a href="https://www.instagram.com/khaasbypunjabfabrics/profilecard/?igsh=MWw1OGI4Znp0Mnlzbw==">
         
          <img className="h-8" src="/src/Components/Khass/insta.svg" alt="" />
        

        </a>
        <a href="">
          
                    <img className="h-8" src="/src/Components/Khass/fb.svg" alt="" />

        </a>
        <a href="" target="_blank" className="hover:cursor-auto">
         
     <img className="h-8" src="/img/youtube.svg" alt="" />
   
     </a>
      </div>
    </nav>
  </footer>
  )
}
