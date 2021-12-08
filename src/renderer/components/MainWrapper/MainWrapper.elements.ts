import styled from 'styled-components';

type ContainerProps = {
	opacity?: number;
};

export const Content = styled.div`
	--padding: 20px;

	box-sizing: border-box;
	padding: var(--padding);
`;

export const Container = styled.div<ContainerProps>`
	--min-width: 300px;
	--background-color: #acabf5;
	--transition: var(--time-standard) var(--bezier-rubber);

	box-sizing: border-box;
	overflow: hidden;
	position: absolute;
	display: flex;
	flex-flow: column;
	min-width: var(--min-width);
	border-radius: var(--border-radius-app);
	background-color: var(--background-color);
	opacity: ${({ opacity }) => opacity};
	transition: opacity var(--transition);

	&:hover {
		opacity: 1;
	}
`;
