import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type Tutorial = {
  title: string;
  description: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

const Tutorials: Tutorial[] = [
  {
    title: 'PHP OOP Fundamentals',
    description: 'Learn classes, interfaces, inheritance, namespaces, strict typing, and design patterns used in real plugin codebases.',
    website: 'php/introduction',
    source: ' ',
    tags: ['development'],
  },
  {
    title: 'Python Scripting',
    description: 'Automate server workflows, generate config templates, and build admin tools with Python scripts.',
    website: 'python/introduction',
    source: ' ',
    tags: ['development'],
  },
  {
    title: 'Linux & Server Administration',
    description: 'Master the command line, process management, networking, and hosting for production game servers.',
    website: 'linux/introduction',
    source: ' ',
    tags: ['serversetup'],
  }
];

export type TagType =
  | 'favorite'
  | 'api'
  | 'development'
  | 'serversetup'
  | 'client';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: 'Favorite',
    description: 'Community favorites and recommended starting points',
    color: '#e9669e',
  },

  api: {
    label: translate({message: 'Api'}),
    description: translate({
      message: 'Tutorials covering the PocketMine-MP API surface',
      id: 'tutorial.tag.api.description',
    }),
    color: '#a855f7',
  },

  development: {
    label: translate({message: 'Development'}),
    description: translate({
      message: 'Plugin development and programming tutorials',
      id: 'tutorial.tag.development.description',
    }),
    color: '#7c3aed',
  },

  serversetup: {
    label: translate({message: 'Server Setup'}),
    description: translate({
      message: 'Hosting, deployment, and server administration guides',
      id: 'tutorial.tag.serversetup.description',
    }),
    color: '#14cfc3',
  },

  client: {
    label: translate({message: 'Client'}),
    description: translate({
      message: 'Client-side modifications and resource packs',
      id: 'tutorial.tag.client.description',
    }),
    color: '#f59e0b',
  },
};

export const TagList = Object.keys(Tags) as TagType[];

function sortTutorials() {
  let result = Tutorials;
  // Sort by site name
  //result = sortBy(result, (user) => user.title.toLowerCase());
  return result;
}

export const sortedUsers = sortTutorials();