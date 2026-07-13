import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type Tutorial = {
  title: string;
  description: string;
  website: string;
  source: string | null;
  tags: TagType[];
  section: 'courses' | 'game-server';
};

const Tutorials: Tutorial[] = [
  // COURSES
  {
    title: 'PHP',
    description: 'Learn PHP fundamentals, OOP principles, and modern backend development practices.',
    website: 'php/introduction',
    source: ' ',
    tags: ['development'],
    section: 'courses'
  },
  {
    title: 'Linux Fundamentals',
    description: 'Master the command line, process management, and server administration.',
    website: 'linux/introduction',
    source: ' ',
    tags: ['serversetup'],
    section: 'courses'
  },
  {
    title: 'Python',
    description: 'Automate workflows, build tools, and learn modern Python programming.',
    website: 'python/introduction',
    source: ' ',
    tags: ['development'],
    section: 'courses'
  },
  {
    title: 'Java',
    description: 'Master Object-Oriented Programming and robust enterprise Java architecture.',
    website: 'java/introduction',
    source: ' ',
    tags: ['development'],
    section: 'courses'
  },
  {
    title: 'Ethical Hacking',
    description: 'Learn penetration testing, vulnerabilities, and offensive security techniques.',
    website: 'ethical-hacking/introduction',
    source: ' ',
    tags: ['development'],
    section: 'courses'
  },
  {
    title: 'CyberSecurity',
    description: 'Defend infrastructure, configure firewalls, and implement security best practices.',
    website: 'cybersecurity/introduction',
    source: ' ',
    tags: ['serversetup'],
    section: 'courses'
  },
  
  // GAME SERVER DEVELOPMENT
  {
    title: 'PocketMine-MP',
    description: 'Build custom Minecraft Bedrock plugins using PocketMine-MP and PHP.',
    website: 'pocketmine-mp/introduction',
    source: ' ',
    tags: ['development', 'api'],
    section: 'game-server'
  },
  {
    title: 'Nukkit',
    description: 'Create Java-based plugins for Nukkit servers and learn the Java API.',
    website: 'nukkit/introduction',
    source: ' ',
    tags: ['development', 'api'],
    section: 'game-server'
  },
  {
    title: 'DragonFly',
    description: 'Write high-performance Go-based server software for Minecraft Bedrock.',
    website: 'dragonfly/introduction',
    source: ' ',
    tags: ['development'],
    section: 'game-server'
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