import React from 'react';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
    return (
        <>
            <CssBaseline >
                <Header />
                <Categories />
                <Products />
                <Footer />
            </CssBaseline>
        </>
    );
}

export default App;