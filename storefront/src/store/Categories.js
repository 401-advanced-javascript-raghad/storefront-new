let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics', description: 'description' },
    { name: 'food', displayName: 'Food', description: 'description' },
    { name: 'clothing', displayName: 'Clothing', description: 'description' },
  ],
  products: [
    // { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, description: 'description' },
    // { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, description: 'description' },
    // { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, description: 'description' },
    // { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, description: 'description' },
    // { name: 'Apples', category: 'food', price: .99, inStock: 500, description: 'description' },
    // { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, description: 'description' },
    // { name: 'Bread', category: 'food', price: 2.39, inStock: 90, description: 'description' },
  ],
  activeCategory: ''
};


export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {

    case 'ACTIVATE':
      state.activeCategory = payload;
      return { categories: state.categories, products: state.products, activeCategory: state.activeCategory }
    default:
      return state;

    case 'ADD-TO-CART':
      state.products.forEach(product => {
        if (payload.name === product.name) {
          product.inStock = product.inStock - 1;
        }
      });
      return { categories: state.categories, products: state.products, activeCategory: state.activeCategory }
      
      case 'GET':
        return { categories: state.categories, products: payload.result, activeCategory: state.activeCategory };
  }

}

export const activate = (name) => {
  return {
    type: 'ACTIVATE',
    payload: name
  }
}