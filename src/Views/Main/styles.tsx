import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ breakpoints }: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    navbar: {
      [breakpoints.down("sm")]: {
        display: "none",
      },
      [breakpoints.up("md")]: {
        display: "block",
        height: "8%",
      },
    },
    hamburger: {
      [breakpoints.only("xs")]: {
        display: "block",
        height: "8%",
      },
      [breakpoints.only("sm")]: {
        display: "block",
        height: "6%",
      },
      [breakpoints.up("md")]: {
        display: "none",
      },
    },
    view: {
      [breakpoints.only("xs")]: {
        height: "92%",
      },
      [breakpoints.only("sm")]: {
        height: "94%",
      },
      [breakpoints.up("md")]: {
        height: "92%",
      },
    },
  });
