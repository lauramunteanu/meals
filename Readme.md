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

Ask Claude for a new `plan.js`, then replace the old file in the repo. Shopping ticks are saved in your browser and reset automatically when the plan's `id` changes.
