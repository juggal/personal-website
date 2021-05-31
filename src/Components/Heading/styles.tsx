import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, spacing, typography, breakpoints }: Theme) =>
  createStyles({
    root: {
      [breakpoints.down("sm")]: {
        marginTop: spacing(2),
      },
      [breakpoints.up("md")]: {
        marginTop: spacing(3),
      },
    },
    text: {
      fontWeight: typography.fontWeightBold,
      textAlign: "center",
    },
    underline: {
      border: `2px solid ${palette.primary.dark}`,
      width: "20%",
      height: spacing(0),
      margin: "auto",
      marginTop: spacing(2),
    },
  });
