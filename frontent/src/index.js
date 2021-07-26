import React from "react";
import ReactDOM from "react-dom";

// Themes
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkColorTheme } from "./theme";

// Pages
import MainPage from "./pages/MainPage/MainPage";

// Navbar and Footer
import PageFooter from "./components/Universal/Footer/Footer";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={darkColorTheme}>
			<>        
				<GlobalStyle/>
				<MainPage />
				<PageFooter/>
			</>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
