import { useContext } from 'react';
import { shoppingCartContext } from '../../Components/Context/Context.jsx';
import { Layout } from '../../Components/Layout/Layout.jsx';
import { Card } from '../../Components/Card/Card.jsx';
import { ProductDetail } from '../../Components/ProductDetail/ProductDetail.jsx';


const Home = () => {

  const {
    items,
    setItems,
    searchByTitle,
    setSearchByTitle,
  } = useContext(shoppingCartContext)

  return (
    <Layout>
     <div className='flex items-center justify-center relative w-80'>
        <h1 className='font-medium text-xl mb-10'>Home</h1>
     </div>
     <input 
      type='text' 
      placeholder='Search a product'
      className='rounded-lg border border-black w-80 p-4 mb-10'
      onChange={(event) => {
        setSearchByTitle(event.target.value)
        console.log(searchByTitle)
      }}
     />
     <div className='grid gap-4 grid-cols-4 w-6/12 max-w-screen-lg'>
      { items?.map((item) => 
        ( <Card key={item.id} data={item} />))}{/*por que item.data??????????????*/}
     </div>
     <ProductDetail />
    </Layout>
  )
}

export { Home }; 