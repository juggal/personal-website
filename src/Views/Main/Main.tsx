import React, { Component, ReactNode } from "react";
import { withStyles, WithStyles, Divider } from "@material-ui/core";
import { styles } from "./styles";
import { Navbar } from "@components/Navbar";
import { Home } from "@views/Home";
import { Services } from "@views/Services";
import { Hamburger } from "@components/Hamburger";
import { Skills } from "@views/Skills";
import { About } from "@views/About";
import { Contact } from "@views/Contact";

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
            <Divider variant="middle" light />
            <Services />
            <Divider variant="middle" light />
            <Skills />
            <Divider variant="middle" light />
            <About />
            <Divider variant="middle" light />
            <Contact />
          </div>
        </div>
      );
    }
  }
);
