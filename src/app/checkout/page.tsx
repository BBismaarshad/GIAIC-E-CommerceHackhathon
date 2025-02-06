// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { getCartItems } from "@/app/action/action"
// import Link from "next/link";
// import { Product } from "../../../types/products"
// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";
// import Greenheader from "@/components/GreenHeader";
// import Navber from "../../components/navber";



// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     address: false,
//     city: false,
//     zipCode: false,
//     phone: false,
//     email: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.inventory,
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       address: !formValues.address,
//       city: !formValues.city,
//       zipCode: !formValues.zipCode,
//       phone: !formValues.phone,
//       email: !formValues.email,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handlePlaceOrder = () => {
//     if (validateForm()) {
//       localStorage.removeItem("appliedDiscount");
//     //   toast.success("Order placed successfully!");
//     } else {
//     //   toast.error("Please fill in all the fields.");
//     }
//   };

//   return (
//     <>
//     <Greenheader />
//       <Navber />
//     <div >
//       {/* Breadcrumb */}
//       <div >
//         <div >
//           <nav >
//             <Link
//               href="/cart"
//               className="text-[#666666] hover:text-black transition text-sm"
//             >
//               Cart
//             </Link>
//             <CgChevronRight  />
//             <span >Checkout</span>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div >
//         <div >
//           {/* Order Summary */}
//           <div >
//             <h2 >Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div
//                   key={item._id}
                  
//                 >
//                   <div>
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt={item.productName}
//                         width={64}
//                         height={64}
//                         className="object-cover w-full h-full"
//                       />
//                     )}
//                   </div>
//                   <div >
//                     <h3 >{item.productName}</h3>
//                     <p >
//                       Quantity: {item.inventory}
//                     </p>
//                   </div>
//                   <p >
//                     ${item.price * item.inventory}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p>Your cart is empty.</p>
//             )}
//             <div>
//               <p >
//                 Subtotal: <span >${subtotal}</span>
//               </p>
//               <p >
//                 Discount: <span>-${discount}</span>
//               </p>
//               <p >
//                 Total: ${total.toFixed(2)}
//               </p>
//             </div>
//           </div>

//           {/* Billing Form */}
//           <div >
//             <h2 >Billing Information</h2>
//             <div>
//               <div>
//                 <label >First Name</label>
//                 <input
//                   id="firstName"
//                   placeholder="Enter your first name"
//                   value={formValues.firstName}
//                   onChange={handleInputChange}
//                   className="border"
//                 />
//                 {formErrors.firstName && (
//                   <p >
//                     First name is required.
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="lastName">Last Name </label>
//                 <input
//                   id="lastName"
//                   placeholder="Enter your last name"
//                   value={formValues.lastName}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.lastName && (
//                   <p>
//                     Last name is required.
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <label htmlFor="address">Address </label>
//               <input
//                 id="address"
//                 placeholder="Enter your address"
//                 value={formValues.address}
//                 onChange={handleInputChange}
//               />
//               {formErrors.address && (
//                 <p >Address is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="city">City</label>
//               <input
//                 id="city"
//                 placeholder="Enter your city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//               />
//               {formErrors.city && (
//                 <p>City is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="zipCode">Zip Code</label>
//               <input
//                 id="zipCode"
//                 placeholder="Enter your zip code"
//                 value={formValues.zipCode}
//                 onChange={handleInputChange}
//               />
//               {formErrors.zipCode && (
//                 <p>Zip Code is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="phone">Phone</label>
//               <input
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//               />
//               {formErrors.phone && (
//                 <p >Phone is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//               />
//               {formErrors.email && (
//                 <p >Email is required.</p>
//               )}
//             </div>
//             <button
              
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/action/action";
import Link from "next/link";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import Greenheader from "@/components/GreenHeader";
import Navber from "@/components/navber";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
    }
  };

  return (
    <>
      <Greenheader />
      <Navber />
      <div className="max-w-6xl mx-auto p-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4 flex items-center">
          <Link href="/cart" className="hover:text-black">Cart</Link>
          <CgChevronRight className="mx-2" />
          <span className="text-black">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 border-b py-4">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={64}
                      height={64}
                      className="rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium">{item.productName}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.inventory}</p>
                  </div>
                  <p className="font-medium">${item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="mt-4 text-right">
              <p>Subtotal: <span className="font-semibold">${subtotal}</span></p>
              <p>Discount: <span className="font-semibold">-${discount}</span></p>
              <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(formValues).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    id={key}
                    placeholder={`Enter your ${key}`}
                    value={formValues[key as keyof typeof formValues]}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-green-300"
                  />
                  {formErrors[key as keyof typeof formErrors] && (
                    <p className="text-sm text-red-500">{key.replace(/([A-Z])/g, ' $1')} is required.</p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
