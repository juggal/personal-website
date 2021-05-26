import React, { Component, ReactNode } from "react";
import { LinearProgress, withStyles, WithStyles } from "@material-ui/core";
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
          <div className={classes.label}>{label}</div>
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
          <div className={classes.progressValue}>{`${Math.round(value)}%`}</div>
        </div>
      );
    }
  }
);
