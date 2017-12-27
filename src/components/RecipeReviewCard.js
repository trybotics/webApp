import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Divider from 'material-ui/Divider';
import Input from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Menu, { MenuItem } from 'material-ui/Menu'
import { ListItemIcon, ListItemText } from 'material-ui/List'


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded },()=>{setTimeout(()=>{ this.props.gridSet() }, 250);});
  };

  handleCardMenu = event => {
    this.setState({ 
      anchorElCardMenu: event.currentTarget
    })
  }

  handleShareMenu = event => {
    this.setState({ 
      anchorElShareMenu: event.currentTarget
    })
  }

  handleRequestClose = (e,url) => {
    this.setState({ anchorElProfileMenu: null, anchorElCardMenu: null,anchorElShareMenu:null});
    if(url){
      window.open(url)
    }
  }

  render() {
    const { classes } = this.props;

    let cardMenu =  <Menu
      className="menu"
      anchorEl={this.state.anchorElCardMenu}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(this.state.anchorElCardMenu)}
      onRequestClose={this.handleRequestClose}
    >
      <MenuItem onClick={this.handleRequestClose}>
        <ListItemIcon>
          <Icon>mode_edit</Icon>
        </ListItemIcon>
        <ListItemText 
          primary={<b style={{fontSize:'14px'}}>Edit</b>} 
        />
      </MenuItem>
      <MenuItem onClick={this.handleRequestClose}>
        <ListItemIcon>
          <Icon>delete</Icon>
        </ListItemIcon>
        <ListItemText 
          primary={<b style={{fontSize:'14px'}}>Delete</b>} 
        />
      </MenuItem>
    </Menu>

  let shareMenu =  <Menu
      className="menu"
      anchorEl={this.state.anchorElShareMenu}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(this.state.anchorElShareMenu)}
      onRequestClose={this.handleRequestClose}
    >
      <MenuItem onClick={(e)=>{this.handleRequestClose(e,'https://plus.google.com/share?url=https://trybotic.herokuapp.com')}}>
        <ListItemIcon>
         <i className="fa fa-google-plus-official googleShare" aria-hidden="true" style={{fontSize:'20px'}}></i> 
        </ListItemIcon>
        <ListItemText 
          primary={<b className="googleShare" style={{fontSize:'14px'}}>Google</b>} 
        />
      </MenuItem>
      <MenuItem  onClick={(e)=>{this.handleRequestClose(e,'http://www.facebook.com/sharer.php?u=https://trybotic.herokuapp.com')}}>
        <ListItemIcon>
          <i className="fa fa-facebook-official facebookShare" aria-hidden="true" style={{fontSize:'20px'}}></i>
        </ListItemIcon>
        <ListItemText 
          primary={<b className="facebookShare" style={{fontSize:'14px'}}>Facebook</b>}
        />
      </MenuItem>
      <MenuItem onClick={(e)=>{this.handleRequestClose(e,'http://www.linkedin.com/shareArticle?mini=true&amp;url=https://trybotic.herokuapp.com')}}>
        <ListItemIcon>
         <i className="fa fa-linkedin-square linkedInShare" aria-hidden="true" style={{fontSize:'20px'}}></i> 
        </ListItemIcon>
        <ListItemText 
          primary={<b className="linkedInShare" style={{fontSize:'14px'}}>Linkedin</b>}
        />
      </MenuItem>
      <MenuItem onClick={(e)=>{this.handleRequestClose(e,'https://twitter.com/share?url=https://trybotic.herokuapp.com')}}>
        <ListItemIcon>
         <i className="fa fa-twitter-square twitterShare" aria-hidden="true" style={{fontSize:'20px'}}></i> 
        </ListItemIcon>
        <ListItemText 
          primary={<b className="twitterShare" style={{fontSize:'14px'}}>Twitter</b>}
        />
      </MenuItem>
    </Menu>


    return (
      <div>
      {cardMenu}
      {shareMenu}
        <Card className={classes.card}>
          {(!this.props.noCardHeader)&&
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton onClick={this.handleCardMenu}>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Karan Shaw"
              subheader="September 14, 2016"
            />
          }
          <CardMedia
            className={classes.media}
            image="http://mydronelab.com/wp-content/uploads/2016/04/Drone-Cinema-Flying-690x460.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h3">
              Lizard widespread
            </Typography>
            <Typography className="textAlignJustify" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <Divider light />
          <Grid className="marginAuto" justify='center' container xs={12} >
            <Grid style={{padding: 12}} item xs={10}>
              <Input 
                onChange={()=>{setTimeout(()=>{ this.props.gridSet() }, 10)}}
                multiline ={true}
                fullWidth
                placeholder="Write your comment..."
                disableUnderline
              />
            </Grid>
            <Grid container justify='center' alignItems='center' item xs={2}>
              <IconButton aria-label="Send">
                <Icon>send</Icon>
              </IconButton>
            </Grid>
          </Grid>
          <Divider light />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton onClick={this.props.handleCardMenu}>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Karan Shaw"
                subheader="Awesome work."
              />
              <Divider light />
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton onClick={this.props.handleCardMenu}>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Karan Shaw"
                subheader="Great work."
              />
            <Divider light />
          </Collapse>
          <CardActions disableActionSpacing style={{height:'60px'}}>
              <BottomNavigationButton 
                showLabel 
                label="Like" 
                icon={<Icon>thumb_up</Icon>} 
              />
              <BottomNavigationButton  
                showLabel 
                label="Comment" 
                icon={<Icon>comment</Icon>} 
                onClick={this.handleExpandClick}
              />
              <BottomNavigationButton 
                showLabel 
                label="Share" 
                icon={<Icon>share</Icon>} 
                onClick={this.handleShareMenu}
              />
          </CardActions>
        </Card>
      </div>
    )
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);