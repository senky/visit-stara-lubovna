import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: 'Navštívte Starú Ľubovňu a Pieniny',
		description: 'Skrytý poklad Slovenska - Ľubovniansky hrad a skanzen, vojenská expozícia, Pieniny (kláštor, kúpele, splav na pltiach), travertínový kráter, Nestville, bludisko',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
