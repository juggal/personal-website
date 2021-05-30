import { createStyles, Theme } from "@material-ui/core";

export const styles = ({
  spacing,
  transitions,
  palette,
  typography,
  breakpoints,
}: Theme) =>
  createStyles({
    animate: {
      [breakpoints.up("sm")]: {
        animation: `$moveUpDown 1s ${transitions.easing.sharp} infinite alternate`,
      },
      [breakpoints.only("xs")]: {
        animation: `$moveUpDownMobile 1s ${transitions.easing.sharp} infinite alternate`,
      },
    },
    "@keyframes moveUpDown": {
      "0%": {
        bottom: "50px",
      },
      "100%": {
        bottom: "10px",
      },
    },
    "@keyframes moveUpDownMobile": {
      "0%": {
        bottom: "40px",
      },
      "100%": {
        bottom: "10px",
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
