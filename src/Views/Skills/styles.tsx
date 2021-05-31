import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ breakpoints, spacing }: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
    },
    svg: {
      [breakpoints.down("sm")]: {
        display: "none",
      },
    },
    heading: {
      height: "10%",
    },
    content: {
      height: "90%",
    },
  });
