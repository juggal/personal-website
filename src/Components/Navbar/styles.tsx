import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    navBackground: {
      background: palette.secondary.main,
      height: "80px",
      "& div": {
        paddingRight: spacing(8),
      },
    },
  });
