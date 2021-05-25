import { Grid, withStyles, WithStyles } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { NavButton } from "../NavButton";
import { styles } from "./styles";

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
            <NavButton
              text="Home"
              color={this.changeColor(0) ? "primary" : "default"}
              onClick={() => this.handleClick(0)}
            />
          </Grid>
          <Grid item>
            <NavButton
              text="Services"
              color={this.changeColor(1) ? "primary" : "default"}
              onClick={() => this.handleClick(1)}
            />
          </Grid>
          <Grid item>
            <NavButton
              text="About"
              color={this.changeColor(2) ? "primary" : "default"}
              onClick={() => this.handleClick(2)}
            />
          </Grid>
          <Grid item>
            <NavButton
              text="Skills"
              color={this.changeColor(3) ? "primary" : "default"}
              onClick={() => this.handleClick(3)}
            />
          </Grid>
          <Grid item>
            <NavButton
              text="Contact"
              color={this.changeColor(4) ? "primary" : "default"}
              onClick={() => this.handleClick(4)}
            />
          </Grid>
        </Grid>
      );
    }
  }
);
