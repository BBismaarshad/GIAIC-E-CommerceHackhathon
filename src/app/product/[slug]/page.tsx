import React from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/navber";
import { FaPlus } from "react-icons/fa6";
import GreenHeader from "@/components/GreenHeader";
import { FaMinus } from "react-icons/fa";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        _type,
        image,
        colors,
        description,
        
        }`,
    { slug }
  );
}
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div>
      <GreenHeader />
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {product.image && (
              <div className="lg:w-1/2 w-full flex justify-center">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full h-auto rounded-lg"
                  width={600}
                  height={600}
                />
              </div>
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-2 sm:px-0">
              <h2 className="text-sm sm:text-base title-font text-gray-500 tracking-widest">
                {product._type}
              </h2>
              <h1 className="scroll-m-20 mt-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-1">
                {product.productName}
              </h1>
              
              {/* rating */}
              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                  defaultChecked
                  aria-label="2 stars"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                  aria-label="3 stars"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                  aria-label="4 stars"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                  aria-label="5 stars"
                />
              </div>
              <div className="divider"></div>

              <p className="leading-relaxed scroll-m-20 text-sm sm:text-base font-normal text-[#858585]">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row mt-6 items-start sm:items-center pb-5 border-b-2 border-gray-100 mb-5 gap-4 sm:gap-0">
                <div className="flex flex-wrap items-center">
                  <span className="mr-3 scroll-m-20 text-sm sm:text-base font-semibold tracking-tight">
                    Color
                  </span>
                  <button
                    className="border-2 border-gray-300 mr-2 sm:mr-3 bg-white rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    aria-label="White color"
                  />
                  <button
                    className="border-2 border-gray-300 mr-2 sm:mr-3 bg-[#23A6F0] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    aria-label="Blue color"
                  />
                  <button
                    className="border-2 border-gray-300 mr-2 sm:mr-3 bg-[#E77C40] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    aria-label="Orange color"
                  />
                  <button
                    className="border-2 border-gray-300 mr-2 sm:mr-3 bg-[#252B42] rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    aria-label="Dark color"
                  />
                </div>
                <div className="flex items-center mt-3 sm:mt-0">
                  <span className="mr-3 scroll-m-20 text-sm sm:text-base font-semibold tracking-tight">
                    Size
                  </span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm sm:text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* quantity */}
              <div className="flex items-center mt-4 sm:mt-6">
                <span className="mr-3 scroll-m-20 text-sm sm:text-base font-semibold tracking-tight">
                  Quantity
                </span>
                <button className="flex w-fit h-fit text-white bg-[#23A6F0] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#51afe6] duration-300 rounded text-sm sm:text-base" aria-label="Decrease quantity">
                  <FaMinus className="mr-2 h-4 w-4 items-center justify-center" />
                </button>
                <div className="mr-2 ml-2 scroll-m-20 text-sm sm:text-base font-semibold tracking-tight min-w-[30px] text-center">
                  {1}
                </div>
                <button className="flex w-fit h-fit text-white bg-[#23A6F0] border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#51afe6] duration-300 rounded text-sm sm:text-base" aria-label="Increase quantity">
                  <FaPlus className="mr-2 h-4 w-4 flex items-center justify-center text-center" />
                </button>
              </div>
              
              {/* divider */}
              <div className="divider"></div>
              
              {/* price */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
                <span className="title-font font-medium text-xl sm:text-2xl text-gray-900">
                  Rs.{product.price}
                </span>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-3 sm:mt-0 sm:ml-auto">
                  <button className="flex w-full sm:w-auto text-white bg-[#23A6F0] border-0 py-2 sm:py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#51afe6] rounded text-sm sm:text-base">
                    Buy Now
                  </button>
                  <button className="flex w-full sm:w-auto mt-2 sm:mt-0 sm:ml-3 text-white bg-[#23A6F0] border-0 py-2 sm:py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#51afe6] rounded text-sm sm:text-base">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
