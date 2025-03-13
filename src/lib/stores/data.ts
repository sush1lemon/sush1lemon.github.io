import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		name: 'Godswar Server Emulator',
		link: '',
		description: 'Custom server emulator for an old MMORPG to revive its online functionality.',
		thumbnail: '/images/thumbs/godswar.webp',
		stack: ['Go', 'MariaDB', 'Redis', 'Grafana', 'Prometheus', 'Svelte']
	},
	{
		name: 'Backyard Monsters Refitted',
		link: 'https://bymrefitted.com/about',
		description: 'A project to preserve Backyard Monsters by recreating its gameplay and systems',
		thumbnail: '/images/thumbs/bymr.webp',
		stack: ['Koa', 'Typescript', 'MariaDB', 'MikroORM', 'Redis', 'ActionScript 3']
	},
	{
		name: "Sunnies Payday",
		link: '',
		description: 'A project to automate the payroll process for Sunnies Studios employees',
		thumbnail: '/images/thumbs/payday.webp',
		stack: ['Php', 'Mysql', 'Go', 'Sqlite']
	},
	{
		name: 'FlowscoreNFT',
		link: 'https://www.flowscorenft.com/',
		description: 'A web app dedicated to ranking the best NFT Collections on Flow blockchain.',
		folderName: 'flowscore',
		thumbnail: '/images/flowscore/1.webp',
		stack: ['Laravel', 'Vue.js', 'Tailwind', 'Redis', 'Quasar']
	},
	{
		name: 'InjureFree',
		link: 'https://www.injurefree.com/',
		description:
			'InjureFree is a digital, real-time injury incident reporting service empowering athlete safety initiatives and risk management for organized sports',
		folderName: 'injurefree',
		thumbnail: '/images/thumbs/injurefree.webp',
		stack: ['Laravel', 'Vue.js', 'Tailwind', 'Redis', 'Stripe']
	},
	{
		name: 'Laybare Web App',
		link: 'https://booking.lay-bare.com',
		description: 'Platform for managing branch, services, products and customer reservations.',
		thumbnail: '/images/thumbs/laybare.webp',
		stack: ['Laravel', 'Vue.js', 'Node.js', 'Element.UI', 'Socket.io']
	},
	{
		name: 'OmniStaff',
		link: 'https://omnistaff.hirayamnl.com',
		description:
			'Appointment scheduling system that enables users to discover nearby healthcare professionals. The system takes care of everything\n' +
			'from healthcare compliance up to invoicing',
		folderName: 'omni',
		thumbnail: '/images/omni/1.webp',
		stack: ['Laravel', 'Vue.js', 'Quasar']
	},
	{
		name: 'OrangeApps LMS v2',
		link: 'https://wccqc.orangeapps.ph/oa_school',
		description: 'A platform designed to streamline course management, track student progress, and facilitate online learning for educational institutions and organizations.',
		folderName: 'lms',
		thumbnail: '/images/thumbs/lms.webp',
		stack: ['Node.js', 'Redis', 'CodeIgniter', 'MQTT', 'Socket.io']
	},
	{
		name: 'IP Twins Detective Platform',
		link: 'https://iptwins.orangeapps.ph',
		description: 'Monitor the use of your trademark online, amongst domain names, web content, marketplaces, social media, app stores, adwords and Web3.',
		thumbnail: '/images/thumbs/iptwins.webp',
		stack: ['Laravel', 'Vue.js', 'Go', 'MongoDB', 'Mysql', 'Python']
	}
];

export const sideProjects = [
	{
		name: 'Shorty',
		link: 'https://shorty.sush1.xyz/',
		description: 'A URL Shortener living on the edge using cloudflare workers, pages and kv',
		stack: ['Vue.js', 'Cloudflare Pages', 'Cloudflare Workers', 'Cloudflare KV']
	},
	{
		name: 'Godswar Server Emulator',
		link: 'https://github.com/sush1lemon/godswar-server',
		description: '',
		stack: ['Go', 'TCP/IP']
	}
];

export const tools = ['Laravel', 'Vue.js', 'Node.js', 'Tailwind', 'Go', 'Redis'];
