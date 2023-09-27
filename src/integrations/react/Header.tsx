/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export const Header = qwikify$(({ onChange }: { onChange: () => void }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Button color='inherit' onClick={onChange}>
						Menu
					</Button>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, textAlign: 'center' }}
					>
						My Back office
					</Typography>
					<Button color='inherit'>Logout</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
});
