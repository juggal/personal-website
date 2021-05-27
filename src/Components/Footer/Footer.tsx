import React, { Component, ReactNode } from "react";
import { withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";

interface FooterProps extends WithStyles<typeof styles> {
  text: string;
}

export const Footer = withStyles(styles)(
  class extends Component<FooterProps> {
    render(): ReactNode {
      const { text, classes } = this.props;
      return <footer className={classes.root}>{text}</footer>;
    }
  }
);
