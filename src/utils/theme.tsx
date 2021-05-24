import { ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#FC5130",
      dark: "#FC5130",
      contrastText: "#eeeeee",
    },
    secondary: {
      main: "#222831",
      dark: "#393E46",
      contrastText: "#eeeeee",
    },
    text: {
      primary: "#eeeeee",
    },
    background: {
      default: "#393E46",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
};
