/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import {
	DragIndicator,
	Label,
	LabelOutlined,
	Star,
	StarBorder,
} from '@mui/icons-material';
import { Box, Checkbox, IconButton } from '@mui/material';
import cx from 'clsx';
import { useState } from 'react';

const mailList = [
	{
		isStarred: false,
		isLabeled: true,
		title: 'Re: [BuilderIO/qwik] - PR 123456',
		description: `
				Reply to this email directly, view it on GitHub, or unsubscribe. You are
				receiving this because you are subscribed to this thread.
			`,
		date: "Sep 29",
	},
	{
		isStarred: Math.random()>0.5,
		isLabeled: Math.random()>0.5,
		title: 'REACT LIVE 2023✨',
		description: `We are so excited to have you at React Live 2023! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor`,
		date: "Sep 29",
	},
];

[...new Array(50).keys()].forEach(() =>
	mailList.push({
		isStarred: Math.random() > 0.5,
		isLabeled: Math.random() > 0.5,
		title: 'Lorem ipsum dolor',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor`,
		date: "Sep 29",
	})
);

export const Mails = qwikify$(({ path }: { path: string }) => {
	return (
		<div style={{ padding: '0 40px' }}>
			<h1>{path.toUpperCase()}</h1>
			{mailList.map((mail, i) => (
				<MailListItem key={i} {...mail} />
			))}
		</div>
	);
});

export type MailListItemProps = {
	isStarred?: boolean;
	isLabeled?: boolean;
	title: React.ReactNode;
	description: React.ReactNode;
	date: React.ReactNode;
};

const MailListItem = ({
	title,
	description,
	date,
	isStarred,
	isLabeled,
}: MailListItemProps) => {
	const [checked, setChecked] = useState(false);
	const [starred, setStarred] = useState(isStarred);
	const [labeled, setLabeled] = useState(isLabeled);

	return (
		<div className='mail'>
			<DragIndicator className={'drag__indicator'} />
			<Box flexShrink={0}>
				<IconButton
					className={cx('icon__button', starred && 'MailListItem-checked')}
					onClick={() => {
						console.log('ads');
						setChecked(!checked);
					}}
				>
					<Checkbox />
				</IconButton>
				<IconButton
					className={cx('icon__button', starred && 'MailListItem-starred')}
					onClick={() => setStarred(!starred)}
				>
					{starred ? <Star /> : <StarBorder />}
				</IconButton>
				<IconButton
					className={cx('icon__button', labeled && 'MailListItem-labeled')}
					onClick={() => setLabeled(!labeled)}
				>
					{labeled ? <Label /> : <LabelOutlined />}
				</IconButton>
			</Box>
			<div className='title'>{title}</div>
			<div className='text'>{description}</div>
			<div className='date__label'>{date}</div>
		</div>
	);
};
