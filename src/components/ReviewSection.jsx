import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      title: "Customer Reviews!",
      reviewText:
        "I've been using this cream for three weeks now, and the results are simply amazing. My skin has become more moisturized, supple, and radiant. The texture is light, absorbs quickly, and doesn't leave a greasy shine.",
      authorName: "Ashley",
      rating: 5.0,
      authorImage: "/Ellipse 28.png",
      productImage: "/customerimage.png",
      floatingProduct: {
        name: "Cucumber Extract",
        price: "24.00",
        originalPrice: "32.00",
        discount: "10%",
        image: "/product01.png",
      },
    },
  ];

  const data = reviews[0];

  return (
    <section className="bg-[#FAFFE5] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Side */}
        <div className="order-2 lg:order-1 flex flex-col justify-center space-y-35">
          <h2 className="text-4xl md:text-6xl font-serif text-[#222222] leading-tight">
            {data.title}
          </h2>

          <div className="space-y-6 max-w-xl">
            <p className="text-lg md:text-xl text-[#222222] leading-relaxed italic font-light">
              {data.reviewText}
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-lg text-[#1A1A1A]">
                  {data.authorName}
                </h4>
                <div className="flex items-center text-[#748E3A]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1.5 font-bold">
                    {data.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 pt-6">
            <button className="p-4 border border-gray-300 rounded-full hover:bg-white hover:border-gray-400 transition-all text-gray-500 group">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="p-4 border border-gray-300 rounded-full hover:bg-white hover:border-gray-400 transition-all text-gray-500 group">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          
          {/* Main Image */}
          <div className="relative w-full max-w-md h-[420px] md:max-w-2xl md:h-[664px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              src={data.productImage}
              alt="Skin Care Section"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -left-4 md:-left-22 top-[25%] bg-white p-4 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-[240px] md:w-[260px] border border-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
            
            <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4">
              <div className="absolute top-2 left-2 bg-[#5B7228] text-white text-[11px] px-3 py-1.5 rounded-lg font-bold z-10 shadow-sm">
                {data.floatingProduct.discount} OFF
              </div>
              <Image
                src={data.floatingProduct.image}
                alt="Product Bottle"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h5 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                {data.floatingProduct.name}
              </h5>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-lg font-black text-[#1A1A1A]">
                    ${data.floatingProduct.price}
                  </span>
                  <span className="text-gray-400 text-xs line-through">
                    ${data.floatingProduct.originalPrice}
                  </span>
                </div>

                <button className="bg-[#5B7228] text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-[#4a5d21] transition-all transform hover:scale-105 cursor-pointer active:scale-95 shadow-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewSection;