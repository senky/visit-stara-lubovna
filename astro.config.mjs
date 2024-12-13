// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import typesafeRoutes from 'astro-typesafe-routes';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://visitstaralubovna.com',
    integrations: [mdx(), sitemap(), tailwind(), typesafeRoutes(), react()],
    i18n: {
        defaultLocale: 'sk',
        locales: ['en', 'pl', 'sk'],
    }
});