import { withStyles, WithStyles } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { styles } from "./styles";

interface TextButtonProps extends WithStyles<typeof styles> {
  text: string;
  onClick?: () => void;
}

export const TextButton = withStyles(styles)(
  class extends Component<TextButtonProps> {
    render(): ReactNode {
      const { text, onClick, classes } = this.props;
      return (
        <button onClick={onClick} className={classes.button}>
          <span className={classes.text}>{text}</span>
        </button>
      );
    }
  }
);
