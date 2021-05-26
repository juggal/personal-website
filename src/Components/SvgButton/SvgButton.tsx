import React, { Component, ReactNode } from "react";
import { withStyles, WithStyles, SvgIcon, IconButton } from "@material-ui/core";
import { styles } from "./styles";

interface SvgButtonProps extends WithStyles<typeof styles> {
  svg: any;
  onClick?: () => void;
}

export const SvgButton = withStyles(styles)(
  class extends Component<SvgButtonProps> {
    render(): ReactNode {
      const { classes, svg, onClick } = this.props;
      return (
        <IconButton onClick={onClick} size="small">
          <SvgIcon
            className={classes.root}
            component={svg}
            viewBox="0 0 64 64"
          />
        </IconButton>
      );
    }
  }
);
