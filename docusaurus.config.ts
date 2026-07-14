import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
	title: 'ZyroNetwork School',
	tagline: 'A Website To Teach Everything About PocketMine-MP by ZyroNetwork',
	favicon: 'img/zyro_logo.png',

	// Set the production url of your site here
	url: 'https://ZyroNetworkMC.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	organizationName: 'ZyroNetworkMC', // Usually your GitHub org/user name.
	projectName: 'ZyroNetwork-School', // Usually your repo name.
	trailingSlash: false,

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	markdown: {
		mermaid: true,
	},
	themes: [
		'@docusaurus/theme-mermaid',
		[
			'@easyops-cn/docusaurus-search-local',
			{
				hashed: true,
				indexDocs: true,
				indexBlog: true,
				indexPages: true,
				language: ["en"],
			}
		]
	],

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	plugins: [
		[
			'ideal-image',
			{
				quality: 70,
				max: 1030,
				min: 640,
				steps: 2,
				// Use false to debug, but it incurs huge perf costs
				disableInDev: true,
			} satisfies IdealImageOptions,
		],
		tailwindPlugin
	],
	presets: [
		[
			'classic',
			{
				docs: {
					breadcrumbs: false,
					sidebarPath: 'sidebars.ts',
					editUrl: 'https://github.com/ZyroNetworkMC/ZyroNetwork-School/tree/main',
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/zyro_logo.png',
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		navbar: {
			logo: {
				alt: 'ZyroNetwork School',
				src: 'img/zyro_logo.png',
				srcDark: 'img/zyro_logo.png',
			},
			items: [
				{
					to: 'tutorials', 
					position: 'left',
					label: 'Tutorials',
				},
				{
					to: 'blog', 
					position: 'left',
					label: 'Blogs',
				},
				{
					href: 'https://github.com/ZyroNetworkMC', 
					position: 'right',
					className: 'github-icon pseudo-icon',
				},
				{
					href: 'https://discord.gg/YznYkMuRUG', 
					position: 'right',
					className: 'discord-icon pseudo-icon',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'ZyroNetwork Discord',
							href: 'https://discord.gg/YznYkMuRUG',
						},
					],
				},
				{
					title: 'Other Links',
					items: [
						{
							label: 'Github',
							href: 'https://github.com/ZyroNetworkMC',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} <strong>ZyroNetwork</strong>.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.vsDark,
			additionalLanguages: ['php'],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;