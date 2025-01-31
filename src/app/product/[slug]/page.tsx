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
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt="productimages"
                height={400}
                width={400}
              />
            )}
            {/* <Slugcomponents /> */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm  title-font text-gray-500 tracking-widest">
                {product.productName}
              </h2>
              <h1 className="scroll-m-20  mt-2 text-2xl font-semibold tracking-tight text-gray-900 mb-1">
                The Catcher in the Rye
              </h1>
              {/* rati */}

              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-[#F3CD03]"
                />
              </div>
              <div className="divider"></div>

              <p className="leading-relaxed scroll-m-20 text-base font-normal text-[#858585]">
                {product.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight">
                    Color
                  </span>

                  <button
                    className="border-2 border-gray-300 mr-1 bg-white rounded-full
           w-6 h-6 focus:outline-none active:border-black focus:border-black"
                  />

                  <button
                    className="border-2 border-gray-300 mr-1 bg-[#23A6F0] rounded-full
             w-6 h-6 focus:outline-none active:border-black focus:border-black"
                  />

                  <button
                    className="border-2 border-gray-300 mr-1 bg-[#E77C40] rounded-full
             w-6 h-6 focus:outline-none active:border-black focus:border-black"
                  />

                  <button
                    className="border-2 border-gray-300 mr-1 bg-[#252B42] rounded-full
             w-6 h-6 focus:outline-none active:border-black focus:border-black"
                  />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight">
                    Size
                  </span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
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
              {/* quanity */}
              <div className="flex items-center ">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight">
                  Quantity
                </span>
                <button className="flex w-fit h-fit text-white bg-[#23A6F0] border-0 py-2 px-6 focus:outline-none hover:bg-[#51afe6]  duration-300 rounded">
                  <FaMinus className="mr-2 h-4 w-4 items-center justify-center " />
                </button>
                <div className="mr-2  ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                  {1}
                </div>

                <button className="flex  w-fit h-fit text-white bg-[#23A6F0] border-0 py-2 px-6 focus:outline-none hover:bg-[#51afe6]  duration-300 rounded">
                  <FaPlus className="mr-2 h-4 w-4  flex items-center justify-center text-center " />
                </button>
              </div>
              {/* divider */}
              <div className="divider"></div>
              {/* price */}
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs.{product.price}
                </span>

                <button className="flex ml-auto text-white bg-[#23A6F0] border-0 py-2 px-6 focus:outline-none hover:bg-[#51afe6] rounded">
                  Buy Now
                </button>

                <button className="flex   ml-10 text-white bg-[#23A6F0] border-0 py-2 px-6 focus:outline-none hover:bg-[#51afe6] rounded">
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
