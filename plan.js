// Meal plan data. To update the app, replace this whole file with a new plan.
// Quantities are for two people. kcal and protein are per person, per serving.
window.MEALPLAN = {
  id: "2026-10-18",
  title: "17 – 30 October",
  portions: 4,
  target: "About 1700 kcal and 90–100 g protein a day, each",

  notes: [
    { title: "Batches of 4", text: "Every 'cook' dinner makes 4 portions: dinner tonight plus one more meal for two, usually lunch the next day. Box the leftovers once cool." },
    { title: "Salt", text: "Meat: 1 tsp fine salt per 500 g, sprinkled on at least 30 min before cooking. Roast veg: ½ tsp per 500 g. Rice, couscous, buckwheat: ½ tsp in the water for two. Eggs: ⅛ tsp per 2 eggs, whisked in. Soups, dal and sauces: stock cubes and cheeses are already salty, so taste at the end and add ¼ tsp at a time. Every recipe lists its own amounts." },
    { title: "Garlic sauces", text: "No raw garlic in the Nutribullet. Use roasted garlic (a whole head in foil, 30–40 min at 200°C in the oven or Speedi, keeps a week in the fridge), a grated clove fried 1 min in 1 tsp oil and cooled, or ¼ tsp garlic powder per 120 g skyr. Stir the sauce by hand." },
    { title: "Drinks", text: "Weekdays: water or non-alcoholic wine (20–35 kcal a glass, one or two fit). Weekends: half a bottle of wine each is about 300 kcal, so skip the snack on Saturday and Sunday." },
    { title: "Bigger appetite", text: "Cook the same pot. Add extra rice, pita, bread or rösti to the hungrier plate rather than taking more from the batch, or the second meal runs short." },
    { title: "Appliances", text: "Speedi for reheating leftovers (air fry 180°C, 8 min), crisping tofu, halloumi and meatballs, rice, and the salmon. Nutribullet for cooked sauces, whipped beans and soups. Don't fill it more than halfway with hot liquid." },
    { title: "Beans", text: "Always simmered long, well seasoned and part-blended so the texture disappears." }
  ],

  recipes: {
    eggs: {
      name: "Spinach & feta scrambled eggs",
      meal: "breakfast",
      kcal: 350, protein: 31,
      ingredients: ["6 eggs", "90 g frozen chopped spinach (3 sets of 30 g)", "40 g feta", "1 tsp butter or oil", "Generous ¼ tsp salt, plus a pinch for the spinach", "Black pepper", "½ tsp smoked paprika, za'atar or sumac", "Chilli flakes, chives or coriander", "150 g skyr on the side", "Toast only on non-wine days"],
      steps: ["Cook the spinach in a dry pan with a pinch of salt until all the water has gone. Tip onto a plate.", "Whisk the eggs with ¼ tsp salt and pepper.", "Melt the butter over low heat and cook the eggs slowly, stirring, until just set.", "Fold in the spinach and crumbled feta off the heat.", "Finish with paprika or za'atar, chilli flakes and herbs. Serve the skyr on the side with chilli flakes."]
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
      prep: "Stir the chia, oats, soy milk and protein powder together in two jars, then put them in the fridge.",
      steps: ["The night before, stir chia, oats, soy milk and the protein powder together in two jars.", "Leave in the fridge overnight.", "Top with the berries in the morning."],
      tip: "Don't skip the protein powder: it's where most of the protein comes from."
    },
    shake: {
      name: "Berry protein shake",
      meal: "breakfast",
      kcal: 250, protein: 28,
      ingredients: ["60 g whey protein", "150 g banana", "300 ml unsweetened almond milk", "100 ml soy milk", "150 g frozen red fruits"],
      steps: ["Blend everything in the Nutribullet and split between two glasses."],
      tip: "A lighter, fresher breakfast. Leaves room for a weekday snack."
    },
    shake_plate: {
      name: "Shake & snack plate",
      meal: "main",
      kcal: 615, protein: 28,
      ingredients: ["Half a shared shake: 20 g whey, 75 g banana, 150 ml almond milk", "½ pita", "45 g hummus", "6 cherry tomatoes", "About 12 g walnuts", "1 apple rose"],
      steps: ["An improvised lunch, logged as eaten."]
    },
    soup: {
      name: "Creamy mushroom soup with socca",
      meal: "main",
      kcal: 540, protein: 40,
      ingredients: [
        "Soup: the whole tray of mushrooms, sliced", "1 onion (2 if the tray is small), 2 garlic cloves", "1 tsp oil, thyme", "1 stock cube in 500 ml water", "Parmesan rind plus 30 g grated parmesan", "300 g skyr", "Salt: taste at the end, about ¼ tsp", "1 tsp Maizena (optional)",
        "Socca: 120 g chickpea flour, 240 ml water, 1 tsp cumin, ½ tsp salt", "1 tbsp herby oil from the feta jar", "40 g goat's cheese, black pepper"
      ],
      steps: [
        "Whisk the socca batter with the salt and leave it to rest 20 min.",
        "Fry onion and mushrooms in the oil until golden and the liquid has cooked off, 10–12 min.",
        "Add garlic and thyme for a minute, then the stock and parmesan rind. Simmer 15 min.",
        "Heat an oiled tray in the oven at 230°C, pour in the batter, bake about 12 min until golden.",
        "Remove the rind, cool the soup a few minutes, blend in the Nutribullet (batches, half full).",
        "Back in the pan, stir in skyr and parmesan off the heat. Taste, then add salt ¼ tsp at a time.",
        "Top the socca with goat's cheese and pepper, tear it into the soup."
      ]
    },
    shawarma: {
      name: "Shawarma traybake",
      meal: "main",
      kcal: 470, protein: 36,
      ingredients: ["About 700 g bone-in chicken thighs (or 500 g boneless)", "1½ tsp salt for the chicken (1 tsp per 500 g)", "400 g potatoes and 2 carrots, small chunks", "½ large tin chickpeas, drained and dried", "1 red onion, 1 pepper", "1½ tbsp oil, ½ tsp salt for the veg", "2 tsp cumin, 2 tsp paprika, 1 tsp ground coriander, ½ tsp cinnamon, juice of 1 lemon", "Sauce: 120 g skyr, 2 cloves roasted garlic (roast them on the tray), lemon, pinch of salt", "½ kebab bread each"],
      steps: ["At least 30 min ahead, rub the chicken with the salt and half the spices.", "Toss potatoes and carrots with half the oil, the veg salt and the rest of the spices.", "Fan oven 200°C: chicken, potatoes and carrots in one layer on the lined tray, plus 2 garlic cloves in foil.", "After 15 min add chickpeas, onion and pepper in the gaps. Roast 25 min more.", "Squeeze the roasted garlic into the skyr with lemon and salt, stir by hand.", "Pull off the skin to serve."],
      tip: "Saturday's batch made 6 portions; the last 4 cover Monday dinner and Tuesday lunch. Reheat in the Speedi with a pinch of salt and a squeeze of lemon."
    },
    dal: {
      name: "Red lentil coconut dal",
      meal: "main",
      kcal: 500, protein: 30,
      ingredients: ["1 onion, 2 garlic cloves, a small thumb of ginger", "2 tsp oil", "1½ tsp curry powder", "2 tbsp double-concentrate tomato paste", "240 g red lentils", "1 carton (200 ml) coconut milk", "270 g frozen spinach (9 sets of 30 g)", "1 stock cube + 750 ml water", "Juice of ½ lemon", "Salt: taste at the end, usually ¼–½ tsp", "140 g basmati (dry) cooked with ½ tsp salt", "Skyr to serve"],
      steps: ["Soften the onion in the oil, 5 min.", "Add garlic, ginger and spices for 1 min.", "Squeeze in the tomato paste and fry 2 min until it darkens.", "Add lentils, coconut milk, spinach, stock cube and water.", "Simmer about 25 min, stirring, until thick and creamy.", "Finish with lemon, then taste and add salt ¼ tsp at a time.", "Cook the rice in the Speedi or a pan."],
      tip: "Keep the second coconut carton sealed for another day."
    },
    tofu: {
      name: "Gochujang tofu bowls",
      meal: "main",
      kcal: 470, protein: 28,
      ingredients: ["2 boxes tofu (500 g)", "1 tbsp soy sauce + 2 tbsp Maizena", "Glaze: 3 tbsp gochujang, 1 tbsp soy, 2 tsp honey, 2 tsp sesame oil, 1 tsp vinegar", "160 g rice (dry) cooked with ½ tsp salt", "240 g frozen edamame, boiled with ½ tsp salt", "1 broccoli", "Pickles: radishes and cucumber in 3 tbsp vinegar, ½ tsp salt, 1 tsp sugar", "Spring onions or chives"],
      steps: ["Press the tofu in kitchen roll under something heavy, 20 min.", "Make the pickles and leave them while you cook.", "Cube the tofu, toss with the soy, then the Maizena until dry and dusty.", "Speedi Meals mode: rice and water below, tofu on the crisper tray above, 15–20 min. Or oven crisp at 200°C, 25 min.", "Bubble the glaze in a pan, toss in the hot tofu.", "Serve with edamame, broccoli and the pickles."],
      tip: "Glaze only tonight's tofu. Store the rest and the sauce apart, toss just before lunch."
    },
    beans_tuna: {
      name: "Whipped white beans & tuna on toast",
      meal: "main",
      kcal: 480, protein: 39,
      ingredients: ["1 tin white beans (250 g)", "Juice of ½ lemon, ¼ tsp garlic powder (or 2 cloves roasted garlic), ½ tsp cumin, 2 tbsp olive oil, ¼ tsp salt", "2 tins tuna", "1 pita (half each) or 2 slices toast", "Cherry tomatoes with a pinch of salt, chopped cornichons, parsley, chilli oil"],
      steps: ["Blend the beans with lemon, garlic powder, cumin, oil, salt and a splash of water until smooth like hummus. Taste for salt.", "Spread thickly on the toast or pita.", "Top with tuna, salted tomatoes, cornichons, parsley and chilli oil."],
      tip: "If the stinco's date checks out, it can replace this dinner: 20 min at 200°C, with dill-skyr and a big salad."
    },
    egg_wrap: {
      name: "Egg, spinach & feta wraps",
      meal: "main",
      kcal: 445, protein: 27,
      ingredients: ["2 wholewheat tortillas", "4 eggs whisked with ¼ tsp salt", "60 g frozen spinach (2 sets)", "30 g feta", "½ tsp smoked paprika", "120 g skyr mixed with ½ tsp harissa and a pinch of salt", "Cherry tomatoes"],
      steps: ["Cook the spinach in a dry pan until the water has gone. Push to one side.", "Scramble the eggs in the same pan, fold in spinach and feta off the heat.", "Warm the tortillas, spread with harissa skyr, fill with eggs and tomatoes, sprinkle paprika, roll up."]
    },
    chilli: {
      name: "Chipotle chilli",
      meal: "main",
      kcal: 480, protein: 36,
      ingredients: ["500 g lean beef mince", "¾ tsp salt for the mince", "1 onion, 1 pepper, 2 garlic cloves", "The 2 bean tins from the cupboard (already seasoned)", "400 g passata", "1–2 chipotles in adobo", "1 tsp cumin, 1 tsp smoked paprika", "Salt at the end: taste first, maybe ¼ tsp", "140 g rice (dry) cooked with ½ tsp salt, or a wrap each", "Skyr and a little cheese to serve"],
      steps: ["Brown the mince with its salt, then add onion, pepper and garlic for 5 min.", "Add beans, passata, chipotles and spices.", "Blitz a third of the beans with a ladle of the cooked sauce in the Nutribullet, stir back in.", "Simmer 40 min. Taste for salt. Cook rice in the Speedi."],
      tip: "The big kidney bean tin isn't needed now. Keep it for another chilli."
    },
    halloumi: {
      name: "Halloumi on creamy white beans",
      meal: "main",
      kcal: 490, protein: 28,
      ingredients: ["1½ tins white beans (375 g)", "300 g passata (U purée de tomates)", "2 garlic cloves, sliced", "1 tbsp olive oil or feta oil", "1 tsp oregano, 1 tsp smoked paprika", "Salt: ¼ tsp, halloumi is salty", "120 g halloumi (about half a pack)", "Garden rocket with lemon and a pinch of salt"],
      steps: ["Cook the garlic gently in the oil for 1 min, add passata, beans, oregano, paprika and salt.", "Simmer 25–30 min.", "Blitz half the pan in the Nutribullet, stir back in. Taste for salt.", "Crisp the halloumi in the Speedi, air fry 200°C, about 8 min.", "Lay halloumi on the beans, pile rocket on top."],
      tip: "Leftover half tin of beans goes into Thursday 29th's salad."
    },
    shakshuka: {
      name: "Spinach & feta shakshuka",
      meal: "main",
      kcal: 495, protein: 27,
      ingredients: ["1 onion, 1 pepper", "1 tsp oil", "1 tsp harissa, 1 tsp cumin", "400 g passata", "60 g frozen spinach", "6 eggs", "¼–½ tsp salt for the sauce, a pinch on the eggs", "30 g feta or grated parmesan", "1 slice toast each"],
      steps: ["Soften onion and pepper in the oil with harissa and cumin.", "Add passata, spinach and salt, simmer 5 min. Taste.", "Make 6 wells, crack in the eggs, pinch of salt on each, cover until set.", "Top with feta or parmesan, serve with toast."]
    },
    salmon: {
      name: "Salmon, crispy rösti & broccoli",
      meal: "main",
      kcal: 520, protein: 38,
      ingredients: ["4 salmon fillets (2 for tonight, 2 for Sunday lunch)", "½ tsp salt and lemon for the fish", "Half the 750 g rösti pack (freeze the rest)", "1 broccoli, 1 tsp oil, ¼ tsp salt", "Dill sauce: 150 g skyr, dill, lemon, ¼ tsp salt, ¼ tsp garlic powder"],
      steps: ["Salt the salmon 15 min ahead.", "Fry the rösti in a little oil until golden.", "Speedi air fry salmon and broccoli (tossed in oil and salt) at 180°C, 10–12 min.", "Stir the sauce by hand. Keep 2 fillets for Sunday."]
    },
    salmon_bowl: {
      name: "Salmon rice bowl",
      meal: "main",
      kcal: 500, protein: 34,
      ingredients: ["2 leftover salmon fillets, flaked", "60 g rice (dry) cooked with ¼ tsp salt", "Cucumber, quick-pickled carrot and radish (vinegar, pinch of salt, pinch of sugar)", "100 g edamame", "1 tbsp soy, 1 tsp sesame oil, chilli oil, lime"],
      steps: ["Cook the rice and quick-pickle the veg.", "Flake the cold salmon over the warm rice with the vegetables and edamame.", "Dress with soy, sesame oil, chilli oil and lime."]
    },
    mujaddara: {
      name: "Mujaddara",
      meal: "main",
      kcal: 475, protein: 28,
      ingredients: ["240 g brown or green lentils", "120 g basmati", "3 onions, sliced", "2 tbsp oil", "1 tsp cumin, ½ tsp allspice", "¾ tsp salt in the cooking water, pinch on the onions", "Salad: cucumber, tomato, mint, lemon, ¼ tsp salt", "Sauce: 400 g skyr, cooked or roasted garlic, lemon, mint, ¼ tsp salt"],
      steps: ["Slowly brown the onions in the oil with a pinch of salt, about 25 min.", "Cook lentils and rice with the spices and salt until the lentils are soft and starting to break down.", "Top with the onions. Serve with the salad and the sauce, stirred by hand."]
    },
    harissa: {
      name: "Harissa chicken couscous",
      meal: "main",
      kcal: 440, protein: 38,
      ingredients: ["480 g chicken breast", "1 tsp salt for the chicken", "Marinade: 1 tbsp harissa, 2 tbsp skyr", "1 courgette, 1 pepper, 1 red onion, 1 tbsp oil, ¼ tsp salt", "160 g couscous with ¼ tsp salt and boiling water", "½ large tin chickpeas (keep the other half for Thursday)", "Garden spinach and rocket, mint, lemon", "Optional: whipped feta (feta + skyr blended)"],
      steps: ["Salt the chicken and coat in the marinade, at least 30 min.", "Roast with the vegetables (tossed in oil and salt) at 200°C fan, about 25 min.", "Pour boiling salted water over the couscous, cover 5 min, fluff.", "Stir through chickpeas, leaves, mint and lemon so the leaves wilt."],
      tip: "Whipped feta on top adds about 80 kcal."
    },
    noodles: {
      name: "Peanut noodles",
      meal: "main",
      kcal: 505, protein: 28,
      ingredients: ["160 g rice vermicelli", "2 boxes tofu (500 g), pressed and Maizena-crisped, or 500 g chicken thighs with ½ tsp salt", "240 g edamame", "1 broccoli, 1 carrot, ½ cucumber, spring onion", "Sauce: 3 tbsp peanut butter, 3 tbsp soy, juice of 1 lime, 1 tsp honey, ½ tsp garlic powder, 1 tsp grated ginger, chilli oil, hot water"],
      steps: ["Blend the sauce in the Nutribullet until silky. Taste: the soy should salt it, add more soy if flat.", "Crisp the tofu or cook the chicken in the Speedi.", "Cook the noodles, toss everything together.", "Good cold the next day."]
    },
    buckwheat: {
      name: "Buckwheat, mushrooms & eggs",
      meal: "main",
      kcal: 470, protein: 33,
      ingredients: ["100 g buckwheat cooked with ½ tsp salt", "300 g mushrooms, 1 onion, 1 tsp oil, ¼ tsp salt", "Dill", "4 eggs, pinch of salt each", "120 g skyr with ¼ tsp garlic powder and a pinch of salt", "20 g grated parmesan"],
      steps: ["Cook the buckwheat.", "Fry mushrooms and onion with their salt until golden, add dill.", "Fry the eggs.", "Serve buckwheat topped with mushrooms, eggs, the skyr sauce and parmesan."]
    },
    chickpea_salad: {
      name: "Chickpea, tuna & feta salad",
      meal: "main",
      kcal: 420, protein: 28,
      ingredients: ["½ large tin chickpeas (from Monday) plus any leftover white beans", "1 tin tuna", "60 g feta", "Cherry tomatoes, ½ cucumber, a little red onion, parsley or mint", "1 tbsp olive oil, juice of ½ lemon, ¼ tsp salt", "½ tsp za'atar or sumac"],
      steps: ["Toss everything together.", "Taste: feta is salty, so add the salt last."],
      tip: "Add half a pita each if you want it more filling (+100 kcal)."
    },
    meatballs: {
      name: "Chicken meatballs in tomato sauce with pasta",
      meal: "main",
      kcal: 465, protein: 34,
      ingredients: ["400 g chicken or turkey mince", "1 egg, 30 g breadcrumbs, 20 g grated parmesan", "½ tsp garlic powder, 1 tsp dried oregano, ¾ tsp salt, pepper", "Sauce: 1 onion, 1 tsp oil, 500 g passata, ¼ tsp salt, pinch of sugar, basil", "240 g pasta", "Pasta water: about 2.5 L with 1 tbsp salt"],
      steps: ["Mix the mince with egg, breadcrumbs, parmesan, garlic powder, oregano and salt. Roll into about 16 balls.", "Air fry in the Speedi at 200°C, 10–12 min.", "Meanwhile soften the onion, add passata, salt and sugar, simmer 10 min. Taste.", "Add the meatballs to the sauce for 5 min.", "Cook the pasta in the salted water, serve with the meatballs and basil."]
    },
    halloumi_pita: {
      name: "Halloumi & roast veg pita",
      meal: "main",
      kcal: 420, protein: 28,
      ingredients: ["120 g halloumi (the second pack, check its date)", "1 pepper, 1 red onion, cherry tomatoes", "1 tsp oil, ¼ tsp salt, smoked paprika", "1 kebab bread or pita, halved", "Sauce: 160 g skyr, mint, lemon, pinch of salt"],
      steps: ["Air fry the veg with oil, salt and paprika at 200°C, 12 min.", "Add the sliced halloumi for the last 8 min.", "Warm the bread, fill with veg, halloumi and the mint skyr."],
      tip: "If the halloumi is past its date, swap in 2 eggs each."
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
    { date: "2026-10-17", breakfast: "eggs", lunch: { r: "shake_plate" }, dinner: { r: "shawarma", cook: true, portions: 6 }, snack: false, note: "Logged as eaten." },
    { date: "2026-10-18", breakfast: "shake", lunch: { r: "soup" }, dinner: { r: "dal", cook: true }, snack: false, note: "Wine night: no snack." },
    { date: "2026-10-19", breakfast: "skyr", lunch: { r: "dal", leftover: true }, dinner: { r: "shawarma", leftover: true }, snack: true },
    { date: "2026-10-20", breakfast: "chia", lunch: { r: "shawarma", leftover: true, note: "Last of the batch" }, dinner: { r: "tofu", cook: true }, snack: true },
    { date: "2026-10-21", breakfast: "skyr", lunch: { r: "tofu", leftover: true }, dinner: { r: "beans_tuna" }, snack: true },
    { date: "2026-10-22", breakfast: "chia", lunch: { r: "egg_wrap" }, dinner: { r: "chilli", cook: true }, snack: true },
    { date: "2026-10-23", breakfast: "skyr", lunch: { r: "chilli", leftover: true }, dinner: { r: "halloumi" }, snack: true, note: "Place the week 2 order today." },
    { date: "2026-10-24", breakfast: "eggs", lunch: { r: "shakshuka" }, dinner: { r: "salmon", cook: true }, snack: false, note: "Wine night: no snack." },
    { date: "2026-10-25", breakfast: "shake", lunch: { r: "salmon_bowl", leftover: true }, dinner: { r: "mujaddara", cook: true }, snack: false, note: "Wine night: no snack." },
    { date: "2026-10-26", breakfast: "skyr", lunch: { r: "mujaddara", leftover: true }, dinner: { r: "harissa", cook: true }, snack: true },
    { date: "2026-10-27", breakfast: "chia", lunch: { r: "harissa", leftover: true }, dinner: { r: "noodles", cook: true }, snack: true },
    { date: "2026-10-28", breakfast: "skyr", lunch: { r: "noodles", leftover: true }, dinner: { r: "buckwheat" }, snack: true },
    { date: "2026-10-29", breakfast: "chia", lunch: { r: "chickpea_salad" }, dinner: { r: "meatballs", cook: true }, snack: true },
    { date: "2026-10-30", breakfast: "skyr", lunch: { r: "meatballs", leftover: true }, dinner: { r: "halloumi_pita" }, snack: true }
  ],

  shopping: [
    {
      title: "Use first",
      items: [
        { name: "Sheep's feta jar", qty: "This week" },
        { name: "Opened halloumi box", qty: "Friday 23rd, check the date" },
        { name: "Boulangère kebab breads", qty: "Before 31/10" },
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
        { name: "Chicken breast", qty: "480 g" },
        { name: "Chicken or turkey mince", qty: "400 g" },
        { name: "Tofu", qty: "1 box (plus the one left from week 1), or 500 g chicken thighs" },
        { name: "Skyr", qty: "About 2.5 kg" },
        { name: "Eggs", qty: "15" },
        { name: "Mushrooms", qty: "300 g" },
        { name: "Broccoli", qty: "2" },
        { name: "Courgette", qty: "1" },
        { name: "Peppers", qty: "3" },
        { name: "Red onions", qty: "2" },
        { name: "Cucumbers", qty: "3" },
        { name: "Cherry tomatoes", qty: "500 g" },
        { name: "Carrots", qty: "2" },
        { name: "Spring onions", qty: "1 bunch" },
        { name: "Garlic", qty: "1 head, for roasting" },
        { name: "Limes", qty: "2" },
        { name: "Lemons", qty: "3" },
        { name: "Dill, mint and parsley", qty: "1 each" },
        { name: "Oats", qty: "500 g" },
        { name: "Apples and bananas", qty: "For snacks and shakes" }
      ]
    }
  ]
};
