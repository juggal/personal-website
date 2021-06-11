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
        <div id="services" className={classes.container}>
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
            <Grid item md={6} lg={6} xl={5} className={classes.svg}>
              <Art viewBox="0 0 934 384" />
            </Grid>
            <Grid item xs={12} md={6} lg={5} xl={3}>
              <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                className={classes.cardSpacing}
              >
                <Grid item xs={10} sm={7} md={8} lg={9} xl={10}>
                  <ServiceCard
                    svg={webdev}
                    title="Web Development"
                    description="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
                  />
                </Grid>
                <Grid item xs={10} sm={7} md={8} lg={9} xl={10}>
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
