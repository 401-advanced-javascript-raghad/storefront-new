import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';


function Footer(props) {
    return (
      <Container maxWidth="lg" component="footer" className="footer" backgroundColor="rosybrown">
        <Grid container spacing={4} justify="space-around">

          <Grid item xs={12} md={6} lg={3} >
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Information:
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Email: raghadshop@gmail.com</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">On Facebook: RAGHAD SHOP </Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">On Instegram: Raghad Shop</Link> </li>
            </ul>
          </Grid>

        </Grid>
      </Container>
    )
}

export default Footer;