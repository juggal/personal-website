import React, { Component, ReactNode } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  SvgIcon,
  Typography,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { styles } from "./styles";

interface ServiceCardProps extends WithStyles<typeof styles> {
  svg: any;
  title: string;
  description: string;
}

export const ServiceCard = withStyles(styles)(
  class extends Component<ServiceCardProps> {
    render(): ReactNode {
      const { classes, svg, title, description } = this.props;
      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media}>
              <SvgIcon
                className={classes.icon}
                component={svg}
                viewBox="0 0 64 64"
              />
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body1">{description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }
  }
);
