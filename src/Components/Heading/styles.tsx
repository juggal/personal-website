import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, spacing, typography }: Theme) =>
  createStyles({
    text: {
      fontWeight: typography.fontWeightBold,
      fontSize: spacing(4),
      textAlign: "justify",
    },
    underline: {
      border: `2px solid ${palette.primary.dark}`,
      width: spacing(5),
      height: spacing(0),
      margin: "auto",
      marginTop: spacing(2),
    },
  });
