# Verify the Netlify build publishes dist/client

## Current state (checked)
- `netlify.toml` sets command `bun run build`, publish `dist/client`, Node 22, and an SPA fallback redirect to `/index.html`.
- `vite.config.ts` sets the Nitro preset to `netlify-static` with output dir `dist` and public dir `dist/client`.
- There is no build output in the project right now (`dist/` does not exist), so nothing can be verified from disk. A build must be run to confirm.
- Known catch from earlier: inside the Lovable sandbox the config package forces the Cloudflare preset, so a plain local build may not reproduce what Netlify does.

## Verification steps
1. Run `bun run build` and read the Nitro preset line in the log.
2. Inspect the output: confirm `dist/client` exists and contains `index.html` plus `assets/`, `favicon.png`, `robots.txt`.
3. If the log shows `cloudflare-module` (sandbox override), re-run the build with the sandbox detection disabled (e.g. running the build with the sandbox env var unset) so the `netlify-static` preset actually applies, then re-check `dist/client/index.html`.
4. Confirm prerendered route pages exist for `/about` and `/services` (either as directories with `index.html` or covered by the SPA redirect in `netlify.toml`).
5. Serve `dist/client` locally and load `/`, `/about`, `/services` to confirm the pages render without a server.

## Outcome
- If `dist/client/index.html` is produced: report that the Netlify publish directory is correct and no further change is needed.
- If it is not produced: adjust the preset/output config (e.g. explicit Nitro prerender routes, or switch to the full `netlify` preset with a functions directory) and re-verify before reporting.

## Note
Verification requires running a build, which is a state-changing command, so it happens after you approve this plan.
