# Contact section + working contact form

## What you get

- A new **Contact** page/section with a form: First name, Last name, Email, Message, and a Send button.
- The section is added to the bottom of the homepage (above the footer) and gets its own `/contact` route.
- "Contact" is added to the floating navigation bar, and the footer email link points at the same section.
- On submit, the message is emailed to hello@virtumindsadvisory.com, and the sender gets a short confirmation email.
- Success and error feedback shown inline (toast), with the form disabled while sending.

## What's needed from you

Sending real email requires a backend and a verified sender domain you own (e.g. `virtumindsadvisory.com`). I'll turn on the backend automatically, then walk you through the one-time domain setup — until DNS verification completes, form submissions are stored but emails won't deliver.

## Build steps

1. Enable the backend (Lovable Cloud).
2. Set up the sender domain for virtumindsadvisory.com (one-time DNS step on your side).
3. Create a `contact_submissions` table (first name, last name, email, message, created_at) with insert-only public access, so no message is ever lost even if email delivery is pending.
4. Build `src/components/site/Contact.tsx` — brand-styled form using existing navy/gold tokens, shadcn inputs, and zod validation (names max 100, valid email max 255, message max 2000, all trimmed and required).
5. Add a server route that validates input again server-side, stores the submission, then sends:
   - a notification email to hello@virtumindsadvisory.com with the message details,
   - a confirmation email to the sender.
6. Add `src/routes/contact.tsx` with its own SEO head (title, description, og tags), rendering nav + contact section + footer.
7. Render the Contact section at the bottom of the homepage above the footer.
8. Add a "Contact" link in `FloatingNav.tsx` between About and the Schedule button, and link the footer email to the contact section.

## Technical notes

- Form submits to a dedicated server route (not a generic send endpoint); validation with zod on both client and server; basic per-IP rate limiting to deter spam.
- Email templates are React Email components matching the site's navy/gold branding.
- No changes to existing sections other than the nav link and the homepage composition.
