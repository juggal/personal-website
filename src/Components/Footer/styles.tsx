import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ palette, typography, breakpoints, spacing }: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: palette.secondary.main,
      color: palette.text.primary,
      [breakpoints.up("xl")]: {
        height: "6%",
      },
      [breakpoints.only("lg")]: {
        height: "8%",
      },
      [breakpoints.only("md")]: {
        height: "6%",
      },
      [breakpoints.only("sm")]: {
        height: "5%",
      },
      [breakpoints.only("xs")]: {
        height: "6%",
        marginTop: spacing(10),
      },
    },
  });
