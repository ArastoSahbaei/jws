import styled from 'styled-components'
import { HamburgerButton } from './HamburgerButton'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { BackDrop } from '../BackDrop'
import { LaunchProduction } from '../LaunchProduction'

export const Navigation = () => {
	const [openDrawer, setOpenDrawer] = useState(true)

	const closeDrawer = () => {
		setOpenDrawer(false)
	}

	return (
		<Wrapper>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<SideBar drawerIsOpen={openDrawer} drawerHandler={closeDrawer} />
			{!openDrawer || <BackDrop closeDrawer={closeDrawer} />}
			<LaunchProduction />
			<Paragraph2>CREW PAIRING</Paragraph2>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	background-color: #263746;
	padding: 0.3%;
`
const Paragraph2 = styled.p`
	font-size: 1.4rem;
	cursor: pointer;
	transition: 0.3s;
	color: white;
	grid-column: 7/16;
	margin: auto;
	width: 50%;
`
