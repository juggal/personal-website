import React, { Component, ReactNode } from "react";
import { withStyles, WithStyles, Avatar } from "@material-ui/core";
import { styles } from "./styles";

interface ProfilPicProps extends WithStyles<typeof styles> {
  alt: string;
  src: string;
}

export const ProfilePic = withStyles(styles)(
  class extends Component<ProfilPicProps> {
    render(): ReactNode {
      const { classes, alt, src } = this.props;
      return <Avatar alt={alt} src={src} className={classes.root} />;
    }
  }
);
