import React, { useState, useEffect } from 'react';
import styles from '../tinder.module.css';
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
import { NavLink } from 'react-router-dom';

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
  noDogs: {
    paddingTop: '150px',
  },
});

const ViewLiked = ({ classes, likesArray }) => {
  let [status, setStatus] = useState(likesArray);
  let [currentPage, setCurrentPage] = useState(1);
  let [showItems, setShowItems] = useState([]);

  let postsPerPage = 10;
  let totalPages = Math.ceil(status.length / postsPerPage);

  useEffect(() => {
    let itemsToShowTo = currentPage * postsPerPage;
    let itemsToShowFrom = itemsToShowTo - postsPerPage;
    setShowItems(status.slice(itemsToShowFrom, itemsToShowTo));
  }, [currentPage]);

  return (
    <>
      <Grid container className={styles.header}>
        <h3 className={styles.title}>Tinder</h3>
        <NavLink className={styles.linkStyles} to={'/tinder'}>
          Like More
        </NavLink>
      </Grid>
      <Grid container className={classes.grid}>
        {status.length === 0 ? (
          <h3 className={classes.noDogs}>Like some of those dogs please!</h3>
        ) : (
          showItems.map((item, index) => {
            return (
              <Card key={item.breedName + index} className={classes.root}>
                <CardActionArea disabled>
                  <CardMedia
                    className={classes.media}
                    image={item.photoLink}
                    alt="Dog"
                    title="Dog"
                  />
                  <CardContent className={classes.breedName}>
                    <Typography variant="h6" component="h6">
                      {item.breedName}
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
          })
        )}
      </Grid>
      {totalPages > 1 ? (
        <Grid container className={classes.grid}>
          <Pagination pages={totalPages} active={currentPage} selectPage={setCurrentPage} />
        </Grid>
      ) : (
        ''
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    likesArray: state.programmer.LikesArray,
  };
};

export default connect(mapStateToProps, null)(withStyles(useStyles)(ViewLiked));
