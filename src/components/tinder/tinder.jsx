import React, { useEffect, useState } from 'react';
import styles from './tinder.module.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import actionCreators from '../../state/programmer/actions';
import { NavLink } from 'react-router-dom';

const useStyles = theme => ({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '10vh',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
    width: 350,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  progress: {
    marginTop: '45%',
  },
  likeIcon: {
    color: 'green',
    margin: '2px',
  },
  dislikeIcon: {
    color: 'red',
    margin: '2px',
  },
});

const Tinder = ({ classes, onAddLike }) => {
  let [userResponse, setUserResponse] = useState(false);
  let [liked, setLiked] = useState(null);
  let [imageUrl, setImageUrl] = useState(null);
  let [dogBreed, setDogBreed] = useState('Dog');

  useEffect(() => {
    setImageUrl(null);
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data && data.status === 'success') {
          setLiked(null);
          console.log(data.message);
          setImageUrl(data.message);
          let fullName = getDogName(data);
          setDogBreed(
            fullName
              .split(',')
              .join(' ')
              .padStart(5, ' '),
          );
        }
      });
  }, [userResponse]);

  const getDogName = data => {
    let breedNameData = data.message.split('/');
    let breedName = breedNameData[breedNameData.length - 2].split('');
    breedName[0] = breedName[0].toUpperCase();
    breedName = breedName.join('');
    let fullName = breedName;
    let secondName = breedName.split('-')[1] ? breedName.split('-')[1].split('') : null;
    if (secondName) {
      secondName[0] = secondName[0].toUpperCase();
      secondName = secondName.join('');
      breedName = breedName.split('-')[0];
      fullName = breedName.concat(',', secondName);
    }
    return fullName;
  };

  const imageResponseHandler = response => {
    console.log('liked/dislike');
    onAddLike(imageUrl, response);
    setLiked(response);
    setUserResponse(prevState => !prevState);
  };

  return (
    <>
      <div className={styles.divs}>
        <h6>Tinder</h6>
        <NavLink to={'/view-liked'}>Goto</NavLink>
      </div>
      <Grid container className={classes.grid}>
        <Card className={classes.root}>
          <CardActionArea disabled>
            {imageUrl ? (
              <CardMedia className={classes.media} image={imageUrl} alt="Dog" title="Dog" />
            ) : (
              <CardMedia className={classes.media} image={'fetching'} alt="Dog" title="Dog">
                <CircularProgress className={classes.progress} />
              </CardMedia>
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {dogBreed}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.buttons}>
            <Button onClick={() => imageResponseHandler(true)} size="small" color="primary">
              <Check className={classes.likeIcon} />
              Like
            </Button>
            <Button onClick={() => imageResponseHandler(false)} size="small" color="primary">
              <Clear className={classes.dislikeIcon} />
              Dislike
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddLike: (imageUrl, response) =>
      dispatch(
        actionCreators.AddLike({
          photoLink: imageUrl,
          LikedOrDisliked: response,
        }),
      ),
  };
};

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Tinder));
