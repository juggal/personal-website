import React, { Component, ReactNode } from "react";
import { Grid, Typography, WithStyles, withStyles } from "@material-ui/core";
import { styles } from "./styles";
import { ReactComponent as arrow } from "@svg/down-arrow.svg";
import { SvgButton } from "@components/SvgButton";
import { ProfilePic } from "@components/ProfilePic";
import { SocialBar } from "@components/SocialBar";
import profile from "@images/profile.jpg";

interface HomeProps extends WithStyles<typeof styles> {}

export const Home = withStyles(styles)(
  class extends Component<HomeProps> {
    render(): ReactNode {
      const { classes } = this.props;
      return (
        <div className={classes.contianer}>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            style={{ height: "90%" }}
          >
            <Grid item xs={6} sm={5} md={3} xl={2}>
              <ProfilePic src={profile} />
            </Grid>
            <Grid item xs={12} sm={10} md={6} xl={4}>
              <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="baseline"
                spacing={0}
              >
                <Grid item xs={12}>
                  <SocialBar />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" className={classes.name}>
                    I am Nihar Jyoti Das
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={10} md={12}>
                  <Typography variant="h5" className={classes.summary}>
                    Final year student and freelance software developer with 2
                    year experience in this field
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: "10%" }}
          >
            <Grid item>
              <SvgButton
                svg={arrow}
                onClick={() => console.log("hello")}
                className={classes.animate}
                link=""
              />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
);
