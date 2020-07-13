import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@material-ui/core';



const Header = props => {
    return (
        <>

                <h1>Raghad's Store</h1>
                <Link className="a" color="primary" >
                     CART ({props.cart.count})
                </Link>


        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});


export default connect(mapStateToProps)(Header);