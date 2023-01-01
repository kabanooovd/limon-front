import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


position: relative;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	  }
	  
	  ::-webkit-scrollbar-track {
		width: 4px;
		background-color: #F0F2F6 ;
	  }
	  
	  ::-webkit-scrollbar-thumb {
		width: 4px;
		background-color: #10C8D2;
		border-radius: 4px;
	  }
	  
	  ::-webkit-scrollbar-thumb:hover {
		background-color: #3eb7db;
	  }

//   background: #7E829B;
}
`;

export const theme = {
	RED: 'red',
	WHITE: '#FFFFFF',
  DARK_BLUE: '#020454',


	FIELD_BACKGROUND: "#f0f0f0",
	FIELD_TEXT_COLOR: "#8c8c8c",

  HEADER_BACKGROUND: "grey",
  FOOTER_BACKGROUND: "black"
} as const;