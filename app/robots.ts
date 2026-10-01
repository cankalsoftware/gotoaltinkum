import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'CCBot', 'Bingbot'],
        allow: '/',
      }
    ],
    sitemap: 'https://gotoaltinkum.com/sitemap.xml',
    host: 'https://gotoaltinkum.com',
  };
}
