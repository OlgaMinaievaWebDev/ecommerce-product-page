import avatarLogo from '../assets/images/image-avatar.png';
import cartIcon from '../assets/images/icon-cart.svg';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import { useState } from 'react';


function Navbar() {

  const { totalQuantity } = useCart();
  const [isOpenModal, setIsOpenModal] = useState(false);
  
   return (
    <header className="h-20 flex justify-between items-center border-b border-grayishBlue">
      <div className="flex items-center space-x-8">
        <h1 className="text-4xl font-bold ">sneakers</h1>
        <nav>
          <ul className="flex space-x-7 text-grayishBlue text-md">
            <li>
              <a
                href="#collections"
                className="hover:text-black hover:border-b-2 hover:border-orange pb-2"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="#men"
                className="hover:text-black hover:border-b-2 hover:border-orange pb-2"
              >
                Men
              </a>
            </li>
            <li>
              <a
                href="#women"
                className="hover:text-black hover:border-b-2 hover:border-orange pb-2"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-black hover:border-b-2 hover:border-orange pb-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-black hover:border-b-2 hover:border-orange pb-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative" onClick={()=>setIsOpenModal((show)=>!show)}>
          <img src={cartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-orange text-white text-xs px-1.5 py-0.5 rounded-full">
            {totalQuantity}
          </span>
         </button>
         {isOpenModal && (
          
             <Cart/>
         
         )}
        <button>
          <img
            src={avatarLogo}
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-orange cursor-pointer"
          />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
