# Add dual-focus tag line under hero subhead

Add a small tag line directly under the existing hero subhead to visually establish the two practice areas before the visitor reads the paragraph.

Text to add: "AI Strategy & Governance · Cybersecurity & Risk Advisory"

## Implementation

- Edit `src/components/site/Hero.tsx`.
- Insert a new element between the existing subhead paragraph (`<p>`) and the CTA button row.
- Use a small, subtle styling approach (e.g., uppercase tracking, gold or muted white color) to act as a visual tag line.
- Keep it a single line on desktop; allow graceful wrap on narrow viewports.

## Verification

- Build/typecheck passes.
- Preview shows the tag line immediately below the subhead paragraph and above the CTA buttons.
