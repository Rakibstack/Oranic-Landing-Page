
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "FACE CARE",
    image: "/category1.png",
  },
  {
    title: "BODY CARE",
    image: "/category2.png",
  },
  {
    title: "HAIR CARE",
    image: "/category3.png",
  },
  {
    title: "ORGANIC",
    image: "/category4.png",
  },
];

export default function ChooseCategory() {
  return (
    <section className="bg-[#FAFFE5] py-16">
      <div className="max-w-11/12 mx-auto container ">

        {/* Top Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[2.5rem] font-medium text-[#222222]">
            Choose by category
          </h2>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
             <ArrowLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
             <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl  transition-all hover:-translate-y-5 duration-400 ease-in-out overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
                className="w-full h-[400px] object-cover"
              />

              {/* Bottom Blur Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-xl py-3 text-center">
                <p className="text-white cursor-pointer font-medium tracking-wide">
                  {item.title}
                </p>
              </div>

              {/* Center Arrow Only for Hair Care */}
              {item.title === "HAIR CARE" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white backdrop-blur-sm">
                    <ArrowRight size={22} />
                  </div>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}