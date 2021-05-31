import { Button, Typography, WithStyles, withStyles } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { styles } from "./styles";

interface NavButtonProps extends WithStyles<typeof styles> {
  text: string;
  color: "default" | "primary";
  onClick?: () => void;
}

export const NavButton = withStyles(styles)(
  class extends Component<NavButtonProps> {
    render(): ReactNode {
      const { text, color, classes, onClick } = this.props;
      return (
        <Button
          color={color}
          variant="text"
          size="large"
          classes={{ textSizeLarge: classes.button }}
          onClick={onClick}
        >
          <Typography variant="h4" className={classes.buttonText}>
            {text}
          </Typography>
        </Button>
      );
    }
  }
);
