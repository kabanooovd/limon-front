import React from "react";
import styled from "styled-components";

interface PStyledFlex {
	direction?: string;
	align?: "center" | "space-between" | "space-around" | "flex-end" | "none";
	justify?: "center" | "space-between" | "space-around" | "flex-end";
	margin?: string;
	padding?: string;
	width?: string;
	height?: string;
	maxWidth?: string;
	minWidth?: string;
	minHeight?: string;
	backGround?: string;
	staticBackground?: string;
	Border?: string;
	BorderBottom?: string;
	fFamily?: string;
	BorderRadius?: string;
	Zindex?: number;
	Position?: string;
	flexBasis?: string;
	Wrap?: "nowrap" | "wrap" | "wrap-reverse";
  cursor?: string;
};

const StyledFlex = styled.div<PStyledFlex>`
	display: flex;
	flex-wrap: ${(props) => props.Wrap || "nowrap"};
	font-family: ${(props) => props.fFamily || "auto"};
	flex-direction: ${(props) => props.direction || "row"};
	align-items: ${(props) => props.align || "stretch"};
	justify-content: ${(props) => props.justify || "stretch"};
	margin: ${(props) => props.margin || "0"};
	padding: ${(props) => props.padding || "0"};
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	background: ${(props) => props.staticBackground || "transparent"};
	max-width: ${(props) => props.maxWidth || "auto"};
	min-width: ${(props) => props.minWidth || "auto"};
	min-height: ${(props) => props.minHeight || "auto"};
	border: ${(props) => props.Border || "none"};
	border-bottom: ${(props) => props.BorderBottom};
	border-radius: ${(props) => props.BorderRadius || "none"};
	z-index: ${(props) => props.Zindex || "auto"};
	position: ${(props) => props.Position || "static"};
	transition: background 0.5s;
	flex-basis: ${(props) => props.flexBasis};
  cursor: ${(props) => props.cursor || 'auto'};
`;

export const Flex: React.FC<PStyledFlex> = (props) => {
	return <StyledFlex {...props} />;
};
