import React, { Component, ReactNode } from "react";
import { withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import { Navbar } from "@components/Navbar";
import { Home } from "@views/Home";
import { Hamburger } from "@components/Hamburger";

interface MainProps extends WithStyles<typeof styles> {}

export const Main = withStyles(styles)(
  class extends Component<MainProps> {
    render(): ReactNode {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <div className={classes.navbar}>
            <Navbar />
          </div>
          <div className={classes.hamburger}>
            <Hamburger />
          </div>
          <div className={classes.view}>
            <Home />
          </div>
        </div>
      );
    }
  }
);
