import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from '@material-ui/core';
import {remove} from '../../store/Cart'




const Cart = props => {
    return (
        <div className='cart'>
            {props.cart.products.map((product, idx) =>
                <div key={idx}>
                    <Link className="a" color="primary" onClick={() => props.add(product)} >
                        {product}
                    </Link>
                    <Button onClick={() => props.remove(product)} >x</Button>
                </div>

            )}
        </div>

    )
}


const mapStateToProps = state => ({
    cart: state.cart
});
const mapDispatchToProps = { remove };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);