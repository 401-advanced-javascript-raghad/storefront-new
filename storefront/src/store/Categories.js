let initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, description: 'HD'},
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, description: '' },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, description: '' },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, description: '' },
      { name: 'Apples', category: 'food', price: .99, inStock: 500, description: '' },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, description: '' },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90, description: '' },
    ],
    activeCategory: 'electronics'
  };


export default (state = initialState, action) => {
    let {type, payload} = action; 
    switch (type){

        case 'ACTIVATE' : 
        state.activeCategory = payload;
        return {categories:state.categories, products: state.products,activeCategory: state.activeCategory}
        default:
         return state;
    }

}

export const activate = (name) => {
    return {
        type: 'ACTIVATE',
        payload: name
    }
}