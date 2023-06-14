import { AiFillStar } from "react-icons/ai";
import ProfileImage from "../assets/profile.jpg"
const Testimonials = () => {
    return (
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Have a look at what our clients say</h2>
            </div>
      
            <div className="mt-8 text-center md:order-3 md:mt-16">
              <button className="mb-20 border-blue-700 bg-zinc-50 px-6 py-2 font-medium text-white transition hover:translate-y-1">More reviews on Google Reviews</button>
            </div>
      
            <div className="relative mt-10 md:order-2 md:mt-24">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
              </div>
      
              <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                <div className="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="flex flex-1 flex-col justify-between bg-[#001645] p-6 lg:px-7 lg:py-8">
                    <div className="flex-1">
                      <div className="flex items-center">
                      <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                      </div>
      
                      <blockquote className="mt-8 flex-1">
                        <p className="font-[400] text-xl italic text-white">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus repellat aperiam quam consequatur eligendi totam vitae iusto mollitia esse.”</p>
                      </blockquote>
                    </div>
      
                    <div className="mt-8 flex items-center">
                    <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src={ProfileImage} alt="" />

                      <div className="ml-4">
                      <p className="text-base font-bold text-gray-400">Maani</p>
                        <p className="mt-0.5 text-sm text-gray-500">Full Stack Devloper</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="flex flex-1 flex-col justify-between bg-[#001645] p-6 lg:px-7 lg:py-8">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />

                      </div>
      
                      <blockquote className="mt-8 flex-1">
                        <p className="font-[400] text-xl italic text-white">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus repellat aperiam quam consequatur eligendi totam vitae iusto mollitia esse.”</p>
                      </blockquote>
                    </div>
      
                    <div className="mt-8 flex items-center">
                      <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src={ProfileImage} alt="" />
                      <div className="ml-4">
                      <p className="text-base font-bold text-gray-400">Maani</p>
                        <p className="mt-0.5 text-sm text-gray-500">Full Stack Devloper</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-xl border shadow-sm">
                  <div className="flex flex-1 flex-col justify-between bg-[#001645] p-6 lg:px-7 lg:py-8">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                        <AiFillStar className="h-5 w-5 text-yellow-400" />
                      </div>
      
                      <blockquote className="mt-8 flex-1">
                        <p className="font-[400] text-xl italic text-white">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus repellat aperiam quam consequatur eligendi totam vitae iusto mollitia esse.”</p>
                      </blockquote>
                    </div>
      
                    <div className="mt-8 flex items-center">
                      <img className="h-11 w-11 flex-shrink-0 rounded-full object-cover" src={ProfileImage} alt="" />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-400">Maani</p>
                        <p className="mt-0.5 text-sm text-gray-500">Full Stack Devloper</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default Testimonials