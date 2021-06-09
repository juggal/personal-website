import React, { Component, ReactNode } from "react";
import { Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import { Heading } from "@components/Heading";
import { TextButton } from "@components/TextButton";

interface AboutProps extends WithStyles<typeof styles> {}

export const About = withStyles(styles)(
  class extends Component<AboutProps> {
    render(): ReactNode {
      const { classes } = this.props;
      return (
        <div className={classes.container}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.heading}
          >
            <Grid item xs={6} sm={3} md={2}>
              <Heading text="About Me" />
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.content}
          >
            <Grid item xs={10} md={8} xl={6}>
              <Typography variant="h5" paragraph align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                non est id massa cursus elementum sed eget orci. Sed feugiat
                venenatis neque, ac aliquet turpis consectetur at. Suspendisse
                eget convallis justo. Fusce eu condimentum arcu
              </Typography>
              <Typography variant="h5" paragraph align="justify">
                Fusce scelerisque libero eu imperdiet semper. Sed finibus
                ullamcorper augue, ac elementum metus porttitor sit amet.
                Suspendisse eu urna vitae arcu convallis lacinia. Phasellus et
                leo a mauris rhoncus viverra.
              </Typography>
              <Typography variant="h5" paragraph align="justify">
                Curabitur lobortis tincidunt purus sed aliquam. Quisque sodales
                urna condimentum venenatis auctor. Sed maximus egestas diam eget
                maximus. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Ut ut orci vel justo
                convallis fringilla.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-around"
            alignItems="baseline"
            className={classes.button}
          >
            <Grid item xs={10} md={8} xl={6}>
              <TextButton
                text="Resume"
                type="download"
                link="https://drive.google.com/file/d/1MSqUrknIaNP9qw4DznF8JfNrjXRjKp4n/view?usp=sharing"
              />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);
