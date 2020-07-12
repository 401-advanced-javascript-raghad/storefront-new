import React from 'react';
import './styles.scss';

import Products from './components/storefront/products';
import Categories from './components/storefront/categories';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    return (
            <div className='App'>
                <Header />
                    <Categories />
                    <Products />
                <Footer />
            </div>
    );
}

export default App;