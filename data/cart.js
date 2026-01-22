export const cart = [];

export const addToCart = (productId) => {
  let matchingItem = cart.find((product) => product.productId === productId);
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1
    });
  }
}