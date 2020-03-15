import Container from "react-bootstrap/Container";
import styled from "styled-components";

export default styled(Container)`
	display: flex;
	justify-content: ${props => (props.center ? "center" : "space-between")};
	flex-wrap: wrap;

	@media (max-width: 768px) {
		justify-content: flex-start;
		flex-wrap: nowrap;
		overflow-x: auto;
		margin: 0;
		padding: 0;
		max-width: none;
	}
`;
