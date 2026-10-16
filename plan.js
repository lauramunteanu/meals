// Meal plan data. To update the app, replace this whole file with a new plan.
// Quantities are for two people. kcal and protein are per person, per serving.
window.MEALPLAN = {
  id: "2026-10-17",
  title: "17 – 30 October",
  target: "About 1700 kcal and 90–100 g protein a day, each",

  notes: [
    { title: "Drinks", text: "Weekdays: water or non-alcoholic wine (20–35 kcal a glass, one or two fit). Weekends: half a bottle of wine each is about 300 kcal, so skip the snack and the breakfast toast on Saturday and Sunday." },
    { title: "Bigger appetite", text: "Cook the same pot. Add extra rice, pita, bread or rösti to the hungrier plate rather than taking more from the batch, or the lunches run out early." },
    { title: "Batch cooking", text: "Every 'cook' dinner makes 6 portions: dinner tonight plus lunches or dinners over the next two days. Box leftovers once cool." },
    { title: "Appliances", text: "Speedi for reheating leftovers (air fry 180°C, 8 min), crisping tofu and halloumi, rice, and the salmon. Nutribullet for sauces, whipped beans and the soup. Don't fill it more than halfway with hot liquid." },
    { title: "Beans", text: "Always simmered long, well seasoned and part-blended so the texture disappears." }
  ],

  recipes: {
    eggs: {
      name: "Spinach & feta scrambled eggs",
      meal: "breakfast",
      kcal: 420, protein: 28,
      ingredients: ["4 eggs", "2 handfuls frozen chopped spinach", "50 g feta (or goat's cheese)", "100 g skyr", "2 slices wholemeal bread", "A handful of cherry tomatoes"],
      steps: ["Warm the spinach in a pan until thawed and the water has cooked off.", "Whisk the eggs with the skyr, pour in and stir gently over low heat.", "Crumble in the feta just before the eggs set.", "Serve on toast with the tomatoes."],
      tip: "On wine days, skip the toast and add more tomatoes."
    },
    skyr: {
      name: "Skyr bowl",
      meal: "breakfast",
      kcal: 390, protein: 27,
      ingredients: ["400 g skyr", "60 g oats", "1 banana", "30 g walnuts", "Cinnamon"],
      steps: ["Split the skyr between two bowls.", "Top with oats, sliced banana, walnuts and cinnamon."]
    },
    chia: {
      name: "Chia pudding",
      meal: "breakfast",
      kcal: 330, protein: 34,
      ingredients: ["30 g chia seeds (15 g each, the label maximum)", "30 g oats", "300 ml soy milk", "2 scoops (60 g) whey protein", "160 g frozen berries"],
      steps: ["The night before, stir chia, oats, soy milk and the protein powder together in two jars.", "Leave in the fridge overnight.", "Top with the berries in the morning."],
      tip: "Don't skip the protein powder: it's where most of the protein comes from."
    },
    soup: {
      name: "Creamy mushroom soup with socca",
      meal: "main",
      kcal: 540, protein: 40,
      ingredients: [
        "Soup: the whole tray of mushrooms, sliced", "1 onion (2 if the tray is small), 2 garlic cloves", "1 tsp oil, thyme", "1 stock cube in 500 ml water", "Parmesan rind plus 30 g grated parmesan", "300 g skyr", "1 tsp Maizena (optional)",
        "Socca: 120 g chickpea flour, 240 ml water, 1 tsp cumin, salt", "1 tbsp herby oil from the feta jar", "40 g goat's cheese, black pepper"
      ],
      steps: [
        "Whisk the socca batter and leave it to rest 20 min.",
        "Fry onion and mushrooms in the oil until golden and the liquid has cooked off. Don't rush this.",
        "Add garlic and thyme for a minute, then the stock and parmesan rind. Simmer 15 min.",
        "Heat an oiled tray in the oven at 230°C, pour in the batter, bake about 12 min until golden.",
        "Remove the rind, cool the soup a few minutes, blend in the Nutribullet (batches, half full).",
        "Back in the pan, stir in skyr and parmesan off the heat. Thicken with Maizena in a splash of water if needed.",
        "Top the socca with goat's cheese and pepper, tear it into the soup."
      ]
    },
    shawarma: {
      name: "Shawarma traybake",
      meal: "main",
      kcal: 500, protein: 37,
      ingredients: ["Both chicken packs (bone-in)", "1 large tin chickpeas, drained and patted dry", "½ celeriac and ~500 g potatoes, small chunks", "1 courgette, 2 red onions, 1 red + 1 green pepper", "2 tbsp oil", "2 tsp cumin, 2 tsp paprika, 1 tsp ground coriander, ½ tsp cinnamon, 3 garlic cloves, salt, juice of 1 lemon", "To serve each night: 1 pita (half each), 120 g skyr with garlic and lemon"],
      steps: ["Toss everything in the oil and spices.", "Spread chicken, celeriac and potatoes over two trays, roast at 200°C on crisp.", "After 15 min add chickpeas, courgette, peppers and onions.", "Roast 25 min more, until the chicken is cooked through and chickpeas crunch.", "Pull off the skin to serve. Take leftover chicken off the bone before storing."],
      tip: "Reheat leftovers in the Speedi on air fry, 180°C for 8 min. Blend the garlic skyr in the Nutribullet."
    },
    dal: {
      name: "Red lentil coconut dal",
      meal: "main",
      kcal: 550, protein: 30,
      ingredients: ["2 onions, 3 garlic cloves, a thumb of ginger", "1 tbsp oil", "2 tsp curry powder (or cumin, turmeric, coriander + pinch of chilli)", "3 tbsp double-concentrate tomato paste", "360 g red lentils", "Both 200 ml cartons coconut milk", "400 g frozen chopped spinach", "1 stock cube + about 950 ml water", "Juice of ½ lemon, salt", "To serve: 35 g basmati (dry) and 50 g skyr per person"],
      steps: ["Soften the onions in the oil, 5 min.", "Add garlic, ginger and spices for 1 min.", "Squeeze in the tomato paste and fry 2 min until it darkens.", "Add lentils, coconut milk, spinach, stock cube and water.", "Simmer about 25 min, stirring, until thick and creamy.", "Finish with lemon and salt. Cook rice in the Speedi or a pan."],
      tip: "Opened coconut cartons only keep 24 hours, so use both."
    },
    tofu: {
      name: "Gochujang tofu bowls",
      meal: "main",
      kcal: 520, protein: 30,
      ingredients: ["3 boxes tofu (750 g)", "1 tbsp soy sauce + 2 tbsp Maizena", "Glaze: 4 tbsp gochujang, 2 tbsp soy, 2 tsp honey, 2 tsp sesame oil", "300 g rice (dry, for all 6 portions)", "360 g frozen edamame", "Broccoli", "Radishes and cucumber, quick-pickled in vinegar, salt and a pinch of sugar", "Spring onions or chives"],
      steps: ["Press the tofu in kitchen roll under something heavy, 20 min.", "Cube, toss with the soy, then the Maizena until dry and dusty.", "Speedi Meals mode: rice and water below, tofu on the crisper tray above, 15–20 min. Or oven crisp at 200°C, 25 min.", "Blend the glaze in the Nutribullet, bubble it in a pan, toss in the hot tofu.", "Serve with edamame, broccoli and the pickles."],
      tip: "Only glaze tonight's tofu. Store leftover tofu and sauce apart, toss just before lunch."
    },
    beans_tuna: {
      name: "Whipped white beans & tuna on toast",
      meal: "main",
      kcal: 480, protein: 39,
      ingredients: ["1 tin white beans (250 g)", "Lemon, 1 garlic clove, ½ tsp cumin, 2 tbsp olive oil", "2 tins tuna", "1 pita (half each) or 2 slices toast", "Cherry tomatoes, chopped cornichons, parsley, chilli oil"],
      steps: ["Blend the beans with lemon, garlic, cumin, oil and a splash of water until smooth like hummus.", "Spread thickly on the toast or pita.", "Top with tuna, tomatoes, cornichons, parsley and chilli oil."],
      tip: "If the stinco's date checks out, it can replace this dinner: 20 min at 200°C, with dill-skyr and a big salad."
    },
    chilli: {
      name: "Chipotle chilli",
      meal: "main",
      kcal: 520, protein: 38,
      ingredients: ["500 g lean beef mince", "1 onion, 1 pepper, 3 garlic cloves", "The 2 bean tins from the cupboard + 1 large tin kidney beans", "600 g passata (Tomacouli)", "1–2 chipotles in adobo", "Cumin, smoked paprika", "240 g rice (dry, all portions) or a wholewheat wrap each", "Skyr and a little cheese to serve"],
      steps: ["Brown the mince with onion, pepper and garlic.", "Add beans, passata, chipotles and spices.", "Blitz a third of the beans with a ladle of sauce in the Nutribullet, stir back in.", "Simmer 40 min. Cook rice in the Speedi.", "Freeze 2 portions for Thursday 29th."]
    },
    halloumi: {
      name: "Halloumi on creamy white beans",
      meal: "main",
      kcal: 520, protein: 30,
      ingredients: ["2 tins white beans (250 g each)", "About 400 g passata (U purée de tomates)", "Garlic, oregano, smoked paprika, olive oil or feta oil", "1 pack halloumi", "Garden rocket with lemon", "Bread to mop"],
      steps: ["Simmer the beans in passata with garlic, oregano, paprika and oil, 25–30 min.", "Blitz half the pan in the Nutribullet, stir back in.", "Crisp the halloumi in the Speedi, air fry 200°C, about 8 min.", "Lay halloumi on the beans, pile rocket on top."]
    },
    shakshuka: {
      name: "Spinach & feta shakshuka",
      meal: "main",
      kcal: 500, protein: 32,
      ingredients: ["1 onion, 1 pepper", "1 tsp harissa, 1 tsp cumin", "400 g passata", "A handful of frozen spinach", "6 eggs", "Feta or grated parmesan", "Toast"],
      steps: ["Soften onion and pepper with harissa and cumin.", "Add passata and spinach, simmer 5 min.", "Crack in the eggs, cover until set.", "Top with feta or parmesan, serve with toast."]
    },
    salmon: {
      name: "Salmon, crispy rösti & broccoli",
      meal: "main",
      kcal: 550, protein: 37,
      ingredients: ["4 salmon fillets", "750 g rösti pack", "2 broccoli", "Dill-skyr sauce: 150 g skyr, dill, lemon"],
      steps: ["Fry the rösti in a little oil until golden.", "Speedi air fry salmon and broccoli at 180°C, 10–12 min.", "Blend the sauce. Keep 2 fillets for Sunday lunch."]
    },
    salmon_bowl: {
      name: "Salmon rice bowl",
      meal: "main",
      kcal: 560, protein: 35,
      ingredients: ["2 leftover salmon fillets, flaked", "100 g rice (dry)", "Cucumber, quick-pickled carrot and radish", "100 g edamame", "Soy, sesame oil, chilli oil"],
      steps: ["Cook the rice.", "Flake the cold salmon over the warm rice with the vegetables and edamame.", "Dress with soy, sesame oil and chilli oil."]
    },
    mujaddara: {
      name: "Mujaddara",
      meal: "main",
      kcal: 515, protein: 30,
      ingredients: ["360 g brown or green lentils", "180 g basmati", "5–6 onions, sliced", "3 tbsp oil", "Cumin, allspice", "Salad: cucumber, tomato, mint", "Garlicky skyr, 120 g each"],
      steps: ["Slowly brown the onions in the oil, about 25 min.", "Cook lentils and rice with the spices until the lentils are soft and starting to break down.", "Top with the onions. Serve with the salad and skyr."]
    },
    harissa: {
      name: "Harissa chicken couscous",
      meal: "main",
      kcal: 490, protein: 40,
      ingredients: ["720 g chicken breast", "Harissa + skyr marinade", "2 courgettes, 2 peppers, 2 red onions", "300 g couscous", "1 large tin chickpeas", "Garden spinach and rocket, mint, lemon", "Optional: whipped feta (feta + skyr blended)"],
      steps: ["Marinate the chicken in harissa and skyr.", "Roast with the vegetables at 200°C, about 25 min.", "Cook the couscous, stir through chickpeas, leaves, mint and lemon so the leaves wilt."],
      tip: "Whipped feta on top brings it to about 570 kcal."
    },
    noodles: {
      name: "Peanut noodles",
      meal: "main",
      kcal: 570, protein: 31,
      ingredients: ["330 g rice vermicelli", "750 g tofu (pressed, Maizena-crisped) or 500 g chicken thighs", "360 g edamame", "Broccoli, carrot, cucumber, spring onion", "Sauce: 6 tbsp peanut butter, 6 tbsp soy, lime, garlic, ginger, chilli oil, hot water"],
      steps: ["Blend the sauce in the Nutribullet until silky.", "Crisp the tofu or cook the chicken in the Speedi.", "Cook the noodles, toss everything together.", "Good cold the next day."]
    },
    buckwheat: {
      name: "Buckwheat, mushrooms & eggs",
      meal: "main",
      kcal: 460, protein: 30,
      ingredients: ["120 g buckwheat", "300 g mushrooms, 1 onion", "Dill", "4 eggs", "120 g skyr with garlic", "Grated parmesan"],
      steps: ["Cook the buckwheat.", "Fry mushrooms and onion with dill.", "Top with fried eggs, garlicky skyr and parmesan."]
    },
    snack: {
      name: "Snack",
      meal: "snack",
      kcal: 230, protein: 10,
      ingredients: ["Apple + 1 tbsp peanut butter", "150 g skyr + walnuts + honey", "Edamame with chilli oil and salt", "Veg sticks + hummus"],
      steps: ["Pick one a day on weekdays."]
    }
  },

  days: [
    { date: "2026-10-17", breakfast: "eggs", lunch: { r: "soup", cook: true }, dinner: { r: "shawarma", cook: true }, snack: false, note: "Wine night: no snack, no toast." },
    { date: "2026-10-18", breakfast: "eggs", lunch: { r: "shawarma", leftover: true }, dinner: { r: "dal", cook: true }, snack: false, note: "Wine night: no snack, no toast." },
    { date: "2026-10-19", breakfast: "skyr", lunch: { r: "dal", leftover: true }, dinner: { r: "shawarma", leftover: true }, snack: true },
    { date: "2026-10-20", breakfast: "chia", lunch: { r: "dal", leftover: true }, dinner: { r: "tofu", cook: true }, snack: true, note: "Make Thursday's chia tonight." },
    { date: "2026-10-21", breakfast: "skyr", lunch: { r: "tofu", leftover: true }, dinner: { r: "beans_tuna" }, snack: true },
    { date: "2026-10-22", breakfast: "chia", lunch: { r: "tofu", leftover: true }, dinner: { r: "chilli", cook: true }, snack: true },
    { date: "2026-10-23", breakfast: "skyr", lunch: { r: "chilli", leftover: true }, dinner: { r: "halloumi" }, snack: true, note: "Place the week 2 order today." },
    { date: "2026-10-24", breakfast: "eggs", lunch: { r: "shakshuka" }, dinner: { r: "salmon", cook: true }, snack: false, note: "Wine night: no snack, no toast." },
    { date: "2026-10-25", breakfast: "eggs", lunch: { r: "salmon_bowl", leftover: true }, dinner: { r: "mujaddara", cook: true }, snack: false, note: "Wine night: no snack, no toast." },
    { date: "2026-10-26", breakfast: "skyr", lunch: { r: "mujaddara", leftover: true }, dinner: { r: "harissa", cook: true }, snack: true },
    { date: "2026-10-27", breakfast: "chia", lunch: { r: "harissa", leftover: true }, dinner: { r: "mujaddara", leftover: true }, snack: true },
    { date: "2026-10-28", breakfast: "skyr", lunch: { r: "harissa", leftover: true }, dinner: { r: "noodles", cook: true }, snack: true },
    { date: "2026-10-29", breakfast: "chia", lunch: { r: "noodles", leftover: true }, dinner: { r: "chilli", leftover: true, note: "From the freezer" }, snack: true },
    { date: "2026-10-30", breakfast: "skyr", lunch: { r: "noodles", leftover: true }, dinner: { r: "buckwheat" }, snack: true }
  ],

  shopping: [
    {
      title: "Use first",
      items: [
        { name: "Mushrooms", qty: "Saturday's soup" },
        { name: "Courgette", qty: "Saturday's shawarma" },
        { name: "Sheep's feta jar", qty: "This week, after a smell check" },
        { name: "Opened halloumi box", qty: "Check the date" },
        { name: "Boulangère kebab pitas", qty: "Before 31/10" },
        { name: "Stinco", qty: "Check the date and seal" }
      ]
    },
    {
      title: "Buy in person, week 1",
      items: [
        { name: "Frozen edamame", qty: "1 kg, before Tuesday" },
        { name: "Spring onions (oignons nouveaux) or frozen chives", qty: "Before Tuesday" },
        { name: "White beans", qty: "2 × 250 g tins, before Friday" },
        { name: "Pink Lady apples", qty: "For snacks" }
      ]
    },
    {
      title: "Week 2 order (around Fri 23)",
      items: [
        { name: "Salmon fillets", qty: "4 (about 500 g)" },
        { name: "Chicken breast", qty: "720 g" },
        { name: "Tofu", qty: "3 boxes (or 500 g chicken thighs)" },
        { name: "Skyr", qty: "About 3 kg" },
        { name: "Eggs", qty: "20" },
        { name: "Mushrooms", qty: "300 g" },
        { name: "Broccoli", qty: "3" },
        { name: "Courgettes", qty: "2" },
        { name: "Peppers", qty: "2" },
        { name: "Red onions", qty: "2" },
        { name: "Cucumbers", qty: "3" },
        { name: "Carrots", qty: "If the bag's run out" },
        { name: "Spring onions", qty: "1 bunch" },
        { name: "Limes", qty: "2" },
        { name: "Lemons", qty: "2" },
        { name: "Dill and mint", qty: "1 each" },
        { name: "Oats", qty: "500 g" },
        { name: "Apples and bananas", qty: "For snacks" }
      ]
    }
  ]
};
