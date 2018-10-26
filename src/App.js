import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({

  button: {
  
  }
});

class simple extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <br/>
        <br/>
        <Grid container style={{marginTop:200}}>
          <Grid item xs={12} sm container >
           <Grid item xs={6} md container>
           </Grid>
           <Grid item xs={6} md container>
          <img src={require("./avt.png")} style={{height:50,width:50}} alt="abv"/>&nbsp;&nbsp;
          
       <input type="text" placeholder="what's happening?" style={{borderRadius:10,borderColor:'#00aeff',height:100,width:500}}/>
       <Grid item xs={5} sm={6} spacing={2}>
       </Grid>

      <Button variant="contained" color="primary" className={classes.button} style={{height:50,width:90,marginTop:50}}>
       murmurs</Button>
     
     
       </Grid>
       
          
          </Grid>
   </Grid>
        
        <br /> 
        <br />
      </div>
    );
  }
}

simple.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(simple);




