import React from 'react';
import { connect } from 'react-redux';
import {activate} from '../../store/Categories';


const Products = props => {
    return (
        <section>
            {props.categories.products.map((product,idx) => {
                if (product.category === props.categories.activeCategory) {
                    return (
                        <div key={idx} className="container">
                        <img src='https://colorlib.com/sparkling/wp-content/uploads/sites/5/2013/03/image-alignment-150x150.jpg' alt='just 150*150'/>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <a href='!#' >ADD TO CART</a>
                        <a href='!#' >VIEW DETAILS</a>
                    </div>
                    )
            }
              
         } )}
        </section>
    )
}

const mapStateToProps = state => ({
    categories: state.categories

});

export default connect(mapStateToProps)(Products);