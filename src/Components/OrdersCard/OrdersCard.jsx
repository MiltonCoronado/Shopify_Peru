import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className= 'flex justify-between items-center px-6 py-2 border border-black rounded-lg rp-4 w-80'>
      <div className= 'flex justify-between w-full'>
        <p className= 'flex flex-col'>
          <span className= 'font-light'>08.10.2023</span>
          <span className= 'font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
        <span className='font-medium text-2xl'>${totalPrice}</span>
        <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </p>
      </div>
    </div>
  )
};

export { OrdersCard };