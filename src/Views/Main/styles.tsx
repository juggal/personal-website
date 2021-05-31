import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ breakpoints }: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    navbar: {
      [breakpoints.up("md")]: {
        display: "block",
        height: "8%",
      },
      [breakpoints.down("sm")]: {
        display: "none",
      },
    },
    hamburger: {
      [breakpoints.up("md")]: {
        display: "none",
      },
      [breakpoints.down("sm")]: {
        display: "block",
        height: "10%",
      },
    },
    view: {
      [breakpoints.up("md")]: {
        height: "92%",
      },
      [breakpoints.down("sm")]: {
        height: "90%",
      },
    },
  });
