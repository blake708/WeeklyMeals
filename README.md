# WeeklyMeals

The family kitchen site, served by Cloudflare Pages. Every push to `main` deploys automatically.

## Files

- **index.html** — the machinery: cook mode, the timer rail, the screen wake lock, and shopping-list storage. Change it only for a deliberate design change.
- **week.js** — this week's meals, breakfasts, desserts, prep tasks, and shopping list. This is the only file that changes each week.

## Weekly update

1. Replace the `WEEK` object in `week.js` with the new week.
2. Bump `WEEK.id` to that week's Monday (ISO date). It is the localStorage key, so a new id starts a fresh shopping list.
3. Check that the JavaScript parses and each meal's `pct` values sum to about 100.
4. Commit and push to `main`. Cloudflare redeploys in about a minute.

## Cloudflare Pages settings

- Framework preset: None
- Build command: (blank)
- Build output directory: `/`
