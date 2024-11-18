// import React from 'react'

export default function LastSection() {
  return (
    // <div className="relative">
    // <header className="absolute inset-x-0 top-0 z-10 w-full">
    //     <div className="px-4 mx-auto sm:px-6 lg:px-8">
    //         <div className="flex items-center justify-between h-16 lg:h-20">
    //             <div className="flex-shrink-0">
    //                 <a href="#" title="" className="flex">
    //                     <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg" alt="" />
    //                 </a>
    //             </div>

    //             <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
    //                 {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
    //                 {/* <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    //                 </svg> */}

    //                 {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
    //                 {/* <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    //                 </svg> */}
    //             </button>

    //             <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
    //                 <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Features </a>

    //                 <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>

    //                 <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>

    //                 <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>

    //                 <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600" role="button"> Try for free </a>
    //             </div>
    //         </div>
    //     </div>
    // </header>

    <section className="bg-green-950 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="absolute bottom-0 right-0 hidden lg:block">
                    <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                </div>

                <div className="relative  px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                    <h2 className="text-1xl font-custom font-semibold text-peela sm:text-6xl xl:text-6xl">
                    The Visionary <br /> to design for you  <br />
                       <span className="text-7xl font-bold text-purple-950">KHASS <span className=""></span></span>
                    
                    </h2>
                    <p className="mt-8 text-2xl text-peela font-custom">Dedicated to Crafting Bespoke Men&apos;s Wear</p>

                    <form action="#" method="POST" className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                        <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                            <div className="flex flex-col items-start sm:flex-row">
                                <div className="flex-1 w-full min-w-0">
                                    <div className="relative bg-white-900 text-grey-400 focus-within:text-gray-600">
                                        {/* <label htmlFor="email" className="sr-only"></label> */}
                                        <input
                                            type="email"
                                            name="email"
                                            // id="email"
                                            placeholder="Book an one to one appointment"
                                            className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="inline-flex items-center justify-center w-full px-8 py-4 mt-4 font-bold text-peela font-custom transition-all duration-200 bg-green-950 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-green-600 focus:bg-green-600">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className="mt-5 text-base text-peela font-custom">A Lifetime of Experience in Tailoring</p>
                </div>
                <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                    {/* <img className="w-32 h-32 md:w-40 md:h-40" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png" alt="" /> */}
                </div>
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                <div className="absolute inset-24">
                    <img className="object-cover w-full h-full scale-150" src="/src/Components/Khass/460329576_1244499949789152_1711087044365843511_n.jpg" alt="" />
                    {/* <img className=" absolute w-96 h-xl top-52 left-96 " src="/img/lastsmall.jpg" alt="" /> */}

                </div>
  

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* <div className="absolute bottom-0 left-0">
                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="flex items-center ">
                            <h2 className="font-bold text-violet-900 font-custom text-7xl ml-2.5">AMAN SINGH VIRK</h2>
                        </div>
                        <p className="max-w-xs mt-1.5 text-xl text-white">Professionals have organized their desk via PostCra</p>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
// </div>

  )
}
