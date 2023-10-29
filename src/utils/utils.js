const totalPrice = (cartProducts) => {//cartProducts es igual a un Array de objetos que retorna la suma de los numeros.
  let sum = 0;
  cartProducts.forEach(item => sum += item.price);
  return sum;
};

export { totalPrice };