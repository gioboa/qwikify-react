/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { Box, Container, Grid } from '@mui/material';
import { OverviewBudget } from './OverviewBudget';
import { OverviewTotalCustomers } from './OverviewTotalCustomers';
import { OverviewTasksProgress } from './OverviewTasksProgress';
import { OverviewTotalProfit } from './OverviewTotalProfit';

export const Dashboard = qwikify$(() => {
	return (
		<Box
			component='main'
			sx={{
				flexGrow: 1,
				py: 8,
			}}
		>
			<Container maxWidth='xl' style={{ margin: '40px' }}>
				<Grid container spacing={3}>
					<Grid
						xs={12}
						sm={7}
						style={{ margin: 'auto', marginBottom: '20px' }}
					>
						<OverviewBudget
							difference={12}
							positive
							sx={{ height: '100%' }}
							value='$24k'
						/>
					</Grid>
					<Grid
						xs={12}
						sm={7}
						style={{ margin: 'auto', marginBottom: '20px' }}
					>
						<OverviewTotalCustomers
							difference={16}
							positive={false}
							sx={{ height: '100%' }}
							value='1.6k'
						/>
					</Grid>
					<Grid
						xs={12}
						sm={7}
						style={{ margin: 'auto', marginBottom: '20px' }}
					>
						<OverviewTasksProgress sx={{ height: '100%' }} value={75.5} />
					</Grid>
					<Grid
						xs={12}
						sm={7}
						style={{ margin: 'auto', marginBottom: '20px' }}
					>
						<OverviewTotalProfit sx={{ height: '100%' }} value='$15k' />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
});
