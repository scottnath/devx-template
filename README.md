# devx-template

Node 24 Astro + Storybook starter using [`@scottnath/devx`](https://github.com/scottnath/devx) for shared tooling.

Use this repository as a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) to bootstrap new Astro sites with Storybook, semantic-release, and GitHub Actions.

Page stories live in `src/stories/` (not `src/pages/`) so Astro does not treat them as site routes.

## Use as template

1. Click **Use this template** on GitHub to create your repository.
2. Clone and install:

   ```bash
   npm install
   ```

3. Update GitHub Pages paths for your repo name — find/replace `devx-template` in `astro.config.ts` (`base`) and `.storybook/main.ts` (Storybook production `config.base`).

4. Enable **GitHub Pages** (Settings → Pages → Build and deployment → Source: **GitHub Actions**).

## Local development

Locally the Astro site is served at `/` and Storybook at `http://localhost:6006/`. Production builds for GitHub Pages use the `/devx-template` base path (set via `GITHUB_PAGES=true` in CI).

```bash
npm start          # Astro dev server
npm run storybook  # Storybook on http://localhost:6006
npm run typecheck  # astro check
npm run build      # production build → dist/
```

## Tooling

All Astro, Storybook, and semantic-release dependencies come transitively from `@scottnath/devx`. Add repo-specific packages only to root `devDependencies`.

Requires `.npmrc` with `@scottnath:registry=https://npm.pkg.github.com` for GitHub Packages.

## CI/CD

| Workflow | Purpose |
|----------|---------|
| **CI** | typecheck, Astro build, Storybook build on push/PR |
| **Release** | semantic-release (gitmoji) on push to `main` |
| **Publish** | Deploy Astro site and Storybook to GitHub Pages |

Published URLs for this template repo:

- Site: https://scottnath.github.io/devx-template/
- Storybook: https://scottnath.github.io/devx-template/storybook/

## Commits

Use [Gitmoji](https://gitmoji.dev) commit messages. See `@scottnath/devx` docs in `node_modules/@scottnath/devx/docs/`.
