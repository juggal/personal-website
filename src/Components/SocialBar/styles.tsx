import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: "inline",
      "& a:not(:last-child)": {
        marginRight: spacing(6),
      },
    },
  });
