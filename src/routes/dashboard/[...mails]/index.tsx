import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Mails } from '~/integrations/react/Mails';
import { MySlider } from '~/integrations/react/Mui';

export default component$(() => {
	const location = useLocation();
	return (
		<>
			<Mails client:hover path={location.params.mails} />
		</>
	);
});
