import { Grid, withStyles, WithStyles } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { NavButton } from "../NavButton";
import { styles } from "./styles";
import { Link } from "react-scroll";

interface NavbarState {
  curIndex: number;
}

export const Navbar = withStyles(styles)(
  class extends Component<WithStyles<typeof styles>, NavbarState> {
    constructor(props: WithStyles<typeof styles>) {
      super(props);
      this.state = {
        curIndex: 0,
      };
    }

    changeColor = (index: number): boolean => {
      return index === this.state.curIndex;
    };

    handleClick = (index: number): void => {
      this.setState({
        curIndex: index,
      });
    };

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
            <Link to="home" activeClass="activeClass" spy={true} smooth={true}>
              <NavButton
                text="Home"
                color={this.changeColor(0) ? "primary" : "default"}
                onClick={() => this.handleClick(0)}
              />
            </Link>
          </Grid>
          <Grid item>
            <Link
              to="services"
              activeClass="activeClass"
              spy={true}
              smooth={true}
            >
              <NavButton
                text="Services"
                color={this.changeColor(1) ? "primary" : "default"}
                onClick={() => this.handleClick(1)}
              />
            </Link>
          </Grid>
          <Grid item>
            <Link to="about" activeClass="activeClass" spy={true} smooth={true}>
              <NavButton
                text="About"
                color={this.changeColor(2) ? "primary" : "default"}
                onClick={() => this.handleClick(2)}
              />
            </Link>
          </Grid>
          <Grid item>
            <Link
              to="skills"
              activeClass="activeClass"
              spy={true}
              smooth={true}
            >
              <NavButton
                text="Skills"
                color={this.changeColor(3) ? "primary" : "default"}
                onClick={() => this.handleClick(3)}
              />
            </Link>
          </Grid>
          <Grid item>
            <Link
              to="contact"
              activeClass="activeClass"
              spy={true}
              smooth={true}
            >
              <NavButton
                text="Contact"
                color={this.changeColor(4) ? "primary" : "default"}
                onClick={() => this.handleClick(4)}
              />
            </Link>
          </Grid>
        </Grid>
      );
    }
  }
);
