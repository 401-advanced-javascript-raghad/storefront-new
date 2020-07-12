let initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 ,description:'AAAAA'},
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 ,description:'AAAAA'},
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 ,description:'AAAAA'},
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 ,description:'AAAAA'},
    { name: 'Apples', category: 'food', price: .99, inStock: 500 ,description:'AAAAA'},
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 ,description:'AAAAA'},
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90,description:'AAAAA' },
  ]
};
export default (state=initialState,action)=>{
   let {type, payload} = action;
   switch (type){
      case 'ACTIVATE' : 
      let products = state.products.filter(product => product.category === payload);
      return {products}
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