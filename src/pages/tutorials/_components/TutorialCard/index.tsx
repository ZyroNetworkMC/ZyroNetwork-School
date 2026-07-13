import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {Tags, TagList, type TagType, type Tutorial} from '@site/src/data/tutorials';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import {useFavorites} from '../../_utils';
import { useTransition } from '@site/src/theme/Root';
import styles from './styles.module.css';

function TagItem({
	label,
	description,
	color,
}: {
	label: string;
	description: string;
	color: string;
}) {
	return (
		<li className={styles.tag} title={description}>
			<span className={styles.textLabel}>{label.toLowerCase()}</span>
			<span className={styles.colorLabel} style={{backgroundColor: color}} />
		</li>
	);
}

function TutorialCardTag({tags}: {tags: TagType[]}) {
	const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

	// Keep same order for all tags
	const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
		TagList.indexOf(tagObject.tag),
	);

	return (
		<>
			{tagObjectsSorted.map((tagObject, index) => {
				return <TagItem key={index} {...tagObject} />;
			})}
		</>
	);
}

function TutorialCard({tutorial}: {tutorial: Tutorial}) {
    const {favorites, toggleFavorite} = useFavorites();
    const isFavorite = favorites.includes(tutorial.title) || tutorial.tags.includes('favorite');
    const { playTransition } = useTransition();

	return (
		<li key={tutorial.title} className="card shadow--md">
			<div className="card__body">
				<div className={clsx(styles.tutorialCardHeader)}>
					<Heading as="h4" className={styles.tutorialCardTitle}>
						<Link 
						  to={`/docs/${tutorial.website}`} 
						  className={styles.tutorialCardLink}
						  onClick={(e) => {
						    e.preventDefault();
						    playTransition('blast', `/docs/${tutorial.website}`, e as any);
						  }}
						>
							{tutorial.title}
						</Link>
					</Heading>
					<button 
					  onClick={() => toggleFavorite(tutorial.title)} 
					  style={{
					    background: 'none', 
					    border: 'none', 
					    cursor: 'pointer', 
					    padding: 0,
					    opacity: isFavorite ? 1 : 0.3,
					    transition: 'opacity 0.2s'
					  }}
					  title="Toggle Favorite"
					>
						<FavoriteIcon size="medium" style={{marginRight: '0.25rem'}} />
					</button>
				</div>
				<p className={styles.tutorialCardBody}>{tutorial.description}</p>
			</div>
			<ul className={clsx('card__footer', styles.cardFooter)}>
				<TutorialCardTag tags={tutorial.tags} />
			</ul>
		</li>
	);
}

export default React.memo(TutorialCard);