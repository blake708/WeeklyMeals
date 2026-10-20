/* ============================================================
   THE WEEK — the only file that changes each week.
   index.html holds the machinery (cook mode, timers, wake lock,
   shopping-list storage) and should not change.
   Optional fields: range (header kicker), servings (header right),
   balanceNote (Prep tab paragraph). Leave them out for the defaults.
   ============================================================ */
const WEEK = {
  id:"2026-10-19", label:"Week of October 19",
  range:"Dinner, Tuesday to Friday", servings:"3 servings",
  avg:{carbs:40,protein:29,fat:31},
  balanceNote:"The target is 40 / 30 / 30, and this week lands near 40 / 29 / 31. The meatloaf nights run a little low in protein because ground turkey comes in one-pound packages, and the pork tenderloin night makes it back. There is no fatty fish night this week, so fat stays moderate throughout. These numbers are dinners only; breakfasts and dessert are not included.",
  meals:[
    {day:"Tue",dayFull:"Tuesday",title:"Mini Turkey Meatloaves",sub:"Roasted Yukon golds, skillet broccoli (double batch)",
     method:"Sheet pan",time:"45 min",kcal:665,g:{carbs:72,protein:42,fat:23},pct:{carbs:43,protein:25,fat:32},
     ingredients:["2 lb 93% lean ground turkey","1 cup old-fashioned oats","2 large eggs","1 large yellow onion, grated","4 garlic cloves (3 minced, 1 sliced)","2 tbsp Worcestershire sauce","1 tbsp Dijon mustard","2 tsp dried thyme","2.5 tsp kosher salt, divided","1 tsp black pepper","2/3 cup ketchup","2 tbsp brown sugar","1 tbsp cider vinegar","3 lb Yukon gold potatoes, in 1-inch chunks","3 tbsp olive oil, divided","1 tsp smoked paprika","1 tsp garlic powder","1 lb broccoli florets (the ones you have — tonight only)","1/2 lemon"],
     steps:[
       {t:"Heat the oven",b:"Heat the oven to 425°F with racks in the upper and lower thirds. Line two sheet pans with parchment, and cut the potatoes while it heats.",sec:600,
        ing:["3 lb Yukon gold potatoes"]},
       {t:"Roast the potatoes",b:"Toss the potatoes with two tablespoons of oil, a teaspoon of salt, the smoked paprika and the garlic powder. Spread them on one pan and roast on the lower rack for about thirty-five minutes total, tossing once when the meatloaves go in. They start first because they take the longest.",sec:2100,
        ing:["The cut potatoes","2 tbsp olive oil","1 tsp kosher salt","1 tsp smoked paprika","1 tsp garlic powder"]},
       {t:"Soak the oats",b:"In a big bowl, stir together the oats, eggs, grated onion with all its juice, minced garlic, Worcestershire, Dijon, thyme, the remaining salt and the pepper. Let it sit for five minutes. The oats soak up the onion juice, and that moisture is what keeps lean turkey from drying out.",sec:300,
        ing:["1 cup old-fashioned oats","2 large eggs","1 large yellow onion, grated","3 garlic cloves, minced","2 tbsp Worcestershire sauce","1 tbsp Dijon mustard","2 tsp dried thyme","1.5 tsp kosher salt","1 tsp black pepper"]},
       {t:"Mix and shape",b:"Add the turkey and mix with your hands just until it comes together. Overmixing makes meatloaf dense. Shape twelve small loaves, about four inches by two and a half, and space them out on the second pan.",
        ing:["2 lb 93% lean ground turkey"]},
       {t:"Glaze and bake",b:"Stir the ketchup, brown sugar and vinegar together and brush half of it over the loaves. Bake on the upper rack for about twenty minutes, brushing on the rest of the glaze after fifteen. They are done at 165°F in the center.",sec:1200,
        ing:["2/3 cup ketchup","2 tbsp brown sugar","1 tbsp cider vinegar"]},
       {t:"Skillet broccoli",b:"In the last few minutes, heat the last tablespoon of oil in a large skillet over medium-high. Add the broccoli with a pinch of salt and leave it alone for two minutes to char. Add three tablespoons of water and the sliced garlic, cover, and steam for two minutes until bright green and tender-crisp. Squeeze the lemon over it.",sec:300,
        ing:["1 tbsp olive oil","1 lb broccoli florets","Pinch of kosher salt","1 garlic clove, sliced","1/2 lemon"]},
       {t:"Serve and pack Wednesday",b:"Serve two loaves per person with potatoes and broccoli. Let the other six loaves and half the potatoes cool, then refrigerate them together for Wednesday.",
        ing:[]}
     ],
     note:"This is a double batch: six servings, three tonight and three on Wednesday. Small loaves reheat much better than slices of one big loaf. Ground turkey comes in one-pound packages, so this uses two pounds, which is why protein runs a little light tonight."},

    {day:"Wed",dayFull:"Wednesday",title:"Meatloaf Leftovers",sub:"Reheated meatloaves and potatoes, fresh roasted broccoli",
     method:"Sheet pan",time:"20 min",kcal:665,g:{carbs:72,protein:42,fat:23},pct:{carbs:43,protein:25,fat:32},
     ingredients:["6 leftover mini meatloaves","Tuesday's leftover potatoes","1 lb broccoli florets (two 8 oz packages)","1 tbsp olive oil","1/2 tsp kosher salt","1/4 tsp red pepper flakes","1/2 lemon"],
     steps:[
       {t:"Heat the oven",b:"Heat the oven to 425°F with racks in the upper and lower thirds.",sec:600,
        ing:[]},
       {t:"Prep both pans",b:"Toss the broccoli with the oil, salt and red pepper flakes and spread it on one sheet pan. Put the meatloaves and potatoes on a second pan and cover it loosely with foil so the meatloaves do not dry out.",
        ing:["1 lb broccoli florets","1 tbsp olive oil","1/2 tsp kosher salt","1/4 tsp red pepper flakes","6 leftover mini meatloaves","Leftover potatoes"]},
       {t:"Roast and reheat",b:"Broccoli goes on the upper rack and the leftovers on the lower rack, for about fifteen minutes. The broccoli should be browned at the edges and the meatloaves hot all the way through.",sec:900,
        ing:[]},
       {t:"Serve",b:"Squeeze the lemon over the broccoli and serve.",
        ing:["1/2 lemon"]}
     ],
     note:"If you are short on time, microwave the leftovers, covered, for two to three minutes while the broccoli roasts."},

    {day:"Thu",dayFull:"Thursday",title:"Rosemary-Fennel Pork",sub:"Roasted zucchini and tomatoes, garlicky white beans, arugula",
     method:"Sheet pan",time:"35 min",kcal:680,g:{carbs:55,protein:61,fat:24},pct:{carbs:32,protein:36,fat:32},
     ingredients:["1 pork tenderloin, about 1.25 lb","1 tbsp fennel seeds, lightly crushed","1 tbsp fresh rosemary, chopped, divided","1 tsp garlic powder","1 lemon, zested then juiced","2 tsp kosher salt, divided","1/2 tsp black pepper","3 tbsp olive oil, divided","2 medium zucchini, in half-moons","1 red onion, in wedges","2 cups grape tomatoes","2 cans cannellini beans, drained and rinsed","3 garlic cloves, sliced","1/4 tsp red pepper flakes","1/3 cup water","3 cups baby arugula","1 oz Parmesan, shaved"],
     steps:[
       {t:"Heat the oven",b:"Heat the oven to 425°F with a rack in the middle.",sec:600,
        ing:[]},
       {t:"Season the pork",b:"Pat the pork dry and trim off the shiny silver skin. Rub it with a tablespoon of oil, then the fennel seeds, two teaspoons of the rosemary, the garlic powder, the lemon zest, a teaspoon of salt and the pepper. Keep the zested lemon for the beans.",
        ing:["1 pork tenderloin","1 tbsp olive oil","1 tbsp fennel seeds, crushed","2 tsp fresh rosemary","1 tsp garlic powder","Zest of 1 lemon","1 tsp kosher salt","1/2 tsp black pepper"]},
       {t:"Prep the vegetables",b:"Toss the zucchini, red onion and tomatoes with a tablespoon of oil and half a teaspoon of salt. Spread them around the edges of a sheet pan and set the pork in the middle.",
        ing:["2 medium zucchini","1 red onion, in wedges","2 cups grape tomatoes","1 tbsp olive oil","1/2 tsp kosher salt"]},
       {t:"Roast",b:"Roast for twenty to twenty-five minutes, until the thickest part of the pork reads 140°F. Tenderloin is very lean, so it dries out quickly past that point.",sec:1320,
        ing:[]},
       {t:"Warm the beans",b:"While the pork roasts, heat the last tablespoon of oil in a skillet over medium. Cook the sliced garlic, the rest of the rosemary and the red pepper flakes for thirty seconds. Add the beans, the water and the last half teaspoon of salt, and simmer for five minutes, mashing a few beans against the pan to thicken it.",sec:300,
        ing:["1 tbsp olive oil","3 garlic cloves, sliced","1 tsp fresh rosemary","1/4 tsp red pepper flakes","2 cans cannellini beans, drained","1/3 cup water","1/2 tsp kosher salt"]},
       {t:"Finish the beans",b:"Squeeze in the juice of the lemon and fold in the arugula until it just wilts.",
        ing:["The zested lemon, juiced","3 cups baby arugula"]},
       {t:"Rest and slice",b:"Let the pork rest for five minutes. It will climb to 145°F as it sits. Slice it into half-inch rounds.",sec:300,
        ing:[]},
       {t:"Serve",b:"Spoon the beans onto plates, add the roasted vegetables and the sliced pork, and shave the Parmesan over the beans.",
        ing:["1 oz Parmesan, shaved"]}
     ],
     note:"Pork tenderloin is about as lean as chicken breast, and this is the week's highest-protein night. Carbs run low here because the beans are the only starch; the Tuesday and Friday nights balance it out."},

    {day:"Fri",dayFull:"Friday",title:"Greek Shrimp & Butter Beans",sub:"Tomato-dill sauce, farro, cucumber-tomato salad, feta",
     method:"Skillet",time:"35 min",kcal:730,g:{carbs:80,protein:55,fat:21},pct:{carbs:44,protein:30,fat:26},
     ingredients:["1.25 lb large shrimp, 21/25, peeled and deveined","1/2 cup pearled farro","3 tbsp olive oil, divided","1 yellow onion, diced","4 garlic cloves, minced","1.5 tsp dried oregano, divided","1/4 tsp red pepper flakes","28 oz crushed tomatoes","2 cans butter beans, drained and rinsed","1.5 tsp kosher salt, divided","1/2 tsp smoked paprika","3 tbsp fresh dill, chopped","1 lemon","2 oz feta, crumbled","1 English cucumber, diced","1 cup grape tomatoes, halved","1/4 red onion, thinly sliced"],
     steps:[
       {t:"Cook the farro",b:"Simmer the farro in a pot of salted water until tender but still chewy, about twenty-five minutes, then drain. It runs in the background while you do everything else.",sec:1500,
        ing:["1/2 cup pearled farro"]},
       {t:"Soften the onion",b:"Heat two tablespoons of oil in a large skillet over medium and cook the onion until soft.",sec:300,
        ing:["2 tbsp olive oil","1 yellow onion, diced"]},
       {t:"Build the sauce",b:"Add the garlic, a teaspoon of oregano and the red pepper flakes for thirty seconds. Then add the crushed tomatoes, the butter beans and three-quarters of a teaspoon of salt, and simmer uncovered until it thickens.",sec:600,
        ing:["4 garlic cloves, minced","1 tsp dried oregano","1/4 tsp red pepper flakes","28 oz crushed tomatoes","2 cans butter beans, drained","3/4 tsp kosher salt"]},
       {t:"Make the salad",b:"While the sauce simmers, toss the cucumber, grape tomatoes and red onion with a tablespoon of oil, the rest of the oregano, the juice of half the lemon and a pinch of salt.",
        ing:["1 English cucumber, diced","1 cup grape tomatoes, halved","1/4 red onion, sliced","1 tbsp olive oil","1/2 tsp dried oregano","1/2 lemon, juiced","1/4 tsp kosher salt"]},
       {t:"Season the shrimp",b:"Pat the shrimp completely dry and season them with the smoked paprika and half a teaspoon of salt. Wet shrimp will water down the sauce.",
        ing:["1.25 lb shrimp","1/2 tsp smoked paprika","1/2 tsp kosher salt"]},
       {t:"Cook the shrimp",b:"Nestle the shrimp down into the sauce, cover, and cook for four to five minutes, until they are pink and just opaque. Stir in most of the dill and the juice of the other lemon half.",sec:270,
        ing:["Most of the dill","1/2 lemon, juiced"]},
       {t:"Serve",b:"Spoon the farro into bowls, top with the shrimp and beans, and finish with the feta and the rest of the dill. Serve the salad on the side.",
        ing:["2 oz feta, crumbled","The remaining dill"]}
     ],
     note:"Two ounces of feta across three bowls is a garnish, not a topping. The crushed tomatoes in the cart are Muir Glen fire-roasted, which adds a light smoky edge that suits this dish."},

    {day:"Bkfst",dayFull:"Breakfast",title:"Spinach-Feta Egg Bites",sub:"Make ahead, 12 bites, reheat in 30 seconds",
     method:"Muffin tin",time:"30 min",kcal:130,g:{carbs:3,protein:13,fat:7},pct:{carbs:9,protein:41,fat:50},
     ingredients:["6 large eggs","1 cup liquid egg whites","1/2 cup low-fat cottage cheese","1/4 tsp kosher salt","1/4 tsp black pepper","2 cups baby spinach, chopped","1/3 cup roasted red peppers, chopped","1.5 oz feta, crumbled","Cooking spray"],
     steps:[
       {t:"Heat the oven",b:"Heat the oven to 375°F and coat a twelve-cup muffin tin well with cooking spray.",sec:600,
        ing:["Cooking spray"]},
       {t:"Blend the eggs",b:"Blend the eggs, egg whites, cottage cheese, salt and pepper until completely smooth, about thirty seconds. Blending the cottage cheese in is what gives these their soft, velvety texture.",
        ing:["6 large eggs","1 cup liquid egg whites","1/2 cup low-fat cottage cheese","1/4 tsp kosher salt","1/4 tsp black pepper"]},
       {t:"Fill the cups",b:"Divide the spinach, roasted red peppers and feta among the cups. Pour the egg mixture over them, filling each cup about three-quarters full.",
        ing:["2 cups baby spinach, chopped","1/3 cup roasted red peppers, chopped","1.5 oz feta, crumbled"]},
       {t:"Bake",b:"Bake for eighteen to twenty minutes, until the centers are just set and no longer wobble.",sec:1140,
        ing:[]},
       {t:"Cool and store",b:"Let them cool for ten minutes, then run a knife around each one and lift it out. Refrigerate what you will eat in the next three days and freeze the rest. Reheat for thirty to forty-five seconds in the microwave, or sixty to ninety seconds from frozen.",sec:600,
        ing:[]}
     ],
     note:"Two bites is one serving. They are light on their own, so add a piece of fruit or a slice of whole-grain toast. Bake them on Wednesday alongside the frittata."},

    {day:"Bkfst",dayFull:"Breakfast",title:"Veggie Frittata Squares",sub:"Make ahead, one 9x13 pan, 12 squares",
     method:"Baking dish",time:"40 min",kcal:120,g:{carbs:4,protein:12,fat:6},pct:{carbs:14,protein:41,fat:45},
     ingredients:["1 tbsp olive oil","1 yellow onion, diced","1 red bell pepper, diced","12 oz sliced mushrooms","3 cups baby spinach","10 large eggs","2 cups liquid egg whites","1/2 cup milk","1 oz Parmesan, grated","1 tsp Italian seasoning","1 tsp kosher salt","1/2 tsp black pepper","Cooking spray"],
     steps:[
       {t:"Heat the oven",b:"Heat the oven to 375°F and coat a nine-by-thirteen baking dish with cooking spray.",sec:600,
        ing:["Cooking spray"]},
       {t:"Cook the vegetables",b:"Heat the oil in a large skillet over medium-high. Cook the onion, red pepper and mushrooms with a pinch of salt until the mushrooms release their water and it cooks off. Wet vegetables make a soggy frittata.",sec:480,
        ing:["1 tbsp olive oil","1 yellow onion, diced","1 red bell pepper, diced","12 oz sliced mushrooms","Pinch of kosher salt"]},
       {t:"Wilt the spinach",b:"Stir in the spinach for about a minute, until it wilts. Spread the vegetables evenly in the baking dish.",
        ing:["3 cups baby spinach"]},
       {t:"Whisk and pour",b:"Whisk the eggs, egg whites, milk, Parmesan, Italian seasoning, salt and pepper together, then pour it over the vegetables.",
        ing:["10 large eggs","2 cups liquid egg whites","1/2 cup milk","1 oz Parmesan, grated","1 tsp Italian seasoning","1 tsp kosher salt","1/2 tsp black pepper"]},
       {t:"Bake",b:"Bake for twenty-two to twenty-five minutes, until the center is just set.",sec:1440,
        ing:[]},
       {t:"Cool, cut and store",b:"Let it cool for ten minutes, then cut it into twelve squares. Refrigerate what you will eat in the next three days and freeze the rest. Reheat for about forty-five seconds, or ninety seconds from frozen.",sec:600,
        ing:[]}
     ],
     note:"One square is one serving. Bake it alongside the egg bites; both use 375°F and finish within a few minutes of each other."},

    {day:"Bkfst",dayFull:"Breakfast",title:"Berry Overnight Oats",sub:"Six jars, mixed the night before",
     method:"No cook",time:"10 min",kcal:365,g:{carbs:54,protein:19,fat:8},pct:{carbs:59,protein:21,fat:20},
     ingredients:["3 cups old-fashioned oats","6 tbsp chia seeds","1.5 tsp ground cinnamon","2 cups plain nonfat Greek yogurt","3 cups milk","2 tbsp maple syrup","1.5 tsp vanilla extract","3 cups frozen mixed berries"],
     steps:[
       {t:"Mix the dry",b:"In a big bowl, stir together the oats, chia seeds and cinnamon.",
        ing:["3 cups old-fashioned oats","6 tbsp chia seeds","1.5 tsp ground cinnamon"]},
       {t:"Add the wet",b:"Whisk the Greek yogurt, milk, maple syrup and vanilla until smooth, then stir it into the oats.",
        ing:["2 cups plain nonfat Greek yogurt","3 cups milk","2 tbsp maple syrup","1.5 tsp vanilla extract"]},
       {t:"Jar and top",b:"Divide the oats among six jars and top each one with frozen berries. The berries thaw overnight.",
        ing:["3 cups frozen mixed berries"]},
       {t:"Chill overnight",b:"Refrigerate for at least eight hours. They keep for four to five days. Eat them cold, or microwave for about a minute if you like them warm.",
        ing:[]}
     ],
     note:"Make these Tuesday night for Wednesday and Thursday. Oats and chia both add soluble fiber, and this is the most filling of the three breakfasts."},

    {day:"Treat",dayFull:"Dessert",title:"Baked Cinnamon Apples",sub:"Oat-walnut crumble, maple Greek yogurt",
     method:"Baking dish",time:"35 min",kcal:270,g:{carbs:40,protein:5,fat:10},pct:{carbs:60,protein:7,fat:33},
     ingredients:["3 Honeycrisp apples, halved and cored","1/3 cup old-fashioned oats","3 tbsp chopped walnuts","1 tbsp maple syrup, plus 1 tsp for the yogurt","1 tbsp olive oil","1 tsp ground cinnamon","Pinch of nutmeg and salt","1/3 cup water","6 tbsp plain nonfat Greek yogurt"],
     steps:[
       {t:"Heat the oven",b:"Heat the oven to 375°F. Halve the apples, scoop out the cores with a spoon or melon baller, and set them cut side up in a baking dish.",sec:600,
        ing:["3 Honeycrisp apples"]},
       {t:"Make the crumble",b:"Mix the oats, walnuts, a tablespoon of maple syrup, the oil, cinnamon, nutmeg and salt until clumpy. Mound it into the apple hollows and pour the water into the bottom of the dish.",
        ing:["1/3 cup old-fashioned oats","3 tbsp chopped walnuts","1 tbsp maple syrup","1 tbsp olive oil","1 tsp ground cinnamon","Pinch of nutmeg and salt","1/3 cup water"]},
       {t:"Bake covered",b:"Cover the dish with foil and bake for fifteen minutes, so the apples steam and soften.",sec:900,
        ing:[]},
       {t:"Bake uncovered",b:"Remove the foil and bake for twelve to fifteen more minutes, until a knife slides in easily and the crumble is toasted.",sec:840,
        ing:[]},
       {t:"Serve",b:"Stir a teaspoon of maple syrup into the yogurt and spoon a dollop onto each warm apple half.",
        ing:["6 tbsp plain nonfat Greek yogurt","1 tsp maple syrup"]}
     ],
     note:"Two halves per person. Thursday works well: when the pork comes out, drop the oven to 375°F and these bake while you eat. For a no-cook treat, the cart also has an 85% dark chocolate bar, strawberries and mandarins. Two squares per person is a sensible portion."}
  ],
  prep:[
    "Tuesday night, about five minutes: mix the six overnight oat jars for Wednesday and Thursday breakfast.",
    "Wednesday after dinner: turn the oven down to 375°F and bake the egg bites and the frittata side by side. It takes about twenty minutes of hands-on time.",
    "Once they cool: keep egg bites for Friday in the fridge and freeze the rest, along with most of the frittata. Next week, move each morning's portion from the freezer to the fridge the night before.",
    "Breakfast plan: overnight oats Wednesday and Thursday, egg bites Friday and next Monday, frittata squares next Tuesday through Friday."
  ],
  shopping:[
    ["Produce",["1 bag Yukon gold potatoes, 3 lb","2 packages broccoli florets, 8 oz each","1 zucchini (plus the one at home)","2 yellow onions","2 red onions","2 containers grape tomatoes","1 English cucumber","4 lemons","1 head garlic","1 package fresh dill","1 package fresh rosemary","1 container baby arugula, 5 oz"]],
    ["Fish counter",["1.25 lb large shrimp, 21/25, peeled and deveined — buy Thursday or Friday"]],
    ["Meat",["2 lb 93% lean ground turkey (two 1 lb packages)","1 pork tenderloin, about 1.25 lb"]],
    ["Pantry",["2 cans cannellini beans","2 cans butter beans","1 can crushed tomatoes, 28 oz","Apple cider vinegar","Fennel seed"]],
    ["Dairy",["Feta, 8 oz block","Parmesan, 8 oz wedge"]],
    ["Breakfast & dessert",["1 dozen organic free-range large brown eggs","Liquid egg whites, 32 oz","Low-fat cottage cheese","Plain nonfat Greek yogurt, 32 oz","1 bag baby spinach, 5 oz","1 jar roasted red peppers","1 red bell pepper","Sliced mushrooms, 12 oz","Frozen mixed berries","3 Honeycrisp apples","Chopped walnuts","Lindt 85% dark chocolate bar","Strawberries","Mandarins, 3 lb bag"]]
  ]
};
