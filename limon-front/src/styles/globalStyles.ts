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

	PAGE_TITLE_COLOR: "#6d8c73",

	FIELD_LABEL_COLOR: "#505250",
	FIELD_BACKGROUND: "#F2F4F7",
	FIELD_TEXT_COLOR: "#8c8c8c",
	CHECK_BOX_CHECKED_BACKGROUND: "#40b353",

  HEADER_BACKGROUND: "grey",
  FOOTER_BACKGROUND: "black",
} as const;