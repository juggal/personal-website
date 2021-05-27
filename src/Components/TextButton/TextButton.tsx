import { Button, withStyles, WithStyles } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { styles } from "./styles";

interface TextButtonProps extends WithStyles<typeof styles> {
  text: string;
  onClick?: () => void;
  type: "submit" | "download";
  link?: string;
}

export const TextButton = withStyles(styles)(
  class extends Component<TextButtonProps> {
    render(): ReactNode {
      const { text, onClick, classes, type, link } = this.props;
      if (type === "submit") {
        return (
          <Button onClick={onClick} className={classes.button} type="submit">
            <span className={classes.text}>{text}</span>
          </Button>
        );
      }
      if (type === "download") {
        return (
          <Button
            href={link ? link : ""}
            target="_blank"
            className={classes.button}
          >
            <span className={classes.text}>{text}</span>
          </Button>
        );
      }
    }
  }
);
