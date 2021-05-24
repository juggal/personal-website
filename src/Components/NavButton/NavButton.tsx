import { Button, WithStyles, withStyles } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { styles } from "./styles";

interface NavButtonProps extends WithStyles<typeof styles> {
  text: string;
  color: "default" | "primary";
}

export const NavButton = withStyles(styles)(
  class extends Component<NavButtonProps> {
    render(): ReactNode {
      const { text, color, classes } = this.props;
      return (
        <Button
          color={color}
          variant="text"
          size="large"
          classes={{ textSizeLarge: classes.buttonText }}
        >
          {text}
        </Button>
      );
    }
  }
);
