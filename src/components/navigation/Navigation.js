import styled from 'styled-components'
import { HamburgerButton } from './HamburgerButton'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { BackDrop } from '../BackDrop'

export const Navigation = () => {
	const [openDrawer, setOpenDrawer] = useState(true)

	const closeDrawer = () => {
		setOpenDrawer(false)
	}

	return (
		<div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<SideBar drawerIsOpen={openDrawer} drawerHandler={closeDrawer} />
			{!openDrawer || <BackDrop closeDrawer={closeDrawer} />}
		</div>
	)
}


