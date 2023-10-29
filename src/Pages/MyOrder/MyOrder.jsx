import { useContext } from 'react';
import { shoppingCartContext } from '../../Components/Context/Context.jsx';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Layout } from '../../Components/Layout/Layout.jsx';
import { OrderCard } from '../../Components/OrderCard/OrderCard.jsx';

const MyOrder = () => {

  const {
    order,
  } = useContext(shoppingCartContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = order?.length - 1 


  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <Link className='absolute left-0' to='/my-orders'>
          <ChevronLeftIcon className='h-6 w-6 text-black' /> 
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
      {   
        order?.[index]?.products.map(item => (
          <OrderCard 
            id={item.id}
            key={item.id}
            title={item.title}
            imageUrl={item.image}
            price={item.price}
          />
        ))
      }
      </div>
    </Layout>
  )
}

export { MyOrder };