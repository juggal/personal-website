import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ spacing, shadows }: Theme) =>
  createStyles({
    root: {
      width: spacing(60),
      height: spacing(60),
      boxShadow: shadows[5],
    },
  });
