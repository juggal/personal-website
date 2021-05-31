import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    root: {
      [breakpoints.up("sm")]: {
        width: spacing(8),
        height: spacing(8),
      },
      [breakpoints.only("xs")]: {
        width: spacing(5),
        height: spacing(5),
      },
    },
  });
