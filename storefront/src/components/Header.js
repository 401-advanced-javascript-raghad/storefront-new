import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = props => {
    return (
        <>

            <h1>Raghad's Store</h1>
            <Link to='/bill' className="a" color="primary" onClick="">
                CART ({props.cart.count})
                </Link>

        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});


export default connect(mapStateToProps)(Header);