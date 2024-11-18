// import React from 'react'

export default function FourthSection() {
  return (
    <section className="bg-green-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 text-lg mb-4 text-peela font-custom">Don&apos;t take our word for it</h2>
            <p className="text-3xl text-peela font-custom">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-26 grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full  p-3 mx-3 bg-green-950" data-aos="fade-up">
              {/* <div>
                <div className="relative inline-flex flex-col mb-4"> */}
                  <img className="h-full w-full" src="/img/noblestitchersfabric.jpg" width={48} height={48} alt="Testimonial 01" />
                  <div className="h2 flex justify-center items-center text-lg font-bold text-peela font-custom">--- Fabric of your choice --- </div>

              
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full mx-3 p-3 bg-green-950" data-aos="fade-up" data-aos-delay="200">
            <img className="h-full w-full" src="/img/drawingofblazor.jpg" width={48} height={48} alt="Testimonial 01" />
            <div className="h2 flex justify-center items-center text-lg font-bold text-peela font-custom">----  Design of your Heart ---- </div>

            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full mx-3 p-3 bg-green-950" data-aos="fade-up" data-aos-delay="400">
            <img className="h-full w-full" src="/img/navyblazor.jpg" width={48} height={48} alt="Testimonial 01" />
            <div className="h2 flex justify-center items-center text-lg font-bold text-peela font-custom">------  Our Magic ----- </div>
            </div>

          </div>

        </div>
      </div>
      </section>
  )
}
