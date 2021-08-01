import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	body {
		overflow: hidden;
		min-width: 100vw;
		min-height: 100vh;

		background: 
		radial-gradient(
			circle at center,
			${({ theme }) => theme.background_light},
			${({ theme }) => theme.background_dark}
		), linear-gradient(
			180deg,
			${({ theme }) => theme.background_gradient_top} 0%,
			${({ theme }) => theme.background_gradient_bottom} 100%
		);
	}
`; 

export const darkColorTheme = {
	background_dark: '#000000AB',
	background_light: '#21212142',
	background_gradient_top: '#320074',
	background_gradient_bottom: '#961296',
	transparent_elevation: '#FFFFFF18',
	primary: '#1E88E5',
	secondary: '#64B5F6',
	warning: '#FFC107',
	danger: '#E57373',
	info:'#8BC34A',
	card_dark: '#0D47A1',
	card_light: '#BBDEFB',
	card_highlight_dark: '#000',
	card_highlight_light: '#000',
	game_list_item_background: "#FFFFFF22", 
	game_list_item_hover: "#FFFFFF44",
	text_high: '#FFFFFFDE',
	text_medium: '#FFFFFF80',
	text_low: '#ffffff61',
	modal_background: '#BDBDBD80',
}