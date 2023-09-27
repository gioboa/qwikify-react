/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';

export const AppDrawer = qwikify$(
	({
		forceToggle,
		onClick,
	}: {
		forceToggle: number;
		onClick: (text: string) => void;
	}) => {
		const [isOpen, setIsOpen] = useState(false);

		useEffect(() => {
			if (forceToggle !== 0) {
				setIsOpen(!isOpen);
			}
		}, [forceToggle]);

		const toggleDrawer = () => () => {
			setIsOpen(!isOpen);
		};

		return (
			<Fragment>
				<Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer()}>
					<Box
						sx={{ width: 250 }}
						role='presentation'
						onClick={toggleDrawer()}
						onKeyDown={toggleDrawer()}
					>
						<List>
							{['Dashboard', 'Inbox', 'Send email', 'Drafts'].map(
								(text, index) => (
									<ListItem key={text} disablePadding>
										<ListItemButton
											onClick={() => {
												onClick(text);
											}}
										>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItemButton>
									</ListItem>
								)
							)}
						</List>
						<Divider />
						<List>
							{['All mail', 'Trash', 'Spam'].map((text, index) => (
								<ListItem key={text} disablePadding>
									<ListItemButton
										onClick={() => {
											onClick(text);
										}}
									>
										<ListItemIcon>
											{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
			</Fragment>
		);
	}
);
