# UX Review — CoDi API Frontend

Date: 2026-02-08

---

## What Works Well

- **The value proposition is clear.** The homepage does a good job explaining what CoDi is and why someone would want this API (no commissions, instant payments, full traceability).
- **The Bite Size test key is excellent.** Being able to test the API immediately with one click is a huge win for developer trust.
- **Documentation is well-structured.** Getting Started → API Reference → Error Codes is a logical flow.
- **The enrollment wizard is simple.** 3 steps with a progress bar, easy to follow.
- **All in Spanish for the target audience.** Appropriate for Mexican developers.

---

## What Would Confuse a User

### 1. Folio terminology is confusing

The site uses "Folio CoDi" and "Folio IDC" without explaining the difference. In the Consulta form, users need to know which one to paste, but there's no tooltip or glossary. A first-time user would be lost.

**Fix:** Add a short glossary or inline tooltips explaining Folio CoDi vs Folio IDC. Consider a help icon next to the input field.

### 3. Hero section has too many CTAs

Three buttons — "Registrarme", "Ver Documentacion", "Probar API" — compete for attention. As a new visitor, it's unclear which one to click first. The primary action isn't obvious enough.

**Fix:** Make "Registrarme" the single dominant CTA. Demote the other two to text links or a secondary row.

### 4. Magic values like "0" are unintuitive

- "Referencia Numerica: use 0 if not applicable"
- "Vigencia: use 0 for unlimited"

These feel like internal conventions exposed to users.

**Fix:** Replace with checkboxes ("Sin referencia") or toggles ("Sin limite de vigencia") that auto-fill the 0 value.

### 5. JSON responses are overwhelming

When you generate a QR code, you get the QR image AND a full raw JSON dump. For a developer doing a quick test this is fine, but for anyone else it's intimidating.

**Fix:** Show a clean success summary by default. Add a collapsible "Ver respuesta completa" section for the raw JSON.

### 6. Pricing to Enrollment gap

The pricing section shows 4 tiers but doesn't explain how they connect to enrollment. Does the free tier require Banxico approval? Can I start using it immediately? The user journey from "I want to pay" to "I'm set up" isn't clear.

**Fix:** Add a brief explanation under each pricing tier about what's needed to get started. Link directly from each tier's CTA to the enrollment page with context.

### 7. Webhook tab breaks the pattern

The first 3 Playground tabs are interactive forms. The 4th (Webhook) is purely informational. This is jarring — a user would click it expecting a form and find a wall of text.

**Fix:** Either label it differently ("Guia Webhook" instead of just "Webhook"), move it to the documentation section, or add a visual indicator that it's informational.

### 8. Post-enrollment is a black hole

After submitting enrollment, the user gets a toast notification and a redirect to the homepage. No confirmation email explanation, no "what happens next" page, no way to check status. The user just submitted their INE and bank documents — they want reassurance.

**Fix:** Create a post-enrollment confirmation page that explains:
- What was submitted
- Expected timeline (7 days for Banxico approval)
- How they'll be contacted
- What to do in the meantime (test with Bite Size key)

### 9. No search in documentation

The docs have a sidebar with sections but no search. If a user is looking for something specific (like webhook retry behavior), they have to scan through all sections manually.

**Fix:** Add a search bar to the documentation sidebar. Even a simple client-side text search would help.

### 10. Contact is email-only with 24-48h response time

For a payment API, this feels insufficient. Developers hitting errors at 2am won't wait 48 hours.

**Fix:** Add a FAQ section for common questions. Consider linking to a community channel (Discord, GitHub Discussions) for peer support.

---

## Summary

**For a developer who already understands CoDi and Mexican banking:** the site is functional and gets the job done. The playground with the test key is genuinely useful.

**For a first-time visitor trying to understand what this is and how to get started:** the site creates friction. The journey from "what is this?" to "sign up" to "test it" to "go to production" isn't linear enough. The terminology assumes knowledge the user may not have, and critical actions (enrollment, pricing flow) are somewhat hidden.

The foundation is solid — it's a matter of smoothing out the user journey, not rebuilding anything.

---

## Priority Order for Implementation

1. Post-enrollment confirmation page (builds user trust)
2. Folio glossary / tooltips in Consulta form (reduces confusion)
3. Collapse JSON responses behind "Ver respuesta completa" (cleaner UX)
4. Replace magic "0" values with checkboxes/toggles (better form UX)
5. Simplify hero CTAs (clearer first impression)
6. Connect pricing tiers to enrollment flow (clearer user journey)
7. Relabel or move Webhook tab (consistent Playground pattern)
8. Add documentation search (developer productivity)
9. Add FAQ section (reduces support burden)
