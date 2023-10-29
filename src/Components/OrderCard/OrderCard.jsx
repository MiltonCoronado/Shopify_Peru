import { XMarkIcon } from '@heroicons/react/24/solid';
 
const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {

  let renderXMarkIcon;

  if(handleDelete) {
    renderXMarkIcon = <XMarkIcon 
    className='h-6 w-6 text-black cursor-pointer' 
    onClick={() => handleDelete(id)}
    />
  }

  return (
    <div className= 'flex justify-between items-center px-6 py-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-16 h-16 gap-2'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
      </div>
      <p className='text-xs font-light truncate'>{title}</p>
      <div className='flex items-center gap-2'>
        <p className='text-base font-midium'>{price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
};

export { OrderCard };