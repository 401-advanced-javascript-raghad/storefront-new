import React from 'react';
import { connect } from 'react-redux';
import {activate} from '../../store/Categories';

const Categories = props => {
    return (
        <section>
            <ul>
                {props.categories.categories.map( category=> 
                    <li onClick={()=> props.activate(category.name)} key={category.name}> {category.displayName} </li>
                )}
            </ul>
        </section>
    )
}
 

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);