// "use client";
// import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Link from "next/link";
// import { NavigationMenuDemo } from "./navlinks";


// const Navbar = () => {
//   // const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext);
//   // const handleCick = () => {
//   //   setShowCart(!showCart);
//   // };

//   return (
//     <div className="navbar bg-[#FFFFFF] max-w-[90%] mx-auto">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
//             <GiHamburgerMenu />
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content hover:cursor-pointer bg-base-100 text-sm md:text-base lg:text-xl  rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <Link href={"/"} className="cursor-pointer">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <details>
//                 <summary>Shop</summary>
//                 <ul className="p-2">
//                   <li>
//                     <Link href={"#"}>Men</Link>
//                   </li>
//                   <li>
//                     <Link href={"#"}>Women</Link>
//                   </li>
//                   <li>
//                     <Link href={"#"}>Accessories</Link>
//                   </li>
//                   <li>
//                     <Link href={"#"}>Kids</Link>
//                   </li>
//                 </ul>
//               </details>
//             </li>

//             <li className="text-sm md:text-base lg:text-xl ">
//               <Link href={"/about"}>About</Link>
//             </li>
//             <li className="">
//               <Link href={"/shop"}> Products </Link>
//             </li>
//             <li>
//               <Link href={"/contact"}>Contact</Link>
//             </li>
//             {/* <li>
//               <Link href={"/pages"}>Pages</Link>
//             </li> */}
//           </ul>
//         </div>
//         <a className=" text-3xl font-semibold text-[#252B42] hidden lg:block ml-4">
//           Bandage
//         </a>
//       </div>
//       <div className="navbar-center ">
//         <a className=" text-xl font-semibold text-[#252B42] block lg:hidden ">
//           Bandage
//         </a>
//         <div className="hidden lg:flex">
//           <NavigationMenuDemo />
//         </div>
//       </div>

//       <div className="navbar-end">
//         <div className="dropdown dropdown-end ">
//           <div
//             tabIndex={0}
//             role="button"
//             className="pr-4 cursor-pointer  text-[#858585]   "
//           >
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 hover:text-[#23A6F0] duration-300"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
                
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               <span className="badge badge-sm indicator-item font-semibold bg-red-500 rounded-full text-white">
//                 0
//               </span>
//             </div>
          
//           </div>

//           {/* <div
          
//             tabIndex={0}
//             className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
//           >
//             <div className="card-body">
//               <span className="text-lg font-bold">0 Items</span>
//               <span className="text-info">Subtotal: $999</span>
//               <div className="card-actions">
//                 <button className="btn btn-primary btn-block">View cart</button>
//               </div>
//             </div>  */}
//           {/* </div>   */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { NavigationMenuDemo } from "./navlinks";


const Navbar = () => {
  // const { totalQuantity, showCart, setShowCart }: any = useContext(CartContext);
  // const handleCick = () => {
  //   setShowCart(!showCart);
  // };

  return (
    <div className="navbar bg-[#FFFFFF] max-w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content hover:cursor-pointer bg-base-100 text-sm md:text-base lg:text-xl  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"} className="hover:text-[#b6b5b5] cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <details>
                <summary>Shop</summary>
                <ul className="p-2">
                  <li>
                    <Link href={"#"}>Men</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Women</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Accessories</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Kids</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li className="text-sm md:text-base lg:text-xl ">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="">
              <Link href={"/shop"}> Products </Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            {/* <li>
              <Link href={"/pages"}>Pages</Link>
            </li> */}
          </ul>
        </div>
        <a className=" text-3xl font-semibold text-[#252B42] hidden lg:block ml-4">
          Bandage
        </a>
      </div>
      <div className="navbar-center ">
        <a className=" text-xl font-semibold text-[#252B42] block lg:hidden ">
          Bandage
        </a>
        <div className="hidden lg:flex">
          <NavigationMenuDemo />
        </div>
      </div>
      <div className="navbar-end">
        <Link href="/cart">
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="pr-4 cursor-pointer  text-[#858585]   "
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:text-[#23A6F0] duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* <span className="badge badge-sm indicator-item font-semibold bg-red-500 rounded-full text-white">
                0
              </span> */}
            </div>
            
          </div>

          {/* <div
          
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">0 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>  */}
          {/* </div>   */}
        </div>
        </Link>
      </div>
</div>
  );
};

export default Navbar;
