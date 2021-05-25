import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ palette, spacing, typography }: Theme) =>
  createStyles({
    text: {
      fontWeight: typography.fontWeightBold,
      fontSize: "32px",
      textAlign: "justify",
    },
    underline: {
      border: `2px solid ${palette.primary.dark}`,
      width: "40px",
      height: "0px",
      margin: "auto",
      marginTop: spacing(2),
    },
  });
