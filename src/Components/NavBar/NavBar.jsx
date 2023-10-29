import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { shoppingCartContext } from "../Context/Context.jsx";

const NavBar = () => {

  const {
    count,
  } = useContext(shoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  return(
    <nav className='flex justify-between items-center fixed z-10 bg-white top-0 w-full py-5 px-8 text-sm font-light'>

      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink 
          to="/" 
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/all"
          className={({ isActive }) =>//Esto de "isActive" viene del mismo NavLink!!!
            isActive ? activeStyle : undefined
          }
          >
            All 
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/clothes"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/electronics"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/furnitures"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/toys"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/others"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className="text-black/60">
          miltonext@hotmail.com
        </li>
        <li>
          <NavLink 
          to="/my-orders"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/my-account"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
          to="/sign-in"
          className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex'>
          <ShoppingCartIcon className='h-6 w-6 text-lime-600'/>
          <p className='font-medium text-base ml-1'>{count}</p>
        </li>
      </ul>
      
    </nav>
  )
};

export { NavBar };