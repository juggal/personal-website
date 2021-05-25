import React, { Component, ReactNode } from "react";
import { withStyles, WithStyles, SvgIcon } from "@material-ui/core";
import { styles } from "./styles";

interface SvgButtonProps extends WithStyles<typeof styles> {
  svg: any;
}

export const SvgButton = withStyles(styles)(
  class extends Component<SvgButtonProps> {
    render(): ReactNode {
      const { classes, svg } = this.props;
      return (
        <SvgIcon className={classes.root} component={svg} viewBox="0 0 64 64" />
      );
    }
  }
);
