import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ palette, spacing, typography }: Theme) =>
  createStyles({
    container: {
      width: "100%",
      padding: spacing(2),
      display: "grid",
      gridTemplateColumns: "1fr 5fr 0.1fr",
      gridTemplateRows: "repeat(2, 1fr)",
      gridColumnGap: spacing(1),
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      gridArea: "1 / 1 / 2 / 4",
      fontSize: spacing(3),
      fontWeight: typography.fontWeightMedium,
      color: palette.text.primary,
    },
    barContainer: {
      width: "100%",
      gridArea: "2 / 1 / 3 / 3",
      marginRight: spacing(1),
    },
    barRoot: {
      height: spacing(1),
      borderRadius: "3px",
    },
    barColorPrimary: {
      backgroundColor: palette.secondary.main,
    },
    barBar: {
      borderRadius: "3px",
      backgroundColor: palette.primary.dark,
    },
    progressValue: {
      gridArea: "2 / 3 / 3 / 4",
      fontSize: spacing(2),
      fontWeight: typography.fontWeightMedium,
      color: palette.text.primary,
    },
  });
