import React from "react";
import { theme } from "./utils";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { Main } from "@views/Main";

function App(): JSX.Element {
  const muiTheme = responsiveFontSizes(createMuiTheme(theme), {
    disableAlign: true,
    factor: 4,
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

export default App;
