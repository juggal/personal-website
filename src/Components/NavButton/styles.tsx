import { Theme, createStyles } from "@material-ui/core";

export const styles = ({ spacing, typography }: Theme) =>
  createStyles({
    buttonText: {
      fontSize: spacing(3.5),
      fontWeight: typography.fontWeightMedium,
      "&:hover": {
        background: "none",
      },
    },
  });
