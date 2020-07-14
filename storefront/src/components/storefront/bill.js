import React from 'react';
import { connect } from 'react-redux';

const Bill = props => {
    return (
        <div className='bill'>
            {props.cart.products.map((product, idx) =>
                <div key={idx}>
                        <h4>{product.name}</h4>
                        <p>{product.describtion}</p>
                        <p>{product.price}</p>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Bill);