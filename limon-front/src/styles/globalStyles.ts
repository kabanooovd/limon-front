import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


position: relative;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	  }
	  
	  ::-webkit-scrollbar-track {
		width: 6px;
		background-color: #F0F2F6 ;
	  }
	  
	  ::-webkit-scrollbar-thumb {
		width: 6px;
		background-color: #10C8D2;
		border-radius: 6px;
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




  HEADER_BACKGROUND: "grey",
  FOOTER_BACKGROUND: "black"
} as const;