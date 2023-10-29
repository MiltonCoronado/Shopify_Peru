import { PlusSmallIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { shoppingCartContext } from '../Context/Context.jsx';

const Card = ({ data }) => {

  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts, 
    setCartProducts,
    openCheckoutSideMenu,
  } = useContext(shoppingCartContext);

  const showProduct = (data) => {
    openProductDetail();
    setProductToShow(data);//"setProductToShow" setea el el estado de """productToShow""" con la data y este estado con la data es usado en "ProductDetail" para renderizar la imagen, precio, costo etc... en el detalle del producto seleccionado. (por el mismo funcionamiento de la API).
  };

  const addProductsToCart = (element, data) => {
    element.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, data])//aca toma lo que ya existe en data y ademas agregue la nueva data.
    openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    
    const isInCart = cartProducts.filter(item => item.id === id).length > 0;//??????????????????????????????????

    if(isInCart){
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='h-6 w-6 text-white' />
        </div>
      )
    }else{
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(element) => addProductsToCart(element, data)}//Fn para incrementar el contador y guardar el objeto que proviene de data.
          >
          <PlusSmallIcon className='h-6 w-6 text-black' />
        </div>
      )
    };
  };

  return (
    <div 
    className='bg-white cursor-pointer w-36 h-40 rounded-lg'
    onClick={() => showProduct(data)}//Funcion para abrir el productDetail...
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light truncate'>{data.title}</span>
        <span className='text-sm font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

export { Card };