import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { shoppingCartContext } from '../Context/Context.jsx';

const ProductDetail = () => {

  const {
    closeProductDetail,
    isProductDetailOpen,
    productToShow,//productToShow == data (solo de la imagen seleccionada);
  } = useContext(shoppingCartContext);

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[320px] h-[calc(100vh-80px)] flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white overflow-hidden`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-lg'>Detail</h2>
        <div
        onClick={() => closeProductDetail()}
        className='cursor-pointer'>
          <XMarkIcon className='h-6 w-6 text-black' />
        </div>
      </div>
      <figure className='flex flex-col pl-9 pr-9 object-cover'>
        <img 
        className='w-56 h-56 rounded-lg self-center' 
        src={productToShow.image} 
        alt={productToShow.title} 
        /> 
        <p className='flex flex-col text-sm text-left'>
          <span className='font-medium text-lg mb-2'>${productToShow.price}</span>
          <span className='font-medium text-base'>{productToShow.title}</span>
          <span>{productToShow.description}</span>
        </p>
      </figure>
    </aside>
  )
  
};

export { ProductDetail }