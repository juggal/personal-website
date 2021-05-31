import { createStyles, fade, Theme } from "@material-ui/core";

export const styles = ({ palette, zIndex, spacing, breakpoints }: Theme) =>
  createStyles({
    bar: {
      background: palette.secondary.main,
      [breakpoints.only("xs")]: {
        height: "8%",
      },
      [breakpoints.only("sm")]: {
        height: "6%",
      },
      [breakpoints.only("md")]: {
        height: "7%",
      },
      zIndex: zIndex.drawer + 1,
      position: "fixed",
    },
    drawer: {
      zIndex: zIndex.drawer,
    },
    drawerPaper: {
      [breakpoints.only("xs")]: {
        width: spacing(20),
      },
      [breakpoints.only("sm")]: {
        width: spacing(25),
      },
      [breakpoints.only("md")]: {
        width: spacing(28),
      },
      background: fade(palette.secondary.main, 0.95),
    },
    drawerContainer: {
      [breakpoints.only("xs")]: {
        marginTop: spacing(8),
      },
      [breakpoints.only("sm")]: {
        marginTop: spacing(10),
      },
      [breakpoints.only("md")]: {
        marginTop: spacing(8),
      },
    },
  });
