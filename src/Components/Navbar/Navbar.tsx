import { Grid, withStyles, WithStyles } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { NavButton } from "../NavButton";
import { styles } from "./styles";

export const Navbar = withStyles(styles)(
  class extends Component<WithStyles<typeof styles>> {
    render(): ReactNode {
      const { classes } = this.props;
      return (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.navBackground}
        >
          <Grid item>
            <NavButton text="Home" color="primary" />
          </Grid>
          <Grid item>
            <NavButton text="Services" color="default" />
          </Grid>
          <Grid item>
            <NavButton text="About" color="default" />
          </Grid>
          <Grid item>
            <NavButton text="Skills" color="default" />
          </Grid>
          <Grid item>
            <NavButton text="Contact" color="default" />
          </Grid>
        </Grid>
      );
    }
  }
);
