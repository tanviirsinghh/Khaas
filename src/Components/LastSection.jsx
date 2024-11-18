// import React from 'react'

export default function LastSection() {
  return (

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

            
            </div>
        </div>
    </section>


  )
}
