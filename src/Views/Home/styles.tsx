import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ spacing, transitions, palette, typography }: Theme) =>
  createStyles({
    animate: {
      animation: `$moveUpDown 1s ${transitions.easing.sharp} infinite alternate`,
    },
    "@keyframes moveUpDown": {
      "0%": {
        bottom: "50px",
      },
      "100%": {
        bottom: "0px",
      },
    },
    contianer: {
      height: "100%",
      width: "100%",
    },
    name: {
      fontWeight: typography.fontWeightBold,
      color: palette.text.primary,
      paddingLeft: spacing(2),
      margin: "0.4em 0 0.4em 0",
    },
    summary: {
      fontWeight: typography.fontWeightRegular,
      color: palette.text.primary,
      paddingLeft: spacing(2),
      margin: "0.4em 0 0 0",
    },
  });
