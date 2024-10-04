// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import typesafeRoutes from 'astro-typesafe-routes';

// https://astro.build/config
export default defineConfig({
    site: 'https://visitstaralubovna.com',
    integrations: [mdx(), sitemap(), typesafeRoutes()],
    i18n: {
        defaultLocale: 'sk',
        locales: ['en', 'pl', 'sk'],
    }
});