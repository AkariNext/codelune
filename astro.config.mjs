// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rlc from "remark-link-card";
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "github-dark"
		},
		remarkPlugins: [[rlc, {cache: true, shortenUrl: true}],],
		rehypePlugins: [
			rehypeRaw,
			[
			  rehypeExternalLinks,
			  { target: '_blank' },
			],
		]

	},
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
