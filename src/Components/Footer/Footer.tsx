import React, { Component, ReactNode } from "react";
import { Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";

interface FooterProps extends WithStyles<typeof styles> {
  text: string;
}

export const Footer = withStyles(styles)(
  class extends Component<FooterProps> {
    render(): ReactNode {
      const { text, classes } = this.props;
      return (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <Typography variant="h6">{text}</Typography>
          </Grid>
        </Grid>
      );
    }
  }
);
