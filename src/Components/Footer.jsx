
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
          {/* <svg
            xmlns="/img/2_1159x822.webp"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg> */}
          <img className="h-8" src="/img/insta.svg" alt="" />
        </a>
        <a href="">
          
                    <img className="h-8" src="/img/fb.svg" alt="" />

        </a>
        <a href="" target="_blank" className="hover:cursor-auto">
         
     <img className="h-8" src="/img/youtube.svg" alt="" />
   
     </a>
      </div>
    </nav>
  </footer>
  )
}
