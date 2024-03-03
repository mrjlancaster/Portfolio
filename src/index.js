import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
