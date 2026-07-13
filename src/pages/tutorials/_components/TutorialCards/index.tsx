import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedUsers, type Tutorial} from '@site/src/data/tutorials';
import Heading from '@theme/Heading';
import TutorialCard from '../TutorialCard';
import {useFilteredUsers} from '../../_utils';

import styles from './styles.module.css';

function HeadingNoResult() {
	return (
		<Heading as="h2">
			<Translate id="tutorial.usersList.noResult">No results found</Translate>
		</Heading>
	);
}

function SectionHeader({ title }: { title: string }) {
	return (
		<Heading as="h2" style={{
			fontSize: '2.2rem',
			fontWeight: 800,
			marginBottom: '1.5rem',
			marginTop: '2rem',
			background: 'var(--landing-hero-title)',
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
			borderBottom: '2px solid var(--landing-border)',
			paddingBottom: '10px'
		}}>
			{title}
		</Heading>
	);
}

function CardList({items}: {items: Tutorial[]}) {
	return (
		<ul className={clsx('clean-list', styles.cardList)}>
			{items.map((item) => (
				<TutorialCard key={item.title} tutorial={item} />
			))}
		</ul>
	);
}

export default function TutorialCards() {
	const filteredUsers = useFilteredUsers();

	if (filteredUsers.length === 0) {
		return (
			<section className="margin-top--lg margin-bottom--xl">
				<div className="container padding-vert--md text--center">
					<HeadingNoResult />
				</div>
			</section>
		);
	}

	const courses = filteredUsers.filter(t => t.section === 'courses');
	const gameServers = filteredUsers.filter(t => t.section === 'game-server');

	return (
		<section className="margin-top--lg margin-bottom--xl">
			<div className="container">
				{courses.length > 0 && (
					<div style={{ marginBottom: '4rem' }}>
						<SectionHeader title="Core Courses" />
						<CardList items={courses} />
					</div>
				)}
				
				{gameServers.length > 0 && (
					<div>
						<SectionHeader title="Game Server Development" />
						<CardList items={gameServers} />
					</div>
				)}
			</div>
		</section>
	);
}