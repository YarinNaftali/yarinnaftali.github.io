import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "Yarin Naftali",
	tagline: "בלוג אישי",
	favicon: "img/favicon.ico",

	// Set Hebrew as default locale with RTL support
	url: "https://yarinnaftali.github.io",
	baseUrl: "/",
	organizationName: "YarinNaftali",
	projectName: "yarinnaftali.github.io",

	i18n: {
		defaultLocale: "he",
		locales: ["he"],
		localeConfigs: {
			he: {
				label: "עברית",
				direction: "rtl",
				htmlLang: "he-IL",
				calendar: "hebrew",
			},
		},
	},

	onBrokenLinks: "throw",
	markdown: {
		hooks: {
			onBrokenMarkdownLinks: "warn",
		},
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl:
						"https://github.com/YarinNaftali/yarinnaftali.github.io/tree/main/",
					routeBasePath: "/",
				},
				theme: {},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		navbar: {
			title: "Yarin Naftali",
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "תיעוד",
				},
				{
					href: "https://github.com/YarinNaftali/yarinnaftali.github.io",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "תיעוד",
					items: [
						{
							label: "תיעוד",
							to: "/",
						},
					],
				},
				{
					title: "קישורים",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/YarinNaftali/yarinnaftali.github.io",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Yarin Naftali.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
