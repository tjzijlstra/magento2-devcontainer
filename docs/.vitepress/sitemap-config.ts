import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';
import { PageData } from 'vitepress';

export const buildLinks = (id, pageData: PageData, links: { url: string; lastmod: number | undefined }[] = []) => {
  if (!/[\\/]404\.html$/.test(id)) {
    links.push({
      url: pageData.relativePath.replace(/\.md$/, '.html'),
      lastmod: pageData.lastUpdated,
    });
  }
};

export const buildSitemap = (outDir: string, links: { url: string; lastmod: number | undefined }[] = []) => {
  const sitemap = new SitemapStream({ hostname: 'https://devcontainer.mappia.io/' });
  const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
  sitemap.pipe(writeStream);
  links.forEach((link) => sitemap.write(link));
  sitemap.end();
};
