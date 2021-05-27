import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ spacing, shadows }: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      boxShadow: shadows[5],
    },
  });
