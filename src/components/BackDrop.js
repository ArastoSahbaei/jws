import styled from 'styled-components'
import PropTypes from 'prop-types'

export const BackDrop = (props) => {
	const { closeDrawer } = props
	return (
		<Div onClick={() => closeDrawer()}>

		</Div>
	)
}

BackDrop.propTypes = {
	closeDrawer: PropTypes.func
}

const Div = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
`