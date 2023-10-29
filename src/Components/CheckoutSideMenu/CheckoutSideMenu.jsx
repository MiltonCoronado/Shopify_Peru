import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { shoppingCartContext } from '../Context/Context.jsx';
import { OrderCard } from '../OrderCard/OrderCard.jsx';
import { totalPrice } from '../../utils/utils.js';
import { Link } from 'react-router-dom';
import './CheckoutSideMenu.css';

const CheckoutSideMenu = () => {

  const {
    cartProducts,//cartProcucts es el estado que un array con objetos guardados por el usuario, que provienen de la data de productos en general...
    setCartProducts,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    order, 
    setOrder,
  } = useContext(shoppingCartContext);


  const handleDelete = (id) => {//1-Crea una nueva variable llamada "filteredProducts". Esta variable almacenará la lista de productos del carrito,    
    const fiteredProducts = cartProducts.filter(item => item.id !== id);//2-excluyendo el producto con el ID que coincida con el ID pasado como argumento. (osea que no lo retorne)
    setCartProducts(fiteredProducts);//3-actualiza la lista de productos del carrito con la nueva lista filtrada.
  };

  const handlecheckout =() => {
    const orderToAdd= {
      date:'cualquier fecha',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    }

    setOrder([...order, orderToAdd])
    setCartProducts([]);
  };

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[320px] h-[calc(100vh-80px)] flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white overflow-hidden`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-lg'>My Order</h2>
        <div
        onClick={() => closeCheckoutSideMenu()}
        className='cursor-pointer'>
          <XMarkIcon 
          className='h-6 w-6 text-black' />
        </div>
      </div>
      <div className='scrollable-cards flex-1'>
      {
        cartProducts?.map((item) => (//"cartProduct" es el estado donde se guardan los objetos en un array, esa Fn esta ubicada en el componente "card".
          <OrderCard 
            id={item.id}
            key={item.id}
            title={item.title}
            imageUrl={item.image}
            price={item.price}
            handleDelete={handleDelete}
          />
        ))
      }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
        <button 
        className='bg-black py-3 text-white w-full rounded-lg'
        onClick={() => handlecheckout()}
        >Checkout</button>
        </Link>
      </div>
    </aside>
  )
  
};

export { CheckoutSideMenu };