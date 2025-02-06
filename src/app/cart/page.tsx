// // "use client";
// // import React, { useEffect, useState } from "react";
// // import { Product } from "../../../types/products";
// // import {
// //   getCartItems,
// //   removeFromCart,
// //   updateCartQuantity,
// // } from "../action/action";
// // import Swal from "sweetalert2";

// // const CartPage = () => {
// //   const [cartItems, setCartItems] = useState<Product[]>([]);
// //   useEffect(() => {
// //     setCartItems(getCartItems);
// //   }, []);
// //   const handleRemove = (id: string) => {
// //     Swal.fire({
// //       title: "Are You Sure?",
// //       text: "you will not be able to recover this item!",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#33333",
// //       cancelButtonColor: "#d33",
// //       confirmButtonAriaLabel: "Yes , Remove it!",
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         removeFromCart(id);
// //         setCartItems(getCartItems());
// //         Swal.fire("Removed!", "Item has been removed.", "success");
// //       }
// //     });
// //   };

// //   const handleQuantityChange = (id: string, quantity: number) => {
// //     updateCartQuantity(id, quantity);
// //     setCartItems(getCartItems());
// //   };

// //   const handleIncrement = (id: string) => {
// //     const product = cartItems.find((item) => item._id === id);
// //     if (product) handleQuantityChange(id, product.inventory + 1);
// //   };
// //   const handledecrement = (id: string) => {
// //     const product = cartItems.find((item) => item._id === id);
// //     if (product && product.inventory > 1)
// //       handleQuantityChange(id, product.inventory - 1);
// //   };

// //   const calcaltedTotal = () => {
// //     return cartItems.reduce(
// //       (total, item) => total + item.price * item.inventory,
// //       0
// //     );
// //   };

// //   const handledProceed = () => {
// //     Swal.fire({
// //       title: "Proceed to Checkout?",
// //       text: "Please review your cart before checkout",
// //       icon: "question",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: "yes, proceed! ",
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         Swal.fire(
// //           "success",
// //           "your order has been successfully processed",
// //           "success"
// //         );
// //         setCartItems([]);
// //       }
// //     });
// //   };

// //   return (
// //     <div>
// //       <div>
// //         {cartItems.map((item) => (
// //           <div key={item._id}>{item.productName}</div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartPage;

// "use client";

// import React, { useEffect, useState } from "react";

// import { Product } from "../../../types/products";
// import Greenheader from "@/components/GreenHeader";
// import Navber from "../../components/navber";


// import Image from "next/image";
// import {
//   getCartItems,
//   removeFromCart,
//   updateCartQuantity,
// } from "../action/action";
// import Swal from "sweetalert2";
// import { urlFor } from "@/sanity/lib/image";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are You Sure?",
//       text: "You will not be able to recover this item!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#33333",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire("Removed!", "Item has been removed.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) handleQuantityChange(id, product.inventory + 1);
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.inventory > 1)
//       handleQuantityChange(id, product.inventory - 1);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.inventory,
//       0
//     );
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Proceed to Checkout?",
//       text: "Please review your cart before checkout",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, proceed!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
//           "Success!",
//           "Your order has been successfully processed.",
//           "success"
//         );
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div>
//       <Greenheader />
//       <Navber />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
//         {cartItems.length > 0 ? (
//           <div className="grid gap-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
//               >
//                 <div className="flex items-center gap-4">
//                   {/* <Image
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded-md"
//                 /> */}

//                   {item.image && (
//                     <Image
//                       src={urlFor(item.image).url()}
//                       alt="product"
//                       className="w-16 h-16 object-cover rounded-md"
//                       width={400}
//                       height={400}
//                     />
//                   )}
//                   <div>
//                     <h2 className="text-lg font-semibold">
//                       {item.productName}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       ${item.price.toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={() => handleDecrement(item._id)}
//                     className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
//                   >
//                     -
//                   </button>
//                   <span className="text-lg font-medium">{item.inventory}</span>
//                   <button
//                     onClick={() => handleIncrement(item._id)}
//                     className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div>
//                   <p className="text-lg font-semibold">
//                     ${(item.price * item.inventory).toFixed(2)}
//                   </p>
//                   <button
//                     onClick={() => handleRemove(item._id)}
//                     className="text-red-500 hover:underline text-sm mt-1"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-6 flex justify-between items-center">
//               <h2 className="text-xl font-bold">
//                 Total: ${calculateTotal().toFixed(2)}
//               </h2>
//               <button
//                 onClick={handleProceed}
//                 className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center">Your cart is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;

"use client";

import React, { useEffect, useReducer, useState } from "react";

import { Product } from "../../../types/products";
import Greenheader from "@/components/GreenHeader";
import Navber from "../../components/navber";


import Image from "next/image";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../action/action";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#33333",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };
const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed.",
          "success"
        );
        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div>
      <Greenheader />
      <Navber />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  {/* <Image
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                /> */}

                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt="product"
                      className="w-16 h-16 object-cover rounded-md"
                      width={400}
                      height={400}
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.productName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    ${(item.price * item.inventory).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:underline text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Total: ${calculateTotal().toFixed(2)}
              </h2>
              <button
                onClick={handleProceed}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;

