import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";

const Cards = (data) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Confirmed
            </Typography>
            <Typography variant="h5">{data.data.confirmed}</Typography>

            <Typography variant="body2">
              Number of active Cases of COVID - 19
            </Typography>
            <Typography color="textSecondary">
              Data updated on: {new Date(data.data.lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">{data.data.recovered}</Typography>

            <Typography variant="body2">
              Number of Recovered cases of COVID - 19
            </Typography>
            <Typography color="textSecondary">
              Data updated on: {new Date(data.data.lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{data.data.deaths}</Typography>

            <Typography variant="body2">
              Number of deaths from COVID - 19
            </Typography>
            <Typography color="textSecondary">
              Data updated on: {new Date(data.data.lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
