import React, { Component, ReactNode } from "react";
import {
  LinearProgress,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { styles } from "./styles";

interface SkillBarItemProps extends WithStyles<typeof styles> {
  label: string;
  value: number;
}

export const SkillBarItem = withStyles(styles)(
  class extends Component<SkillBarItemProps> {
    render(): ReactNode {
      const { label, value, classes } = this.props;
      return (
        <div className={classes.container}>
          <Typography variant="h5" className={classes.label}>
            {label}
          </Typography>
          <div className={classes.barContainer}>
            <LinearProgress
              color="primary"
              variant="determinate"
              value={value}
              classes={{
                root: classes.barRoot,
                colorPrimary: classes.barColorPrimary,
                bar: classes.barBar,
              }}
            />
          </div>
          <Typography
            variant="h6"
            className={classes.progressValue}
          >{`${Math.round(value)}%`}</Typography>
        </div>
      );
    }
  }
);
