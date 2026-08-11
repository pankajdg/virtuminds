# Fix Netlify deployment for TanStack Start

## Problem
Netlify build fails because the publish directory is set to `dist/client`, but TanStack Start + Nitro writes its build output to a different directory (`.output/` by default). The Lovable template targets Cloudflare Workers, so Netlify also needs a Nitro preset change to produce Netlify-compatible artifacts.

## Goal
Make the site deploy successfully on Netlify with the same build command (`bun run build`).

## Steps
1. Inspect current build output
   - Run a local build with `bun run build` to confirm the exact output directory and top-level files.
2. Add Netlify configuration
   - Create `netlify.toml` at the project root with the build command and correct publish directory.
   - If the app is effectively static (no server functions/routes), point publish to the static assets folder.
   - If SSR/server functions are needed, point publish to the Nitro output root and enable the Netlify functions config.
3. Adjust TanStack Start/Nitro preset if needed
   - If the build output is Cloudflare-shaped, add/update `vite.config.ts` to set the Nitro preset to `netlify` so Netlify receives the correct server-function and SSR artifacts.
4. Verify
   - Run `bun run build` again.
   - Confirm the publish directory exists and contains an `index.html` plus the expected assets.
   - Optionally deploy to Netlify from this branch to confirm the error is gone.

## Open question for the user
Do you need full SSR/server functions on Netlify, or is this a static marketing site where a pre-rendered/static export is enough? This determines whether we only fix the publish directory or also switch the Nitro preset to Netlify.
