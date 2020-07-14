import React from 'react';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import SimpleCart from './components/storefront/cart';
import Bill from './components/storefront/bill'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <CssBaseline >
                    <Header />
                    <Route path='/' exact >
                        <div className="catCart">
                            <Categories />
                            <SimpleCart />
                        </div>
                        <Products />
                    </Route>
                    <Route path='/bill' exact component={Bill} />
                    <Footer />
                </CssBaseline>
            </BrowserRouter>
        </>
    );
}

export default App;