import React from 'react';
import { connect } from 'react-redux';
// import {activate} from '../../store/Categories';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { add } from '../../store/Cart';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));



const Products = props => {
    return (
        < Container maxWidth="md" component="main" >
            {props.categories.products.map((product, idx) => {
                if (product.category === props.categories.activeCategory && product.inStock > 0) {
                    return (
                        < Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardHeader title={product.name}
                                titleTypographyProps={{ align: 'center' }}
                            />
                            <CardContent>
                                <Typography variant="h6" color="textPrimary">
                                    Category: {product.category}
                                </Typography>
                                <Typography variant="h6" color="textPrimary">
                                    Price: {product.price}$
                                </Typography>
                                <Typography variant="h6" color="textPrimary">
                                    inStock: {product.inStock}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button variant='outlined' color="primary"  onClick={() => props.add(product)} key={idx}>ADD TO CART</Button>
                                <Button variant='outlined' color="primary">VIEW DETAILS</Button>

                            </CardActions>
                        </Card>
                    </Grid>


</Grid>
    )
}
              
         } )}
        </Container >
    )
}


const mapStateToProps = state => ({
    categories: state.categories

});
const mapDispatchToProps = { add };


export default connect(mapStateToProps, mapDispatchToProps)(Products);