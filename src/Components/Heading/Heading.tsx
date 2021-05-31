import { withStyles, WithStyles, Typography } from "@material-ui/core";
import React, { Component, ReactNode } from "react";
import { styles } from "./styles";

interface HeadingProps extends WithStyles<typeof styles> {
  text: string;
}

export const Heading = withStyles(styles)(
  class extends Component<HeadingProps> {
    render(): ReactNode {
      const { text, classes } = this.props;
      return (
        <div className={classes.root}>
          <Typography variant="h3" className={classes.text}>
            {text}
          </Typography>
          <div className={classes.underline} />
        </div>
      );
    }
  }
);
