import { useContext } from 'react';
import { shoppingCartContext } from '../../Components/Context/Context.jsx';
import { Link } from 'react-router-dom';
import { Layout } from '../../Components/Layout/Layout.jsx';
import { OrdersCard } from '../../Components/OrdersCard/OrdersCard.jsx';

const MyOrders = () => {

  const {
    order,
  } = useContext(shoppingCartContext)


  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      
      {
        order.map((item, index) => (
          <Link key={index} to={`/my-orders/${index}`}>{/*el index se coloca automaticamente al elegir un producto ya que este tiene un id que es el indice.*/}
          <OrdersCard 
            totalPrice={item.totalPrice}
            totalProducts={item.totalProducts}
            />
          </Link>
        ))
        
      }
    </Layout>
  )
}

export { MyOrders }; 