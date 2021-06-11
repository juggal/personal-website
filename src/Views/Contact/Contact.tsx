import React, { Component, ReactNode } from "react";
import { Grid, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";
import { Heading } from "@components/Heading";
import { SocialBar } from "@components/SocialBar";
import { InputField } from "@components/InputField";
import { TextButton } from "@components/TextButton";

interface ContactProps extends WithStyles<typeof styles> {}

export const Contact = withStyles(styles)(
  class extends Component<ContactProps> {
    render(): ReactNode {
      const { classes } = this.props;
      return (
        <div id="contact" className={classes.container}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.heading}
          >
            <Grid item xs={6} sm={4} md={3}>
              <Heading text="Contact Me" />
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.content}
          >
            <Grid item xs={9} sm={8} md={5} lg={4} xl={3}>
              <SocialBar />
            </Grid>
            <Grid item xs={11} xl={10} className={classes.form}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12} sm={6}>
                  <InputField placeholder="First Name" type="text" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField placeholder="Last Name" type="text" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField placeholder="Email" type="email" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField placeholder="Subject" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <InputField placeholder="Message" type="text" textarea />
                </Grid>
                <Grid item xs={12}>
                  <TextButton text="Submit" type="submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);
