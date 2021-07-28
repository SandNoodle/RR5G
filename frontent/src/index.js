import React from "react";
import ReactDOM from "react-dom";

// Themes
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkColorTheme } from "./theme";

// Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import SecurityPage from "./pages/SecurityPage/SecurityPage";
import AdminPage from "./pages/AdminPage/AdminPage";

// Navbar and Footer
import PageFooter from "./components/Universal/Footer/Footer";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={darkColorTheme}>
			<>
				<GlobalStyle />
				<Router>
					<Switch>
						<Route path="/" exact component={MainPage} />
						<Route path="/about" exact component={AboutPage} />
						<Route path="/privacy" exact component={PrivacyPage} />
						<Route path="/security" exact component={SecurityPage} />
						<Route path="/admin" exact component={AdminPage} />
					</Switch>
				<PageFooter />
				</Router>
			</>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
