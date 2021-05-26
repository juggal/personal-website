import React, { Component, ReactNode } from "react";
import { List, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import { SkillBarItem } from "@components/SkillBarItem";
import { skillType } from "@ctypes";

interface SkillBarListProps extends WithStyles<typeof styles> {
  items: skillType[];
}

export const SkillBarList = withStyles(styles)(
  class extends Component<SkillBarListProps> {
    render(): ReactNode {
      const { classes, items } = this.props;
      return (
        <List className={classes.root}>
          {items.map((item) => (
            <SkillBarItem key={item.id} label={item.label} value={item.value} />
          ))}
        </List>
      );
    }
  }
);
