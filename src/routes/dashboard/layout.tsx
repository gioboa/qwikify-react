import { Slot, component$, useSignal } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { Header } from '~/integrations/react/Header';
import { AppDrawer } from '~/integrations/react/Drawer';

export default component$(() => {
	const forceToggle = useSignal(0);
	const navigate = useNavigate();
	return (
		<div>
			<Header
				client:visible
				onChange$={() => {
					forceToggle.value = new Date().getTime();
				}}
			/>
			<AppDrawer
				client:visible
				forceToggle={forceToggle.value}
				onClick$={(text) =>
					navigate(
						`/dashboard/${
							text !== 'Dashboard'
								? text.toLowerCase().split(' ').join('-')
								: ''
						}`
					)
				}
			/>
			<Slot />
		</div>
	);
});
