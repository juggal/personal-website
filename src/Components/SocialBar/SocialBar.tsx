import React, { Component, ReactNode } from "react";
import { List, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import { SvgButton } from "@components/SvgButton";

// svg icons
import { ReactComponent as linkedin } from "@svg/linkedin-outline.svg";
import { ReactComponent as twitter } from "@svg/twitter-outline.svg";
import { ReactComponent as github } from "@svg/github.svg";
import { ReactComponent as email } from "@svg/email.svg";

interface SocialBarProps extends WithStyles<typeof styles> {}

export const SocialBar = withStyles(styles)(
  class extends Component<SocialBarProps> {
    render(): ReactNode {
      const { classes } = this.props;
      return (
        <List className={classes.root}>
          <SvgButton
            svg={linkedin}
            link="https://in.linkedin.com/in/nihar-das-085992181"
          />
          <SvgButton svg={twitter} link="https://twitter.com/nihar_j_das" />
          <SvgButton svg={github} link="https://github.com/juggal/" />
          <SvgButton svg={email} link="malito:niharjyotid.cse@sbjit.edu.in" />
        </List>
      );
    }
  }
);
