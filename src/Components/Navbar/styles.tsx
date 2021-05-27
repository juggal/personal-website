import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    navBackground: {
      background: palette.secondary.main,
      height: "100%",
      width: "100%",
      "& div": {
        paddingRight: spacing(8),
      },
    },
  });
