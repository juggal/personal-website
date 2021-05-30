import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    root: {
      display: "inline",
      "& a:not(:last-child)": {
        marginRight: spacing(6),
      },
      [breakpoints.only("xs")]: {
        marginLeft: spacing(1),
        "& a:not(:last-child)": {
          marginRight: spacing(4),
        },
      },
    },
  });
