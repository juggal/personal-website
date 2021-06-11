import React, { Component, ReactNode } from "react";
import { Grid, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";

// custom components
import { Heading } from "@components/Heading";
import { SkillBarList } from "@components/SkillBarList";

// SVG
import { ReactComponent as Art } from "@svg/skills.svg";

// mock data
import { skills } from "@mdata";

interface SkillsProps extends WithStyles<typeof styles> {}

export const Skills = withStyles(styles)(
  class extends Component<SkillsProps> {
    render(): ReactNode {
      const { classes } = this.props;
      return (
        <div id="skills" className={classes.container}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.heading}
          >
            <Grid item xs={4} sm={3} md={2}>
              <Heading text="Skills" />
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            className={classes.content}
          >
            <Grid item md={5} lg={5} xl={4} className={classes.svg}>
              <Art viewBox="0 0 719 360" />
            </Grid>
            <Grid item xs={11} sm={10} md={6} lg={5} xl={4}>
              <SkillBarList items={skills} />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);
