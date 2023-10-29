import { createContext, useState, useEffect} from 'react';

const shoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {//por lo general lo que suele hacer es crear nuestro propio provider como componente personalizado, el metodo "Normal" no suele ser tan usado, aparte el consumer sera deprecado.
 
  //shoppingCart - increment quantity
  const [count, setCount] = useState(0);

  //ProductDetail - open/close
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
  const openProductDetail = () => setisProductDetailOpen(true);
  const closeProductDetail = () => setisProductDetailOpen(false); 

  //Checkout side menu - open/close
  const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setisCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setisCheckoutSideMenuOpen(false); 

  //productDetail - show product
  const [productToShow, setProductToShow] = useState({});

  //shopping cart - add products to cart 
  const [cartProducts, setCartProducts] = useState([]);

  //shopping cart - Order.
  const [order, setOrder] = useState([]);
  
  //Get products.
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  //Get products by title.
  const [searchByTitle, setSearchByTitle] = useState(null);

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())//los .then van expresados en funcciones flecha.
      .then(data => (setItems(data), console.log(data)))//los .then van expresados en funcciones flecha.
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

  console.log(filteredItems);

  return (
    <shoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts, 
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle, 
      setSearchByTitle,
    }}>
      { children }{/* Aca cualquier componente que llame al provider va ha estar encapsulado dentro del provider y asi podra acceder al value en donde estan guardadas todas las props */}
    </shoppingCartContext.Provider>
  );
};


export { ShoppingCartProvider, shoppingCartContext };