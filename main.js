import React, { Component } from 'react'
import SubComponent from './sub';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

class MainComponent extends Component {
    state = {
        open : false
    }
    render (){
        const { classes } = this.props;
        const modalClose = () => this.setState ({ open : false })

        return (
            <div>
                <SubComponent show = {this.state.open} onHide = {modalClose}/>
                  <Button variant="contained" color="primary" className={classes.button}
                  onClick = { () => this.setState ({ open : true})}>
                     Primary
                  </Button>
            </div>
        )
    }
}

MainComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MainComponent);