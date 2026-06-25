import type { AtprotoSyncConfig } from '@scottnath/devx/atproto';

export default {
  siteUrl: 'https://scottnath.github.io/devx-template',
  identifier: process.env.ATP_IDENTIFIER,
  contentDir: 'src/content/blog',
  postPathPrefix: '/blog',
  publication: {
    name: 'devx-template',
    description: 'ATProto publishing demo for devx-template',
  },
  statePath: 'atproto-state.json',
  syndicationPath: 'atproto-syndication.json',
  wellKnownDir: 'public/.well-known',
} satisfies AtprotoSyncConfig;
