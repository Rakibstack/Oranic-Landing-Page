
import Image from "next/image";

const products = Array(8).fill({
  title: "Cucumber Extract",
  price: "$24.00",
  oldPrice: "$32.00",
  image: "/product01.png",
  discount: "10%",
});

export default function PopularProducts() {
  return (
    <section className="bg-[#FFFFFF] py-20">
      <div className="max-w-11/12 mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[2.5rem] font-medium text-[#222222]">
            Popular Products
          </h2>

          <button className="px-6 py-2 rounded-full border border-[#6B7F1D] text-[#6B7F1D] font-medium hover:bg-[#6B7F1D] hover:text-white transition">
            View all
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-10">
          {["Face Care", "Body Care", "Hair Care", "Organic"].map(
            (tab, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  index === 0
                    ? "bg-[#6B7F1D] text-white"
                    : "bg-[#E5E5E5] text-[#333]"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={220}
                  className="w-full h-55 object-cover"
                />

                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-[#6B7F1D] text-white text-xs px-3 py-1 rounded-md">
                  {item.discount}
                </span>
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <p className="text-[#555] text-sm mb-2">
                  {item.title}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#222]">
                      {item.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm ml-2">
                      {item.oldPrice}
                    </span>
                  </div>

                  <button className="bg-[#6B7F1D] text-white text-sm px-4 py-1.5 rounded-full hover:bg-[#556915] transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}