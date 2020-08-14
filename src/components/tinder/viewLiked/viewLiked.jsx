import React, { useState } from 'react';
import styles from './viewLiked.module.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import Pagination from './pagination/pagination';
import { connect } from 'react-redux';

const useStyles = theme => ({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    marginTop: '3vh',
  },
  root: {
    maxWidth: 345,
    marginLeft: '20px',
    marginBottom: '15px',
  },
  media: {
    height: 140,
    width: 210,
  },
  likeIcon: {
    color: 'green',
    margin: '2px',
    fontWeight: '500',
    fontSize: '30px',
  },
  breedName: {
    padding: 0,
    margin: 0,
  },
  dislikeIcon: {
    color: 'red',
    margin: '2px',
    fontWeight: '500',
    fontSize: '30px',
  },
  choice: {
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
  },
});

const ViewLiked = ({ classes, likesArray }) => {
  let [status, setStatus] = useState(likesArray);
  console.log(likesArray);
  //   let status = [
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: true,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: false,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: true,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: true,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: true,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: false,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: true,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: false,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: true,
  //     },
  //     {
  //       photoLink: 'https://images.dog.ceo/breeds/eskimo/n02109961_2188.jpg',
  //       LikedOrDisliked: true,
  //     },
  //   ];

  return (
    <>
      <div className={styles.divs}>Tinder</div>
      <Grid container className={classes.grid}>
        {status.map(item => {
          return (
            <Card className={classes.root}>
              <CardActionArea disabled>
                <CardMedia className={classes.media} image={item.photoLink} alt="Dog" title="Dog" />
                <CardContent className={classes.breedName}>
                  <Typography variant="h6" component="h6">
                    Dog
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.choice}>
                {item.LikedOrDisliked ? (
                  <Check className={classes.likeIcon} />
                ) : (
                  <Clear className={classes.dislikeIcon} />
                )}
              </CardActions>
            </Card>
          );
        })}
      </Grid>
      <Grid container className={classes.grid}>
        <Pagination pages={10} active={3} />
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return {
    likesArray: state.programmer.LikesArray,
  };
};

export default connect(mapStateToProps, null)(withStyles(useStyles)(ViewLiked));
