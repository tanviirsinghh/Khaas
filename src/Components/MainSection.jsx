
export default function MainSection() {
  return (
    // <div className="">
<section>
    <header>
        {/* Header */}
        <div className="bg-green-950 h-full relative ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className=" relative  bg-green-950 flex items-center justify-between h-16 lg:h-[72px]">


                    <div className="relative w-2/12 flex items-center flex-shrink-0 ml-4 lg:ml-0">

                        <a href="#" title="" className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">

                            <img className="relative top-2 w-11/12" src="../img/NobleStitch-removebg-preview.png" alt="" />

                        </a>

                    </div>

                    <div className="flex items-center justify-end ml-auto ">
                        {/* <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            <a href="#" title="" className="text-base font-sans text-yellow-500 transition-all duration-200 rounded hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Create Free Account </a>

                            <a href="#" title="" className=" text-base font-sans text-yellow-500 transition-all duration-200 rounded hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Login </a>
                        </div> */}

                        <div className="flex items-center justify-end space-x-5 ">
                            {/* <span className="hidden   h-6 bg-yellow-500 lg:block" aria-hidden="true"></span> */}

                            <button type="button" className="p-2 -m-2 text-peela transition-all duration-200 hover:text-gray-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            <span className="w-px h-6 text-peela lg:hidden" aria-hidden="true"></span>

                            <button type="button" className="inline-flex items-center p-2 -m-2 text-peela transition-all duration-200 lg:ml-6 hover:text-gray-700">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold  text-peela rounded-full"> 2 </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
{/* section */}
    <div className=" bg-green-950 h-screen relative  pt-12 sm:pt-16 lg:py-36 xl:py-48">
        <div className="  absolute top-14 right-20 w-2/6 hidden lg:block ">
        {/* <img className="object-cover object-right w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png" alt="" /> */}

                <img className="h-full w-full" src="../img/manequinside.jpg" alt="" />

        </div>
        <div className=" absolute   top-24 left-2/4 w-1/6 hidden lg:block ">
        {/* <img className="object-cover object-right w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png" alt="" /> */}
        <img className="h-full w-full" src="/img/sardarmanequincut.jpg" alt="" />


        </div>

        <div className="  w-auto absolute inset-x-96 top-0 hidden lg:block">
            <div className="w-full  flex justify-center  py-5 ">
                <div className=" sm:px-6 lg:px-8 max-w-7xl">
                    <nav className="flex items-center space-x-8">
                        <a href="#" title="" className="font-custom text-sm font-medium text-peela transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> All Brands </a>

                        <a href="#" title="" className="font-custom text-sm font-medium text-peela transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Men </a>

                        <a href="#" title="" className="font-custom text-sm font-medium text-peela transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Women </a>

                        <a href="#" title="" className="font-custom text-sm font-medium text-peela transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Accessories </a>

                        <a href="#" title="" className="font-custom text-sm font-medium text-peela transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Sports </a>

                        <a href="#" title="" className="font-custom text-sm font-medium text-peela transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Kids </a>
                    </nav>
                </div>
            </div>
        </div>

        <div className="  w-1/2 h-full  px-4 mx-0 ">
            <div className="   bottom-9  text-left pl-20">
                <p className="font-custom4 font-bold text-base   text-peela">Use “FIT40” coupon to get 40% flat discount</p>
                <h1 className="font-custom4 font-semibold mt-3 text-4xl   text-peela sm:mt-8 sm:text-5xl xl:text-7xl">Bespoke menswear: Immaculate style meets intricate craftsmanship.</h1>

                <div className="mt-8 sm:mt-12">
                    <a
                        href="#"
                        title=""
                     className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3
                            text-base
                            font-custom3
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-peela
                            border border-transparent
                            rounded-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900
yellow                            focus:ring-offset-[#FFE942]
                        "
                        role="button"
                    >
                        Book an Appointment
                    </a>
                </div>
            </div>

            {/* <div className=" bg-grey-300 mt-8 lg:hidden">
                <img className="w-full mx-auto" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/bg.png" alt="" />
            </div> */}
        </div>
    </div>
</section>
    // </div>
  )
}
