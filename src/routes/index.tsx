import { component$ } from '@builder.io/qwik';
import { useNavigate, type DocumentHead } from '@builder.io/qwik-city';
import { SignIn } from '~/integrations/react/SignIn';

export default component$(() => {
  const navigate= useNavigate();
	return (
		<div class='sign-in'>
			<SignIn onSummit$={() => navigate('/dashboard')} client:hover />
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Qwik + React',
	meta: [{ name: 'description', content: 'Qwik + React' }],
};
