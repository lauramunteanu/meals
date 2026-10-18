# Meal plan

A small phone-friendly page showing each day's meals, recipes for two, shopping lists with ticks, and notes.

## Files

- `index.html` is the app. It never needs changing.
- `plan.js` holds the current fortnight: days, recipes, shopping and notes.

## Put it online

1. Create a repo (for example `meals`) and upload both files to the root.
2. In the repo, go to Settings, then Pages, and deploy from the `main` branch, root folder.
3. The page appears at `https://<your-username>.github.io/meals/`.

## Update for the next fortnight

Things `plan.js` can set besides days, recipes, shopping and notes:

- `portions` at the top sets how many portions a cook night makes (default 4). A single dinner can override it, for example `{ r: "shawarma", cook: true, portions: 6 }`.
- `prep` on a recipe is what to do the night before, for example soaking chia. The day before that meal, the Day view shows it under "Tonight, for tomorrow".

Ask Claude for a new `plan.js`, then replace the old file in the repo. Shopping ticks are saved in your browser and reset automatically when the plan's `id` changes.
