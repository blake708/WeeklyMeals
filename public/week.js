/* ============================================================
   THE WEEK — the only file that changes each week.
   index.html holds the machinery (cook mode, timers, wake lock,
   shopping-list storage) and should not change.
   Optional fields: range (header kicker), servings (header right),
   balanceNote (Prep tab paragraph). Leave them out for the defaults.
   ============================================================ */
const WEEK = {
  id:"2026-10-26", label:"Week of October 26",
  range:"Dinner, Tue, Thu & Fri", servings:"3 servings",
  avg:{carbs:40,protein:32,fat:28},
  balanceNote:"The target is 40 / 30 / 30, and this week lands near 40 / 32 / 28. Two lean chicken-breast nights push protein a little high and fat a little low, and Friday's salmon brings fat back up. Every night has a legume: black beans Tuesday, edamame Thursday, lentils Friday. These numbers are dinners only; breakfasts are not included. Wednesday is off for the Myrtle Beach drive.",
  meals:[
    {day:"Tue",dayFull:"Tuesday",title:"Chili-Lime Chicken Bowls",sub:"Cilantro-lime brown rice, black beans, charred corn, pico",
     method:"Grill",time:"40 min",kcal:680,g:{carbs:72,protein:55,fat:19},pct:{carbs:42,protein:33,fat:25},
     ingredients:["Half of the 2.25 lb chicken breast pack (about 1.1 lb)","1 tbsp olive oil","1 tbsp low-sodium taco seasoning","2 garlic cloves, minced","3 limes","1.5 cups brown rice, dry (half is saved for Thursday)","3 cups water","1/2 cup fresh cilantro, chopped","1 can black beans, rinsed","1 cup frozen fire-roasted corn","1/2 tsp ground cumin","1 cup Publix fresh pico","1 avocado, sliced","1/2 cup plain nonfat Greek yogurt","1/2 tsp kosher salt, divided"],
     steps:[
       {t:"Start the rice",b:"Rinse the brown rice. Bring the water and a pinch of salt to a boil, stir in the rice, cover, and simmer on low for forty-five minutes. It cooks on its own while you do everything else. You are making a double batch on purpose.",sec:2700,
        ing:["1.5 cups brown rice","3 cups water","Pinch of salt"]},
       {t:"Marinate the chicken",b:"Pound the chicken to an even three-quarter-inch thickness so it grills evenly. Toss it with the oil, taco seasoning, garlic, and the juice of one lime. Let it sit for fifteen minutes.",sec:900,
        ing:["About 1.1 lb chicken breast","1 tbsp olive oil","1 tbsp taco seasoning","2 garlic cloves, minced","Juice of 1 lime"]},
       {t:"Heat the grill",b:"Heat the grill to medium-high, about 450°F, and oil the grates.",sec:600,
        ing:[]},
       {t:"Char the corn and beans",b:"In a cast-iron skillet over medium-high heat, let the corn sit without stirring for a few minutes until it chars. Add the black beans, cumin, and a pinch of salt, and warm everything through, five to six minutes in all.",sec:360,
        ing:["1 cup frozen fire-roasted corn","1 can black beans, rinsed","1/2 tsp ground cumin","Pinch of salt"]},
       {t:"Grill the chicken",b:"Grill the chicken five to six minutes per side, until it reaches 165°F in the thickest part.",sec:660,
        ing:[]},
       {t:"Rest and make the crema",b:"Let the chicken rest for five minutes, then slice it. While it rests, stir the Greek yogurt with the juice of half a lime and a pinch of salt.",sec:300,
        ing:["1/2 cup plain nonfat Greek yogurt","Juice of 1/2 lime","Pinch of salt"]},
       {t:"Finish the rice",b:"Fluff the rice with the cilantro and the juice of half a lime. Set half of it aside to cool, then refrigerate it for Thursday's stir-fry.",
        ing:["1/2 cup cilantro, chopped","Juice of 1/2 lime"]},
       {t:"Build the bowls",b:"Divide the rice, the beans and corn, and the chicken among three bowls. Top with the pico, the avocado, and a spoonful of crema. Cut the last lime into wedges for the table.",
        ing:["1 cup Publix fresh pico","1 avocado, sliced","1 lime, in wedges"]}
     ],
     note:"The avocado is most of the fat here, and it is mostly the unsaturated kind. Deli pico and a taco seasoning packet are the shortcuts that keep this inside forty minutes."},

    {day:"Thu",dayFull:"Thursday",title:"Ginger-Garlic Chicken Stir-Fry",sub:"Broccoli, snap peas, red pepper, edamame, brown rice",
     method:"Skillet",time:"30 min",kcal:620,g:{carbs:67,protein:54,fat:15},pct:{carbs:43,protein:35,fat:22},
     ingredients:["Other half of the 2.25 lb chicken breast pack (about 1.1 lb), thinly sliced","1 tbsp cornstarch","1 tbsp less-sodium soy sauce","1 tbsp avocado oil, divided","1 bag broccoli florets, 12 oz","3 tbsp water","1 bag sugar snap peas, 8 oz","1 red bell pepper, sliced","1 cup frozen shelled edamame","3 garlic cloves, minced","1 tbsp ginger paste","1/3 cup House of Tsang Classic Stir Fry Sauce","3 cups cooked brown rice, saved from Tuesday","1 tsp toasted sesame oil","3 green onions, sliced","1 tsp sesame seeds"],
     steps:[
       {t:"Coat the chicken",b:"Slice the chicken thin and toss it with the cornstarch and soy sauce. Let it sit for ten minutes while you prep the vegetables. The light coating keeps lean breast meat tender in a very hot pan.",sec:600,
        ing:["About 1.1 lb chicken breast, thinly sliced","1 tbsp cornstarch","1 tbsp less-sodium soy sauce"]},
       {t:"Prep the vegetables",b:"Run the edamame under warm water to thaw it. Slice the red pepper and the green onions. Set the garlic and ginger paste next to the stove, because the stir-fry moves fast once it starts.",
        ing:["1 cup frozen shelled edamame","1 red bell pepper","3 green onions","3 garlic cloves, minced","1 tbsp ginger paste"]},
       {t:"Sear the chicken",b:"Heat the cast iron on high until it just begins to smoke. Add half the oil, then the chicken in a single layer. Sear three to four minutes, turning once, until it is browned and cooked through. Move it to a plate.",sec:240,
        ing:["1/2 tbsp avocado oil"]},
       {t:"Steam the broccoli",b:"Add the rest of the oil, the broccoli, and the water. Cover and steam for three minutes, until the broccoli turns bright green. Meanwhile, microwave the saved rice with a splash of water for two to three minutes.",sec:180,
        ing:["1/2 tbsp avocado oil","1 bag broccoli florets, 12 oz","3 tbsp water","3 cups cooked brown rice"]},
       {t:"Stir-fry the rest",b:"Uncover the pan. Add the snap peas, red pepper, edamame, garlic, and ginger. Stir-fry for two to three minutes, until the snap peas are crisp-tender.",sec:150,
        ing:["1 bag sugar snap peas, 8 oz"]},
       {t:"Sauce and toss",b:"Return the chicken to the pan. Pour in the stir-fry sauce and toss for one to two minutes, until everything is glazed.",sec:90,
        ing:["1/3 cup House of Tsang Classic Stir Fry Sauce"]},
       {t:"Finish and serve",b:"Turn off the heat and drizzle with the sesame oil. Serve over the rice, topped with the green onions and sesame seeds.",
        ing:["1 tsp toasted sesame oil","1 tsp sesame seeds"]}
     ],
     note:"Bottled stir-fry sauce saves the most time but is high in sodium, so a third of a cup is plenty. Taste before adding more. Day-old rice is drier and stir-fries without turning mushy."},

    {day:"Fri",dayFull:"Friday",title:"Grilled Lemon-Herb Salmon",sub:"Warm lentil salad, dill yogurt, whole-wheat pita",
     method:"Grill",time:"35 min",kcal:715,g:{carbs:62,protein:51,fat:29},pct:{carbs:35,protein:29,fat:36},
     ingredients:["1 lb skin-on salmon fillet (fish counter)","1/2 cup French green lentils, dry","3 cups water","1 bay leaf","1 tsp olive oil (salmon)","1 tsp Cavender's Greek seasoning","2 lemons","2 tsp olive oil (dressing)","1/2 English cucumber, diced","1/2 cup roasted red pepper strips, chopped","1/4 red onion, finely diced","1/2 cup fresh parsley, chopped","1/2 cup plain nonfat Greek yogurt","2 tbsp fresh dill (or 2 tsp dried)","1 small garlic clove, grated","1 oz feta, crumbled","3 whole-wheat pitas","Pinch of kosher salt"],
     steps:[
       {t:"Simmer the lentils",b:"Rinse the lentils. Cover them with the water, add the bay leaf, and simmer gently for twenty to twenty-five minutes, until tender but still holding their shape. Salt them only at the end, because salting early can keep them firm.",sec:1380,
        ing:["1/2 cup French green lentils","3 cups water","1 bay leaf"]},
       {t:"Heat the grill",b:"Heat the grill to medium-high and oil the grates well so the salmon skin releases cleanly.",sec:600,
        ing:[]},
       {t:"Season the salmon",b:"Pat the salmon dry. Rub it with the oil, the Greek seasoning, and the zest of one lemon. Cavender's already has salt in it, so do not add more.",
        ing:["1 lb salmon fillet","1 tsp olive oil","1 tsp Cavender's Greek seasoning","Zest of 1 lemon"]},
       {t:"Make the sauce and dressing",b:"Stir the yogurt with the dill, the grated garlic, a squeeze of lemon, and a pinch of salt. In a second bowl, whisk the dressing oil with the juice of one lemon. Dice the cucumber, roasted peppers, red onion, and parsley.",
        ing:["1/2 cup plain nonfat Greek yogurt","2 tbsp fresh dill (or 2 tsp dried)","1 small garlic clove, grated","2 tsp olive oil","Juice of 1 lemon","1/2 English cucumber","1/2 cup roasted red peppers","1/4 red onion","1/2 cup parsley"]},
       {t:"Grill the salmon",b:"Grill the salmon skin side down with the lid closed for six to eight minutes, until the center reaches about 125°F for medium. There is no need to flip it. Warm the pitas on the grill for the last minute.",sec:420,
        ing:["3 whole-wheat pitas"]},
       {t:"Dress the lentils",b:"Drain the lentils, remove the bay leaf, and add a pinch of salt. Toss them while still warm with the dressing and the diced vegetables, because warm lentils soak up the dressing.",
        ing:["Pinch of salt"]},
       {t:"Plate",b:"Spoon the lentil salad onto plates, set the salmon on top, and add a spoonful of dill yogurt. Scatter the feta lightly over the salad, and serve with the warm pitas and the remaining lemon in wedges.",
        ing:["1 oz feta, crumbled"]}
     ],
     note:"This is the fatty-fish night, so it runs high in fat by design, mostly omega-3s. A tub of store-bought tzatziki can replace the dill yogurt if you are short on time."},

    {day:"Bkfst",dayFull:"Breakfast",title:"Spinach-Feta Egg Bites",sub:"Make ahead, 12 bites, reheat in 30 seconds",
     method:"Muffin tin",time:"30 min",kcal:130,g:{carbs:3,protein:13,fat:7},pct:{carbs:9,protein:41,fat:50},
     ingredients:["6 large eggs","1 cup liquid egg whites","1/2 cup low-fat cottage cheese","1/4 tsp kosher salt","1/4 tsp black pepper","2 cups baby spinach, chopped","1/3 cup roasted red peppers, chopped","1.5 oz feta, crumbled","Cooking spray"],
     steps:[
       {t:"Heat the oven",b:"Heat the oven to 375°F and coat a twelve-cup muffin tin well with cooking spray.",sec:600,
        ing:["Cooking spray"]},
       {t:"Blend the eggs",b:"Blend the eggs, egg whites, cottage cheese, salt, and pepper until completely smooth, about thirty seconds. Blending the cottage cheese in is what gives these their soft, velvety texture.",
        ing:["6 large eggs","1 cup liquid egg whites","1/2 cup low-fat cottage cheese","1/4 tsp kosher salt","1/4 tsp black pepper"]},
       {t:"Fill the cups",b:"Divide the spinach, roasted red peppers, and feta among the cups. Pour the egg mixture over them, filling each cup about three-quarters full.",
        ing:["2 cups baby spinach, chopped","1/3 cup roasted red peppers, chopped","1.5 oz feta, crumbled"]},
       {t:"Bake",b:"Bake for eighteen to twenty minutes, until the centers are just set and no longer wobble.",sec:1140,
        ing:[]},
       {t:"Cool and store",b:"Let them cool for ten minutes, then run a knife around each one and lift it out. Refrigerate what you will eat in the next three days and freeze the rest. Reheat for thirty to forty-five seconds in the microwave, or sixty to ninety seconds from frozen.",sec:600,
        ing:[]}
     ],
     note:"Same recipe as last week, and the ingredients are already at home. Two bites is one serving; add a piece of fruit or whole-grain toast for a fuller breakfast."},

    {day:"Bkfst",dayFull:"Breakfast",title:"Pumpkin Spice Overnight Oats",sub:"Six jars, mixed the night before",
     method:"No cook",time:"10 min",kcal:395,g:{carbs:51,protein:19,fat:13},pct:{carbs:51,protein:19,fat:30},
     ingredients:["3 cups old-fashioned oats","6 tbsp chia seeds","2 tsp pumpkin pie spice","1 cup canned pure pumpkin","2 cups plain nonfat Greek yogurt","2.5 cups milk","3 tbsp maple syrup","1.5 tsp vanilla extract","1/3 cup chopped pecans"],
     steps:[
       {t:"Mix the dry",b:"In a big bowl, stir together the oats, chia seeds, and pumpkin pie spice.",
        ing:["3 cups old-fashioned oats","6 tbsp chia seeds","2 tsp pumpkin pie spice"]},
       {t:"Add the wet",b:"Whisk the pumpkin, Greek yogurt, milk, maple syrup, and vanilla until smooth, then stir it into the oats.",
        ing:["1 cup canned pure pumpkin","2 cups plain nonfat Greek yogurt","2.5 cups milk","3 tbsp maple syrup","1.5 tsp vanilla extract"]},
       {t:"Jar and top",b:"Divide the oats among six jars and sprinkle each one with chopped pecans.",
        ing:["1/3 cup chopped pecans"]},
       {t:"Chill overnight",b:"Refrigerate for at least eight hours. They keep for four to five days. Eat them cold, or microwave for about a minute for warm pumpkin oatmeal.",sec:28800,
        ing:[]}
     ],
     note:"Pumpkin pie spice is the off-the-shelf blend that replaces cinnamon, ginger, nutmeg, and cloves. Use the rest of the pumpkin can within a week, or freeze it. Skip the pecans to save about four grams of fat per jar."}
  ],
  prep:[
    "Tuesday dinner: cook the double batch of brown rice and refrigerate half for Thursday's stir-fry.",
    "Tuesday after dinner, about thirty minutes: mix the six pumpkin oat jars, and bake the egg bites at 375°F. Both are ready for grab-and-go breakfast Wednesday morning before the drive.",
    "Once the egg bites cool: keep six in the fridge and freeze six for next week.",
    "Breakfast plan: overnight oats Wednesday through Saturday, egg bites as needed alongside them.",
    "Fish counter: buy the salmon Thursday or Friday so it is fresh for Friday night. Pick up fresh dill there if they have it; otherwise use dried."
  ],
  shopping:[
    ["Produce",["1 avocado","3 limes","2 lemons","1 bunch cilantro","1 bunch Italian parsley","1 head garlic","1 bag broccoli florets, 12 oz","1 bag sugar snap peas, 8 oz","1 red bell pepper","1 bunch green onions","1 English cucumber","1 red onion","Publix fresh pico, 16 oz"]],
    ["Fish counter",["1 lb skin-on salmon fillet — buy Thursday or Friday","Fresh dill, if available (otherwise dried)"]],
    ["Meat",["Perdue Harvestland chicken breasts, 2.25 lb (half Tuesday, half Thursday)"]],
    ["Pantry",["1 can black beans","1 can pure pumpkin, 15 oz","1 jar roasted red pepper strips","Whole-wheat pita, 6 count","Chopped pecans","Gourmet Garden ginger paste","House of Tsang Classic Stir Fry Sauce","Less-sodium soy sauce","Toasted sesame oil","Old El Paso less-sodium taco seasoning","Cavender's Greek seasoning"]],
    ["Frozen",["Fire-roasted corn, 12 oz","Shelled edamame, 12 oz"]],
    ["Dairy",["Plain nonfat Greek yogurt, 32 oz","fairlife 2% milk, 52 oz"]]
  ]
};
