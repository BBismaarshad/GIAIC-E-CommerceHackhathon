// // import React from "react";
// // import Image from "next/image";
// // import product1 from "../../public/Images/product1.png";
// // import product2 from "../../public/Images/product2.png";
// // import product3 from "../../public/Images/product3.png";
// // import product4 from "../../public/Images/product4.png";
// // import product5 from "../../public/Images/product5.png";
// // import product6 from "../../public/Images/product6.png";
// // import product7 from "../../public/Images/product7.png";
// // import product8 from "../../public/Images/product8.png";

// // const ProductList = () => {
// //   return (
// //     <div className="py-24 bg-white">
// //       <div className="container mx-auto px-4">
// //         <h4 className="font-semibold text-center mb-1 text-xl text-[#737373]">
// //           Featured Products
// //         </h4>
// //         <h2 className="text-center font-semibold text-3xl md:text-5xl mt-5 text-[#252B42]">
// //           BESTSELLER PRODUCTS
// //         </h2>
// //         <p className="text-center mt-5 mb-10 font-light text-sm text-[#737373]">
// //           Problems trying to resolve the conflict between
// //         </p>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
// //           {[
// //             product1,
// //             product2,
// //             product3,
// //             product4,
// //             product5,
// //             product6,
// //             product7,
// //             product8,
// //           ].map((product, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center"
// //             >
// //               <Image
// //                 src={product}
// //                 alt={`Product ${index + 1}`}
// //                 className="rounded-md"
// //               />
// //               <h3 className="font-bold text-center text-[#252B42] pt-5">
// //                 Graphic Design
// //               </h3>
// //               <h5 className="text-[#737373] text-center font-bold py-2">
// //                 English Department
// //               </h5>
// //               <h6 className="text-center">
// //                 <span className="text-[#BDBDBD] font-bold">$16.48</span>{" "}
// //                 <span className="font-bold text-[#23856D]">$6.48</span>
// //               </h6>
// //               <div className="flex justify-center space-x-2 py-3">
// //                 {[14, 15, 16, 17].map((ellipse, i) => (
// //                   <Image
// //                     key={i}
// //                     src={`/Ellipse ${ellipse}.png`}
// //                     alt="rounded"
// //                     width={16}
// //                     height={16}
// //                   />
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductList;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Product } from "../../types/products";
// import { client } from "@/sanity/lib/client";

// import { four } from "@/sanity/lib/queries";

// import React, { useEffect, useState } from "react";
// import { urlFor } from "@/sanity/lib/image";
// import { addToCart } from "@/app/action/action";
// import swal from "sweetalert2";

// export default function ProductList() {
//   const [product, setProduct] = useState<Product[]>([]);
//   useEffect(() => {
//     async function fetchproduct() {
//       const fetchedProduct: Product[] = await client.fetch(four);
//       setProduct(fetchedProduct);
//     }
//     fetchproduct();
//   }, []);

//   const handleAddToCard = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     swal.fire({
//       position: "top",
//       icon: "success",
//       title: `${product.productName} added  to  cart`,
//       showConfirmButton: false,
//       timer: 1000,
//     });
//     addToCart(product);
//   };
//   return (
//     <div className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <h4 className="font-semibold text-center mb-1 text-xl text-[#737373]">
//           Featured Products
//         </h4>
//         <h2 className="text-center font-semibold text-3xl md:text-5xl mt-5 text-[#252B42]">
//           BESTSELLER PRODUCTS
//         </h2>
//         <p className="text-center mt-5 mb-10 font-light text-sm text-[#737373]">
//           Problems trying to resolve the conflict between
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
//           {product.map((product) => (
//             <div key={product._id}>
//               <Link href={`/product/${product.slug.current}`}>
//                 <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center w-[300px] h-[500px]">
//                   {product.image && (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt="productimages"
//                       width={239}
//                       height={427}
//                     />
//                   )}
//                 </div>
//                 <h3 className="font-bold text-center text-[#252B42] pt-5">
//                   {" "}
//                   {product.productName}
//                 </h3>
//                 <h5 className="text-[#737373] text-center font-bold py-2">
//                   English Department
//                 </h5>
//                 <h6 className="text-center">
//                   <span className="text-[#BDBDBD] font-bold">$16.48</span>{" "}
//                   <span className="font-bold text-[#23856D]">$6.48</span>
//                 </h6>

//                 <div className="flex justify-center space-x-2 py-3">
//                   {[14, 15, 16, 17].map((ellipse, i) => (
//                     <Image
//                       key={i}
//                       src={`/Ellipse ${ellipse}.png`}
//                       alt="rounded"
//                       width={16}
//                       height={16}
//                     />
//                   ))}
//                 </div>
//                 <button
//                   className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md
//                  hover:shadow-lg hover:scale-110
//                   transition-transform duration-300 ease-in-out"
//                   onClick={(e) => handleAddToCard(e, product)}
//                 >
//                   AddToCard
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { four } from "@/sanity/lib/queries";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/action/action";
import swal from "sweetalert2";

export default function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(four);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    swal.fire({
      position: "top",
      icon: "success",
      title: `${product.productName} added to cart!`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-xl text-gray-600 font-medium">
          Featured Products
        </h4>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mt-4">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-center text-gray-500 mt-3 mb-10 text-lg">
          Find the best products with amazing discounts
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg p-5 transition transform hover:scale-105">
              <Link href={`/product/${item.slug.current}`}>
                <div className="flex flex-col items-center">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={250}
                      height={300}
                      className="rounded-lg"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">{item.productName}</h3>
                  <h5 className="text-gray-500 text-sm font-medium">English Department</h5>
                  <h6 className="text-lg font-bold mt-2">
                    <span className="text-gray-400 line-through mr-2">$16.48</span>
                    <span className="text-green-600">$6.48</span>
                  </h6>
                </div>
              </Link>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                onClick={(e) => handleAddToCart(e, item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
