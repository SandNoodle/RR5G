import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	body {
		min-width: 100vw;
		min-height: 100vh;

		background: linear-gradient(
			180deg,
			${({ theme }) => theme.background_highlight_light} 0%,
			${({ theme }) => theme.background_highlight_dark} 100%
		),
		radial-gradient(
			circle at center,
			${({ theme }) => theme.background_light},
			${({ theme }) => theme.background_dark}
		);
	}
`; 

export const darkColorTheme = {
	background_dark: '#101625',
	background_light: '#320074',
	background_highlight_light: '#FFFFFF00',
	background_highlight_dark: '#b3004b2b',
	transparent_elevation: '#FFFFFF18',
	primary: '#2587ff',
	secondary: '#25baff',
	card_dark: '#381ba3',
	card_light: '#16e4ff',
	card_highlight_dark: '#000000',
	card_highlight_light: '#080808',
	game_list_item_background: "#FFFFFF33", 
	text_high: '#e2e2e2',
	text_medium: '#a8a8a8b5',
	text_low: '#ffffff43',
}