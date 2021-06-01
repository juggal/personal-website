import { createStyles, Theme } from "@material-ui/core";

export const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
    },
    heading: {
      height: "10%",
    },
    content: {
      [breakpoints.only("xs")]: {
        paddingTop: spacing(2),
      },
      height: "80%",
    },
    button: {
      [breakpoints.only("xs")]: {
        paddingTop: spacing(2),
      },
      height: "10%",
    },
  });
