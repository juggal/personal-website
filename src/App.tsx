import React from "react";
import Home from "./Views/Home/Home";
import { Navbar } from "./Components/Navbar";
import { theme } from "./utils";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

function App(): JSX.Element {
  const muiTheme = createMuiTheme(theme);
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
