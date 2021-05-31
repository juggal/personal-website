import React, { Component, ReactNode } from "react";
import { Grid, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import { Heading } from "@components/Heading";
import { ServiceCard } from "@components/ServiceCard";

// SVG
import { ReactComponent as Art } from "@svg/services.svg";
import { ReactComponent as webdev } from "@svg/web-development.svg";
import { ReactComponent as appdev } from "@svg/mobile-development.svg";

interface ServicesProps extends WithStyles<typeof styles> {}

export const Services = withStyles(styles)(
  class extends Component<ServicesProps> {
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
            <Grid item xs={6} sm={4} md={3} xl={2}>
              <Heading text="Services" />
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            className={classes.content}
          >
            <Grid item lg={6} className={classes.svg}>
              <Art viewBox="0 0 934 384" />
            </Grid>
            <Grid item xs={11} lg={4} xl={3}>
              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={10} sm={8} md={5} lg={12}>
                  <ServiceCard
                    svg={webdev}
                    title="Web Development"
                    description="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
                  />
                </Grid>
                <Grid item xs={10} sm={8} md={5} lg={12}>
                  <ServiceCard
                    svg={appdev}
                    title="Mobile Development"
                    description="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);
