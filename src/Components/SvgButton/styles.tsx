import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      width: spacing(8),
      height: spacing(8),
    },
  });
