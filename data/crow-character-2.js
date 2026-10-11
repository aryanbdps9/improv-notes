// Character 2 - CROW examples (side pane)
Object.assign(CROW, {
  "Hairdresser": `
Angle: knows everyone's news and always makes you feel fresh and new
R: hairdresser and regular client | salon owner and new trainee | hairdresser and nervous first-timer
O: give the perfect haircut | cheer up a client before a big day | try a bold new colour [pink streak; bright blue; silver]
W: in a busy salon | at a wedding, getting the bride ready | in the chair by the window
E: chatty | proud | a little nervous with the scissors
Line: {R:Maria, my favourite Tuesday client!} {O:Just a trim before your job interview,} {W:sit right here by the window} - {E:I'm so excited for you.}
Line: {C:I'm Tony, I've been cutting hair for thirty years,} {W:and this salon is my second home} - {O:I'll give you the best fringe on Main Street.}
Line: {R:Welcome to your first day, Sam,} {E:I'm so happy you're here} - {O:you're sweeping up the hair} {W:by chair three}.
Tuesday: {W:The salon is quiet today,} {O:so I'm finally washing all the towels.} {E:I love a calm day.}
Tuesday: {R:Mrs Patel,} {O:your usual wash and blow-dry is ready} {W:at the end chair.}
Pose: arms out, scissors near a head -> {O:giving the final snip} {E:with great care}
Pose: leaning forward, staring ahead -> {O:checking the fringe is straight} {W:in the big salon mirror}
Pose: arms up, swinging a cape -> {O:putting the cape on} {R:my next client, Grandpa Joe}
`,
  "Dentist": `
Angle: gentle, cheerful and very excited about clean teeth
R: dentist and nervous patient | dentist and assistant | dentist and a little kid
O: help a patient feel brave | give a sticker after a check-up | teach good brushing
W: in the dentist's chair | at a school health day | in the waiting room
E: calm | cheerful | a little too excited about teeth
Line: {R:Hi Jack, you were so brave last time,} {W:hop up into the big chair} - {O:I'm just counting your teeth today} {E:and I'm very happy to see you.}
Line: {C:I'm Dr Lee, and I love teeth} - {O:you get the dinosaur sticker} {R:for being my best patient this week,} {E:I'm thrilled.}
Line: {R:Nurse Kim,} {W:the waiting room is full of kids today} - {O:let's hand out the free toothbrushes,} {E:I'm so excited.}
Tuesday: {O:Floss day!} {R:Everyone on my list today gets free mint floss,} {E:I'm very proud of it.}
Tuesday: {W:The waiting room fish tank is clean,} {O:so I'm feeding the fish before my first patient.}
Pose: leaning forward, looking down, one hand up -> {O:checking a back tooth} {E:very gently}
Pose: holding one arm up -> {O:showing a kid their shiny teeth in a mirror} {W:in the dentist's chair}
Pose: pointing at a wall -> {O:teaching brushing with a big poster} at {W:the school health day}
`,
  "Chef": `
Angle: loud, proud and happiest with a full kitchen and hungry people
R: head chef and new cook | chef and regular diner | chef and food critic
O: get dinner out on time | bake a birthday cake | invent a new dish [pickle pizza; rainbow pasta; banana soup]
W: in a busy restaurant kitchen | at a food truck | on a cooking show
E: proud | rushed | joyful
Line: {C:I'm Chef Rosa,} {R:and you're my new kitchen helper, Ben} - {W:this kitchen gets busy at six,} {O:so start chopping the onions.}
Line: {R:Table four, you're my favourite regulars} - {O:I made you a free lasagna} {W:in my kitchen tonight} {E:because I'm in a great mood.}
Line: {W:Welcome to my food truck!} {E:I'm so happy} - {O:today's special is a cheese taco} {R:just for my first customer.}
Tuesday: {O:Taco Tuesday!} {W:The kitchen smells amazing} {E:and I'm so happy.}
Tuesday: {R:Ben,} {O:it's soup day, so peel all the carrots} {W:by the back sink.}
Pose: arms up, holding a big pan -> {O:flipping a giant pancake} {E:with joy}
Pose: leaning over, sniffing the air -> {O:tasting the soup} {W:in my busy kitchen}
Pose: one arm pointing forward -> {O:sending out table four's dinner} {E:proudly}
`,
  "Librarian": `
Angle: quiet on the outside, bursting with love for books on the inside
R: librarian and regular reader | librarian and a kid at story time | librarian and a volunteer
O: find the perfect book | run story time | keep the library quiet
W: at the library front desk | in the kids' corner | between tall bookshelves
E: calm | excited about books | a bit strict about noise
Line: {R:Ellie, my best reader,} {W:your book is waiting at the front desk} - {O:it's the new dragon book} {E:and I'm so excited for you.}
Line: {C:I'm Mr Green, the librarian,} {W:and this is the kids' corner} - {O:story time starts now,} {E:I'm thrilled.}
Line: {R:Thanks for volunteering, Jo} - {O:these picture books go back on the shelf} {W:by the window,} {E:I'm so grateful.}
Tuesday: {O:New books came in!} {W:I'm putting them on the front shelf,} {E:I'm very happy.}
Tuesday: {W:The library is quiet this morning,} {O:so I'm fixing old book covers} {E:with care.}
Pose: arms up high -> {O:putting a book on the top shelf} {W:in the history aisle}
Pose: finger on lips -> {O:reminding everyone to whisper} {W:in the reading room}
Pose: holding a book open toward people -> {O:reading the funny part} at {W:story time}
`,
  "Cop": `
Angle: the friendly face on the block who helps with lost kittens and crossing the road
R: community cop and neighbour | cop and school kids | two partner cops on patrol
O: find a lost kitten | help kids cross the street | have a friendly chat about parking
W: at the school crossing | on a quiet street | at the corner shop
E: friendly | helpful | a little bored on a slow day
Line: {C:I'm Officer Dan,} {R:and you're Mrs Lopez with the lost kitten} - {O:I'll find Mittens} {W:on Oak Street,} {E:I'm happy to help.}
Line: {R:Morning, kids!} {W:Big crossing on Main Street today} - {O:everyone holds hands and walks with me,} {E:I'm so proud of you.}
Line: {R:Hi Gary, nice to see you again} - {O:your car is a little bit in the bus spot} {W:here by the bakery,} {E:so no ticket, just a friendly chat.}
Tuesday: {W:Quiet day on Elm Street.} {O:I'm helping Mrs Brown carry her groceries.}
Tuesday: {O:Bike safety day!} {R:I'm checking helmets for the school kids} {E:and I love it.}
Pose: one arm up, palm out -> {O:stopping the traffic} {W:at the school crossing}
Pose: crouching low, hands out -> {O:calling a lost kitten} {W:from under a parked car}
Pose: standing on one leg, waving -> {R:saying hi to my neighbours} {W:on my morning walk}
`,
  "Firefighter": `
Angle: brave, strong and happiest when everyone is safe and the cat is out of the tree
R: firefighter and neighbour | firefighter and team mate | firefighter and school kids
O: rescue a cat from a tree | teach fire safety | wash the fire truck
W: at the fire station | under a tall tree | at a school visit
E: brave | proud | cheerful
Line: {C:I'm firefighter Jen,} {R:and this is your cat, Mrs Hill} - {O:I got her down} {W:from the big oak tree} {E:and I'm so happy.}
Line: {R:Hi class!} {W:Welcome to the fire station} - {O:you can all sit in the big red truck,} {E:I'm so excited.}
Line: {R:Mike, my best team mate,} {O:let's wash the truck} {W:out front in the sun} - {E:I love truck washing day.}
Tuesday: {O:Chili night!} {W:I'm cooking for the whole fire station,} {E:I'm so proud of my recipe.}
Tuesday: {O:Truck washing day.} {R:Mike, you do the wheels and I'll do the ladder.}
Pose: arms up, reaching high -> {O:rescuing a kitten} {W:from a tall tree}
Pose: holding a hose, leaning forward -> {O:watering the flowers} {W:outside the fire station}
Pose: one knee down, hand out -> {O:giving a kid a sticker badge} {W:at the school visit}
`,
  "Lifeguard": `
Angle: sunny, watchful and very serious about the whistle
R: lifeguard and swimmer | two lifeguards on shift | lifeguard and a kid learning to swim
O: keep everyone safe | teach a kid to float | get everyone out before the rain
W: at the beach | at the town pool | on the tall lifeguard chair
E: alert | proud | a little sunburnt
Line: {C:I'm Kai, the lifeguard,} {W:and this is my beach} - {R:Lily, you're my best swimmer,} {O:so swim between the flags,} {E:I'm so proud of you.}
Line: {R:Hi Max,} {W:the pool is perfect today} - {O:let's practise floating on your back,} {E:I'm so excited.}
Line: {R:Sara, your shift starts now,} {W:the tall chair is all yours} - {O:I'm getting ice cream,} {E:I'm so happy.}
Tuesday: {W:The pool is empty this morning,} {O:so I'm scooping out the leaves with the net.}
Tuesday: {O:Swim lesson day!} {R:Five little kids and me} {E:and I love it.}
Pose: hand over eyes, looking far -> {O:watching the swimmers} {W:from the tall chair}
Pose: whistle in mouth, arm pointing -> {O:telling Max to walk, not run} {W:by the pool}
Pose: lying flat, arms out -> {O:showing a kid how to float} {W:in the shallow end}
`,
  "Personal trainer": `
Angle: loud cheers, high fives and endless belief in you
R: trainer and client | trainer and a grandpa getting fit | two trainers at the same gym
O: finish one more push-up | train for a fun run | make exercise fun
W: at the gym | in the park | on a living room video call
E: energetic | encouraging | very loud
Line: {C:I'm Coach Jess,} {R:and you're my favourite client, Paul} - {O:ten more squats} {W:right here on the mat,} {E:I believe in you.}
Line: {R:Grandpa Joe, you're my star} - {O:one more lap} {W:around the duck pond} {E:and I'm so proud.}
Line: {W:Welcome to Sunny Gym!} {E:I'm so pumped} - {O:today we're training for the fun run,} {R:you and me, partner.}
Tuesday: {O:Leg day!} {R:Paul, you're doing twenty lunges with me} {E:and you'll love it.}
Tuesday: {W:The gym is empty,} {O:so I'm wiping down all the weights.} {E:Very relaxing.}
Pose: crouching low, arms out front -> {O:showing a perfect squat} {W:on the gym mat}
Pose: one hand up high -> {O:giving a big high five} {R:to my client Paul}
Pose: jogging on the spot, pointing -> {O:cheering everyone on} {W:at the fun run}
`,
  "Yoga instructor": `
Angle: super calm voice, very bendy, finds peace in everything
R: yoga teacher and beginner | teacher and a whole class | teacher and a friend who giggles
O: stay calm | teach a new pose | get the class to relax
W: in a yoga studio | on the beach at sunrise | in the park on the grass
E: calm | peaceful | a little too relaxed
Line: {C:I'm Willow, your yoga teacher,} {W:welcome to the studio} - {O:today we learn tree pose,} {E:and I feel so peaceful.}
Line: {R:Dan, you're doing great for your first class} - {O:just breathe in} {W:and feel the sand under your feet,} {E:so calm.}
Line: {R:Class, you are all wonderful} - {W:the sun is coming up over the beach,} {O:so we stretch up high} {E:with joy.}
Tuesday: {O:Gentle stretch day.} {W:The studio smells like lavender} {E:and I feel so calm.}
Tuesday: {R:Mia,} {O:you get the best mat by the window today.} {E:Breathe and smile.}
Pose: standing on one leg, arms up -> {O:showing tree pose} {W:on the beach}
Pose: lying flat, eyes closed -> {O:showing the resting pose} {E:very peacefully}
Pose: on hands and knees -> {O:teaching cat pose} to {R:my beginner class}
`,
  "Tour guide": `
Angle: knows a fun fact about every single building and loves telling you
R: guide and tourists | guide and a family | guide and a school class
O: show the best sights | keep the group together | tell a fun fact
W: on a city walking tour | at a museum | in an old castle
E: enthusiastic | proud of the town | a bit out of breath
Line: {C:I'm Greg, your tour guide} - {W:on your left is the old clock tower} {E:and I love it,} {O:so stay close to my yellow umbrella.}
Line: {R:Welcome, Smith family!} {W:This castle is four hundred years old} - {O:the gift shop has great fudge,} {E:I'm so excited.}
Line: {W:Welcome to the museum,} {R:class from Hill School} - {O:the dinosaur room is first,} {E:it's my favourite.}
Tuesday: {O:Same tour, third time today!} {W:Still the best clock tower in town,} {E:I'm so proud.}
Tuesday: {W:The tour bus has a flat tire,} {O:so we're doing the walking tour.} {E:Even better.}
Pose: arm up high, holding something -> {O:holding up my yellow umbrella} {W:in the busy square}
Pose: pointing far away -> {O:showing the old clock tower} {R:to my tour group}
Pose: walking backwards, arms out -> {O:keeping everyone together} {W:in the castle hall}
`,
  "Real estate agent": `
Angle: thinks every house is a dream home and every closet is a feature
R: agent and first-time buyers | agent and a big family | two agents at an open house
O: sell the house | show off a tiny room | find a family the perfect home
W: at an open house | in a tiny apartment | in front of a for sale sign
E: excited | very positive | a little pushy
Line: {C:I'm Linda, your real estate agent} - {W:this tiny kitchen is cosy} {E:and I adore it,} {O:so let me show you the garden next.}
Line: {R:Welcome, Brown family!} {W:This is the big blue house on Pine Street} - {O:it has a tree house for the kids,} {E:I'm so excited.}
Line: {W:This is the best closet in town} - {O:it fits all your shoes,} {R:Tom and Ana,} {E:I promise you'll love it.}
Tuesday: {O:Open house day!} {W:I baked cookies so the whole house smells sweet.}
Tuesday: {R:The Browns} {O:got the keys to their new house today.} {E:I'm so happy for them.}
Pose: arms wide open -> {O:showing the big living room} {E:with pride}
Pose: one knee down, pointing -> {O:showing off the shiny floor} {W:in the new kitchen}
Pose: hammering something into the ground -> {O:putting up the sold sign} {W:in the front yard}
`,
  "Car salesman": `
Angle: big smile, loves every car on the lot like it's family
R: seller and customer | seller and a teen buying a first car | two sellers on the same lot
O: sell a car | take someone on a test drive | find the right car for a family
W: on the car lot | in the showroom | in a car on a test drive
E: cheerful | eager | a little too excited
Line: {C:I'm Bob, the friendliest car seller in town,} {W:welcome to the lot} - {O:this little red car is perfect for you,} {E:I just know it.}
Line: {R:Congratulations on your first car, Mia!} {O:Let's take it for a test drive} {W:around the block,} {E:I'm so excited.}
Line: {R:Mr and Mrs Kim, you need room for three kids} - {W:this big blue van in the showroom} {O:has seven seats,} {E:I love it.}
Tuesday: {O:Car wash day!} {W:I'm washing every car on the lot} {E:and I'm so happy.}
Tuesday: {R:Mia} {O:is picking up her new car today,} {E:I'm so proud.}
Pose: arm stretched out, hand open -> {O:showing off the shiny red car} {W:in the showroom}
Pose: bent over, hands on knees -> {O:checking the tires} {W:on the car lot}
Pose: both hands on a steering wheel -> {O:taking a test drive} with {R:my new customer}
`,
  "Plumber": `
Angle: saves the day with a wrench and a happy whistle
R: plumber and homeowner | plumber and apprentice | plumber and a worried grandma
O: fix a leaky sink | unclog a drain | find a lost ring in the pipe
W: under a kitchen sink | in a tiny bathroom | in a wet basement
E: calm | proud | a bit soggy
Line: {C:I'm Mike the plumber,} {R:and you're Mrs Hill} - {W:I'm under your kitchen sink} {O:fixing the leak in five minutes,} {E:no stress.}
Line: {R:Grandma Rose,} {O:I found your wedding ring} {W:in the bathroom pipe} - {E:I'm so happy.}
Line: {R:Welcome to your first day, Lou,} {W:this basement is your classroom} - {O:hand me the big wrench,} {E:I'm excited.}
Tuesday: {O:Three leaky sinks today.} {W:My van smells like soap} {E:and I'm happy.}
Tuesday: {R:Lou,} {O:you're fixing the drain today,} {E:I'm so proud of you.}
Pose: lying on my back, arms up -> {O:fixing the pipe} {W:under the kitchen sink}
Pose: crouching, reaching down -> {O:pulling a lost ring} {W:out of the drain}
Pose: arms out wide -> {O:showing how big the puddle was} to {R:Mrs Hill}
`,
  "Electrician": `
Angle: makes the lights come on and feels like a wizard every time
R: electrician and homeowner | electrician and apprentice | electrician and a shop owner
O: fix the lights | hang fairy lights | find the right switch
W: on a ladder in a kitchen | in a dark basement | in a shop window
E: careful | proud | excited when the lights work
Line: {C:I'm Sam the electrician,} {W:up this ladder in your kitchen} - {O:your new lights are almost in,} {E:I'm so excited.}
Line: {R:Mr Kim, your bakery looks great} - {O:I'm putting fairy lights} {W:in your shop window} {E:and I love it.}
Line: {R:Jo, you're my apprentice now,} {W:this basement is dark} - {O:so hand me the flashlight,} {E:calm and careful.}
Tuesday: {O:I'm fixing doorbells all day.} {E:Ding dong, I love it.}
Tuesday: {W:The whole street lost power,} {O:so I'm going house to house.} {E:Busy and happy.}
Pose: on tiptoes, arms up -> {O:changing a light bulb} {W:in the kitchen}
Pose: crouching, looking at a wall -> {O:fixing a plug} {W:behind the couch}
Pose: arms up in victory -> {E:so happy} because {O:the lights just came on}
`,
  "Janitor": `
Angle: knows every secret corner of the building and keeps it shining
R: janitor and teacher | janitor and students | janitor and the principal
O: clean up a spill | fix a squeaky door | keep the halls shiny
W: in a school hallway | in an office building at night | in the gym after a dance
E: proud | calm | a bit tired
Line: {C:I'm Earl, the school janitor,} {W:and this hallway is my pride} - {O:I just waxed the floor,} {E:it's so shiny.}
Line: {R:Ms Clark,} {W:the spill in your classroom is gone} - {O:I fixed the squeaky door too,} {E:I'm happy to help.}
Line: {R:Kids, you did great at the dance} - {W:the gym is a mess,} {O:so I'll sweep it all tonight,} {E:no problem.}
Tuesday: {O:Window washing day!} {W:The whole school will sparkle} {E:and I'm so proud.}
Tuesday: {W:The halls are quiet,} {O:so I'm fixing the squeaky locker.}
Pose: leaning on a broom -> {E:taking a happy break} {W:in the empty hallway}
Pose: bent over, arms swinging -> {O:mopping up spilled juice} {W:in the lunch room}
Pose: reaching up high -> {O:changing a light} {W:in the gym}
`,
  "Security guard": `
Angle: serious about the rules but secretly the nicest person in the building
R: guard and visitor | guard and an office worker | two guards on the night shift
O: check name badges | find a lost item | keep the building safe
W: at the front desk | in a shopping mall | at a museum at night
E: watchful | friendly | a bit bored
Line: {C:I'm Bruce, the security guard,} {R:and you're Amy who forgets her badge} - {O:here's a visitor pass} {W:from the front desk,} {E:no problem.}
Line: {W:Welcome to the mall!} {O:I found your lost teddy bear,} {R:little Max,} {E:I'm so happy.}
Line: {R:Rita, my night shift partner,} {W:the museum is so quiet tonight} - {O:let's walk past the dinosaurs,} {E:I love this part.}
Tuesday: {W:Quiet night at the museum.} {O:I'm reading my book and checking the doors.}
Tuesday: {R:Amy forgot her badge again,} {E:and I'm smiling} {O:as I print a new one.}
Pose: arms crossed, standing tall -> {O:guarding the front door} {W:of the mall}
Pose: holding a flashlight up -> {O:checking the dark hallway} {W:at the museum}
Pose: one hand up, palm out -> {O:checking a name badge} at {W:the front desk}
`,
  "Pilot": `
Angle: calm, cheerful voice over the speaker and loves a smooth landing
R: pilot and co-pilot | pilot and passengers | pilot and a kid visiting the cockpit
O: land the plane smoothly | make a friendly announcement | show a kid the cockpit
W: in the cockpit | on the runway | in the airport lounge
E: calm | proud | excited about clouds
Line: {C:This is Captain Rae speaking} - {W:we're flying over the snowy mountains,} {O:landing in twenty minutes,} {E:and I'm so happy.}
Line: {R:Hi Leo, welcome to my cockpit!} {O:You can push the button for the seatbelt sign} {E:and I'm so excited for you.}
Line: {R:Tom, best co-pilot ever,} {W:the runway is clear} - {O:let's take off,} {E:I love this part.}
Tuesday: {O:Flight to Chicago again!} {E:I love the clouds} {W:over the lake.}
Tuesday: {R:My co-pilot Tom} {O:brought muffins} {W:for the cockpit} {E:and I'm thrilled.}
Pose: arms forward, holding a wheel -> {O:landing the plane} {E:very smoothly}
Pose: hand on ear -> {O:talking to the control tower} {W:from the cockpit}
Pose: waving with both arms -> {O:saying goodbye} to {R:my passengers} {W:at the plane door}
`,
  "Flight attendant": `
Angle: always smiling, always calm, always has a spare pretzel
R: flight attendant and passenger | two flight attendants | flight attendant and a kid flying alone
O: serve snacks | help someone find a seat | show the safety demo
W: in the plane aisle | in the tiny plane kitchen | at the plane door
E: cheerful | calm | a bit tired on a long flight
Line: {C:I'm Kelly, your flight attendant,} {W:welcome on board} - {O:your seat is 12A by the window,} {E:enjoy the flight.}
Line: {R:Little Sam, you're flying alone today,} {O:so you get extra pretzels} {W:in seat 3B} - {E:I'm so proud of you.}
Line: {R:Jen, my favourite crew partner,} {W:the snack cart is ready} - {O:you do drinks, I do cookies,} {E:I love this team.}
Tuesday: {O:Pretzels or cookies.} {W:I'm pushing the cart down the aisle} {E:with a big smile.}
Tuesday: {W:Short flight today,} {O:so I'm doing the safety demo extra fast.}
Pose: arms out to the sides, pointing -> {O:showing the exits} {W:in the plane aisle}
Pose: pushing forward, hands low -> {O:pushing the snack cart} {W:down the aisle}
Pose: bending down, smiling -> {O:giving a kid a pilot sticker} {E:happily}
`,
  "Hotel concierge": `
Angle: knows the best restaurant, the best show and the shortest way to the beach
R: concierge and hotel guest | concierge and a honeymoon couple | concierge and the bellhop
O: book a dinner table | give directions | surprise a guest
W: at the hotel front desk | in the fancy lobby | by the hotel elevator
E: polite | helpful | very proud of the city
Line: {C:I'm Henri, the hotel concierge,} {R:and you're our guest in room 204} - {O:I booked you the best pizza place in town,} {E:you'll love it.}
Line: {R:Congratulations, newlyweds!} {W:Welcome to the Grand Hotel} - {O:there's chocolate on your pillow,} {E:I'm so happy for you.}
Line: {W:The beach is two streets that way} - {R:Mr Ford,} {O:I packed your beach towels,} {E:enjoy your day.}
Tuesday: {O:Jazz night in the lobby!} {E:I'm so excited} {R:for all our guests.}
Tuesday: {W:The lobby is quiet,} {O:so I'm polishing the bell on my desk.}
Pose: pointing far away -> {O:giving directions to the beach} {W:from the hotel door}
Pose: bowing a little -> {O:welcoming a guest} {W:in the lobby}
Pose: holding a phone to my ear -> {O:booking a dinner table} for {R:the newlyweds}
`,
  "Farmer": `
Angle: up with the sun and talks to every cow by name
R: farmer and farmhand | farmer and visiting kids | farmer and a neighbour
O: milk the cows | pick the apples | sell veggies at the market
W: in the barn | in the field | at the farmers market
E: proud | calm | tired but happy
Line: {C:I'm Farmer Ruth,} {W:and this is my red barn} - {O:let's milk Daisy the cow,} {E:she's my favourite.}
Line: {R:Welcome, school kids!} {W:These are my apple trees} - {O:you can each pick one apple,} {E:I'm so excited.}
Line: {R:Tom, best neighbour,} {W:here at the farmers market} - {O:I saved you the biggest pumpkin,} {E:I'm so proud of it.}
Tuesday: {O:Egg day!} {W:The hens laid twelve eggs} {E:and I'm so happy.}
Tuesday: {W:The tractor is fixed,} {O:so I'm ploughing the field all day.}
Pose: crouching, hands low -> {O:milking Daisy the cow} {W:in the barn}
Pose: reaching up high -> {O:picking apples} {W:in the orchard}
Pose: hands on hips, looking out -> {E:so proud} of {W:my corn field}
`,
  "Vet": `
Angle: gentle with every animal and talks to them like little friends
R: vet and pet owner | vet and nurse | vet and a kid with a hamster
O: check a puppy | calm a nervous cat | give a pet a treat after a check-up
W: at the vet clinic | on a farm | in the waiting room
E: gentle | caring | soft-hearted
Line: {C:I'm Dr Ana the vet,} {R:and this is your puppy, Biscuit} - {O:he just needs a little check-up,} {E:he's so sweet.}
Line: {R:Hi Lily, your hamster Nibbles is perfect} - {O:he just ate too many seeds} {W:here at the clinic,} {E:I'm so happy.}
Line: {W:Welcome to the farm,} {R:Farmer Ruth} - {O:I'm checking your goats today,} {E:I love goats.}
Tuesday: {O:Puppy check-up day!} {W:The waiting room is full of wagging tails} {E:and I love it.}
Tuesday: {R:Biscuit the puppy} {O:came back just for treats} {E:and I'm so happy.}
Pose: crouching, hand out -> {O:calling a shy cat} {W:in the clinic}
Pose: holding something small in two hands -> {O:checking a tiny hamster} {E:very gently}
Pose: bent over, head down -> {O:listening to a puppy's heart} {W:on the exam table}
`,
  "Reporter": `
Angle: turns the tiniest local story into big news, with full energy
R: reporter and camera person | reporter and a local hero | reporter and the news anchor
O: report the big news | interview a person | get the story before deadline
W: live on the street | at the town fair | in the news studio
E: excited | serious | out of breath
Line: {C:I'm Jill Ray, live from the town fair,} {W:here by the giant pumpkin} - {O:it just won first prize,} {E:I'm thrilled.}
Line: {R:This is Mrs Lee, today's local hero} - {O:she found a lost dog} {W:on Main Street,} {E:what a happy day.}
Line: {R:Back to you, Tom, in the studio} - {O:the duck parade is crossing the road now} {W:at the park,} {E:it's adorable.}
Tuesday: {W:Live from the library,} {O:big news, there's a new bench.} {E:I'm so excited.}
Tuesday: {W:Live from the bakery,} {O:the muffins are fresh.} {E:Very exciting.}
Pose: holding a mic forward -> {O:interviewing a local hero} {W:on Main Street}
Pose: pointing behind me -> {O:showing the giant pumpkin} {W:at the fair}
Pose: hand on ear -> {O:listening to the studio} {E:very seriously}
`,
  "Coach": `
Angle: big voice, big heart, believes this team can do anything
R: coach and team | coach and star player | coach and a nervous new kid
O: win the big game | give a pep talk | teach a new player
W: on the soccer field | in the locker room | on the sidelines
E: pumped | proud | a bit stressed
Line: {C:I'm Coach Ray,} {R:and you're my best team ever} - {W:in this locker room} {O:we're winning today,} {E:I believe in you.}
Line: {R:Mia, first game nerves are normal} - {O:just kick it to Sam} {W:out on the field,} {E:I'm so proud of you.}
Line: {W:Great practice on the field today,} {R:team} - {O:orange slices for everyone,} {E:you earned it.}
Tuesday: {O:Practice day!} {R:Team, ten laps then pizza,} {E:I love you all.}
Tuesday: {W:The field is muddy,} {O:so we're practising in the gym.}
Pose: hands cupped around mouth -> {O:shouting a play} {W:from the sidelines}
Pose: one knee down -> {O:giving a pep talk} to {R:my team}
Pose: both arms up -> {E:so happy} because {O:we just scored}
`,
  "Principal": `
Angle: proud of every student and loves a good announcement
R: principal and student | principal and teacher | principal and a parent
O: give the morning announcements | award a student | plan the school fair
W: in the principal's office | in the school hall | on the playground
E: proud | warm | a bit strict
Line: {C:Good morning, this is Principal Hall} - {O:today is pizza lunch} {W:in the cafeteria,} {E:I'm so excited.}
Line: {R:Jamie, you're student of the week!} {W:Come up on the stage} - {O:here's your gold star,} {E:I'm so proud.}
Line: {R:Ms Clark, best teacher in the building,} {W:welcome to my office} - {O:let's plan the school fair,} {E:I love this.}
Tuesday: {O:Fire drill at ten.} {W:Everyone lines up on the field,} {E:calm and quiet.}
Tuesday: {R:Jamie} {O:read the morning news today} {E:and I'm so proud.}
Pose: holding a mic, chin up -> {O:giving the morning announcement} {W:in the school hall}
Pose: both hands up, waving -> {O:greeting kids} {W:at the school gate}
Pose: arms out, holding something -> {O:handing out a prize} to {R:student of the week}
`,
  "Middle manager": `
Angle: loves a meeting, a clipboard and a team pizza party
R: manager and team | manager and the big boss | manager and new hire
O: run the weekly meeting | plan the office party | finish the report
W: in the office | in a meeting room | at the break room coffee machine
E: busy | eager | a bit stressed
Line: {C:I'm Dave, the team manager,} {W:welcome to the Monday meeting} - {O:first up is the pizza party,} {E:I'm so excited.}
Line: {R:Welcome to the team, Priya} - {O:your desk is by the window} {W:on the third floor,} {E:I'm so glad you're here.}
Line: {R:Great work, everyone} - {O:we finished the report} {W:in this meeting room} {E:and I'm so proud.}
Tuesday: {O:Team meeting at ten.} {R:I'm bringing donuts for everyone} {E:and I'm so happy.}
Tuesday: {W:The coffee machine is broken,} {O:so I'm making tea for the team.}
Pose: pointing at the wall -> {O:showing the sales chart} {W:in the meeting room}
Pose: holding up a clipboard -> {O:checking the to-do list} {E:with pride}
Pose: leaning on a desk -> {O:checking in} with {R:my new team member}
`,
  "IT guy": `
Angle: calm computer hero whose favourite fix is turning it off and on again
R: IT helper and office worker | IT helper and the boss | IT helper and a grandpa
O: fix a frozen computer | set up a printer | find the lost file
W: at an office desk | in the server room | at grandpa's house
E: calm | patient | quietly proud
Line: {C:I'm Mark from IT} - {W:here at your desk} {O:I turned it off and on again,} {R:Pam,} {E:and I'm so proud.}
Line: {R:Grandpa, your printer works now} - {W:in your kitchen} {O:it prints your crossword,} {E:I'm so happy.}
Line: {W:Welcome to the server room,} {R:new guy Ben} - {O:the blue cables go here,} {E:it's so calm in here.}
Tuesday: {O:Password reset day.} {R:Everyone in the office gets a new one,} {E:I love it.}
Tuesday: {W:The printer jammed again,} {O:so I'm fixing it with my lucky pen.}
Pose: crouching low -> {O:plugging in a cable} {W:under Pam's desk}
Pose: leaning in, typing fast -> {O:finding the lost file} {E:calmly}
Pose: arms up in victory -> {E:so proud} because {O:the printer works}
`,
  "Telemarketer": `
Angle: super cheerful phone voice, even for a call about window cleaning
R: caller and person at home | caller and the team leader | two callers at desks
O: sell window cleaning | make a cheerful call | get one yes today
W: at a call centre desk | in a busy phone room | at home on a headset
E: cheerful | hopeful | a bit tired
Line: {C:Hi Mrs Brown, Sally here from Shiny Windows} - {O:we clean all your windows for ten dollars,} {E:I'm so happy to call you.}
Line: {R:Boss, I got a yes!} {W:Right here at desk nine} - {O:Mr Lee wants carpet cleaning,} {E:I'm so proud.}
Line: {R:Jo, you're the best desk buddy} - {W:in this busy phone room} {O:let's make one hundred calls,} {E:I'm so pumped.}
Tuesday: {O:I'm selling garden gnomes today.} {E:Big smile} {W:at my desk.}
Tuesday: {W:My headset is fixed,} {O:so I'm calling everyone on Pine Street.}
Pose: hand on ear, leaning forward -> {O:making a cheerful call} {W:at my desk}
Pose: fist in the air -> {E:so happy} because {O:someone said yes}
Pose: slumped low -> {E:a bit tired} after {O:fifty calls}
`,
  "Influencer": `
Angle: films everything, loves everyone, says hi guys to a sandwich
R: influencer and fan | influencer and camera friend | influencer and their mum
O: film a video | try a new snack | get more likes
W: in a bright bedroom | at a cafe | at the beach
E: bubbly | excited | a little dramatic
Line: {C:Hi guys, it's Zoe,} {W:live from my favourite cafe} - {O:I'm trying the pink latte,} {E:I'm so excited.}
Line: {R:Mum, you're in my video today} - {O:show everyone your famous pancakes} {W:in our kitchen,} {E:they'll love you.}
Line: {R:Thanks for filming, Leo, best camera friend} - {W:this beach is perfect,} {O:let's film the sunset dance,} {E:I'm so happy.}
Tuesday: {O:New video day!} {W:I'm filming my cat in the garden} {E:and it's adorable.}
Tuesday: {R:Hi guys,} {O:today I'm reviewing a plain bagel.} {E:I love it.}
Pose: arm stretched up, holding a phone -> {O:taking a selfie} {W:at the beach}
Pose: hands making a heart -> {O:thanking my fans} {E:with love}
Pose: leaning down, phone out -> {O:filming my lunch} {W:at the cafe}
`,
  "Wedding planner": `
Angle: has a plan for everything and cries at every wedding
R: planner and bride | planner and groom | planner and the cake maker
O: make the wedding perfect | find the missing rings | set up the chairs on time
W: at a garden wedding | in a big party hall | at the cake shop
E: busy | emotional | proud
Line: {C:I'm Gina, your wedding planner} - {W:the garden looks perfect,} {O:the chairs are ready,} {E:and I'm already crying.}
Line: {R:Tom, you're the calmest groom ever} - {O:I found the rings} {W:in the flower pot,} {E:I'm so relieved.}
Line: {W:Welcome to the cake shop,} {R:Amy and Tom} - {O:let's taste the lemon cake,} {E:I'm so excited.}
Tuesday: {O:Three weddings this week,} {W:and this one's in a barn.} {E:I love it.}
Tuesday: {R:The cake maker} {O:delivered the cake early} {E:and I'm so happy.}
Pose: arms up, holding something -> {O:putting flowers on the arch} {W:in the garden}
Pose: hands on cheeks -> {E:crying happy tears} at {W:the wedding}
Pose: pointing in all directions -> {O:telling everyone where to sit} {W:in the party hall}
`,
  "Street musician": `
Angle: plays happy songs on the corner and makes everyone's day a bit brighter
R: musician and passer-by | musician and a dancing kid | two musicians sharing a corner
O: play a happy song | get a crowd dancing | play a song request
W: on a busy street corner | in a subway station | in the town square
E: joyful | relaxed | proud
Line: {C:I'm Leo, I play guitar} {W:on this corner every day} - {O:this song is for you,} {R:my best dancing fan,} {E:I'm so happy.}
Line: {R:Little girl in the yellow coat,} {O:this song is your request} {W:here in the town square} - {E:I love it.}
Line: {R:Hey Sam, let's share this corner} - {O:you play drums, I sing} {W:outside the bakery,} {E:so fun.}
Tuesday: {O:Same three songs as Monday.} {W:The square is sunny} {E:and I'm happy.}
Tuesday: {R:Mr Ford} {O:gave me a muffin for my song} {E:and I'm grateful.}
Pose: strumming a guitar -> {O:playing a happy song} {W:on the street corner}
Pose: bowing low -> {O:thanking my crowd} {E:with joy}
Pose: one arm up, mouth open -> {O:singing the big ending} {W:in the subway station}
`,
  "Pop star": `
Angle: big star, bigger heart, still loves the hometown diner
R: pop star and fan | pop star and backup dancer | pop star and their mum
O: perform the big show | sign an autograph | sing at a kid's birthday
W: on a big stage | at the hometown diner | backstage
E: excited | grateful | a bit nervous before the show
Line: {C:I'm Star Lee the pop singer} - {R:Mia, my biggest fan,} {O:here's your signed poster} {W:backstage,} {E:I'm so happy.}
Line: {W:Back at my hometown diner!} {R:Hi Mum} - {O:I'll have my usual grilled cheese,} {E:I missed this.}
Line: {R:Dancers, you're the best} - {W:the big stage is ready,} {O:so let's do the spin move,} {E:I'm a bit nervous.}
Tuesday: {O:Rehearsal day.} {W:The stage lights are so bright} {E:and I love it.}
Tuesday: {R:Mum} {O:packed me a sandwich for the tour bus,} {E:I'm so grateful.}
Pose: one arm up, holding a mic -> {O:singing the big high note} {W:on stage}
Pose: kneeling, arm out -> {O:signing an autograph} for {R:a little fan}
Pose: arms out wide -> {E:so grateful} for {O:the cheering crowd}
`,
  "Detective": `
Angle: solves tiny everyday mysteries with total seriousness
R: detective and partner | detective and a worried neighbour | detective and a kid helper
O: find the missing cookies | solve the case of the lost sock | follow the clues
W: in a cosy office | in a kitchen | at the park
E: serious | curious | proud
Line: {C:I'm Detective Ray,} {W:and this kitchen is the scene} - {O:the cookies are missing,} {E:and I'm on it.}
Line: {R:Mrs Hill, I solved it} - {O:your lost sock was in the dryer} {W:in the basement,} {E:I'm so proud.}
Line: {R:Max, my junior detective,} {W:the muddy paw prints go to the garden} - {O:let's follow them,} {E:this is exciting.}
Tuesday: {O:New case, the missing TV remote.} {W:It's in the couch.} {E:Case closed, I'm so proud.}
Tuesday: {W:Quiet day at the office,} {O:so I'm cleaning my magnifying glass.}
Pose: crouching low, peering down -> {O:checking muddy paw prints} {W:in the garden}
Pose: hand on chin, thinking -> {O:solving the cookie mystery} {E:very seriously}
Pose: pointing at someone -> {O:finding the cookie thief,} {R:our family dog}
`,
  "Judge": `
Angle: serious robe, fair heart, and very small, silly cases
R: judge and lawyer | judge and two neighbours | judge and the court helper
O: settle an argument fairly | judge the pie contest | keep order in the court
W: in a courtroom | at the county fair | at a dog show
E: fair | serious | secretly amused
Line: {C:I'm Judge Brown,} {W:welcome to my courtroom} - {O:today's case is about a borrowed lawnmower,} {E:and I'm ready.}
Line: {R:Mr Lee and Mrs Hill, you're both good neighbours} - {O:so you share the apple tree} {W:on the fence line,} {E:case closed with a smile.}
Line: {W:Welcome to the county fair!} {C:I'm the pie judge} - {O:this cherry pie wins first prize,} {E:delicious.}
Tuesday: {O:Pie contest at noon.} {W:I'm judging at the fair} {E:and I'm so hungry.}
Tuesday: {W:Quiet courtroom today,} {O:so I'm polishing my little hammer.}
Pose: arm up, about to bang a hammer -> {O:closing the case} {W:in the courtroom}
Pose: leaning forward, squinting -> {O:judging the cutest dog} {W:at the dog show}
Pose: hand up, palm out -> {O:calling for quiet} {E:very calmly}
`,
  "Magician": `
Angle: big flourishes, tiny tricks, and pure joy when it works
R: magician and helper | magician and birthday kid | magician and audience
O: do a card trick | pull a bunny from a hat | make the birthday kid laugh
W: at a birthday party | on a small stage | at a street fair
E: dramatic | proud | nervous when a trick goes wrong
Line: {C:I'm the Great Marco,} {R:and you're my helper, Lily} - {O:pick any card} {W:here at the party,} {E:I'm so excited.}
Line: {R:Happy birthday, Tom!} {W:In this backyard} {O:I'll pull a bunny from my hat,} {E:this is my best trick.}
Line: {W:Welcome to my little stage} - {O:the coin is gone,} {R:my friends,} {E:I'm so proud.}
Tuesday: {O:I'm practising card tricks all day.} {R:My cat is a great audience.}
Tuesday: {W:Birthday party at the park,} {O:so I'm packing my bunny and my cape.}
Pose: arms up, wiggling fingers -> {O:doing a magic spell} {W:on stage}
Pose: reaching down into something -> {O:pulling a bunny out of my hat} {E:with pride}
Pose: holding up one finger -> {O:showing the coin is gone} to {R:the birthday kid}
`,
  "Clown": `
Angle: big shoes, big laugh, and a heart full of balloon animals
R: clown and birthday kid | two clown buddies | clown and a shy kid
O: make balloon animals | make a kid laugh | do a silly fall
W: at a kid's birthday party | at the circus | at a school fair
E: silly | joyful | a bit clumsy
Line: {C:I'm Bobo the clown,} {R:and you're the birthday girl, Ava} - {O:here's your balloon giraffe,} {E:I'm so happy.}
Line: {R:Pip, my clown buddy,} {W:the circus tent is full} - {O:let's do our pie trick,} {E:I'm so excited.}
Line: {W:Welcome to the school fair!} {O:I'm painting stars on faces} {R:for all the kids,} {E:it's so fun.}
Tuesday: {O:Balloon practice day.} {W:My living room is full of balloon dogs} {E:and I love it.}
Tuesday: {R:Pip} {O:borrowed my big red shoes again} {E:and I'm a bit annoyed.}
Pose: twisting arms in front -> {O:making a balloon dog} for {R:the birthday kid}
Pose: falling backwards, arms flailing -> {O:doing a silly fall} {E:on purpose}
Pose: big wave with both hands -> {O:saying hi to the crowd} {W:at the circus}
`,
  "Fortune teller": `
Angle: tiny, lovely predictions that always come true by lunchtime
R: fortune teller and customer | fortune teller and a nervous teen | fortune teller and a neighbour
O: tell a tiny happy future | read a palm | predict lunch
W: in a small tent at the fair | at a kitchen table | at a beach stall
E: mysterious | warm | very sure
Line: {C:I'm Madame Rosa,} {W:welcome to my little tent} - {O:I see a free donut in your future,} {E:how lovely.}
Line: {R:Sam, your palm says} {O:you'll find a nice pen today} {W:on the bus,} {E:I'm so happy for you.}
Line: {R:Neighbour Joe,} {W:my crystal ball on the kitchen table} {O:says your tomatoes will be huge,} {E:I'm thrilled.}
Tuesday: {O:I predict soup for lunch.} {E:I'm very sure,} {W:I can smell it from my tent.}
Tuesday: {R:My neighbour} {O:will find a parking spot today.} {E:Lovely.}
Pose: hands hovering, eyes wide -> {O:seeing a lovely future} {W:in my crystal ball}
Pose: holding a hand, looking close -> {O:reading a palm} for {R:my customer}
Pose: hand on forehead, eyes closed -> {O:seeing a free cookie} {E:very mysteriously}
`,
  "Astronaut": `
Angle: floats around, misses pizza, and loves the view of home
R: astronaut and crewmate | astronaut and mission control | astronaut and a school class on video
O: fix the space station | eat lunch in space | wave to Earth
W: on the space station | on the moon | in a rocket
E: amazed | calm | missing pizza
Line: {C:I'm Commander Sky,} {W:here on the space station} - {O:I'm fixing the solar panel,} {E:the view is amazing.}
Line: {R:Hello, class at Hill School!} {W:From space} {O:I'm showing you a floating apple,} {E:I'm so excited.}
Line: {R:Mission control, hi Bob} - {W:I'm on the moon,} {O:planting our little flag,} {E:I'm so proud.}
Tuesday: {O:Space laundry day.} {W:My socks are floating everywhere} {E:and I'm laughing.}
Tuesday: {R:Mission control} {O:sent up fresh oranges} {E:and I'm so happy.}
Pose: arms and legs floating out -> {O:floating to lunch} {W:in the space station}
Pose: big slow steps, arms out -> {O:walking on the moon} {E:totally amazed}
Pose: face close to a window -> {O:waving to Earth} {E:and missing pizza}
`,
  "Cowboy": `
Angle: big hat, slow walk, and a deep love for a good horse
R: cowboy and horse | cowboy and ranch hand | cowboy and a city visitor
O: round up the cows | teach someone to ride | cook beans by the campfire
W: on the ranch | at the campfire | at the rodeo
E: relaxed | proud | a bit saddle sore
Line: {C:I'm Cowboy Hank,} {R:and this is my horse, Daisy} - {O:we're rounding up the cows} {W:on the ranch,} {E:I love this.}
Line: {R:Welcome, city friend!} {W:This campfire is for you} - {O:I'm cooking the beans,} {E:I'm so happy.}
Line: {R:Jess, best ranch hand,} {W:the rodeo is today} - {O:let's brush the horses,} {E:I'm so proud.}
Tuesday: {O:Fence fixing day.} {W:The ranch is sunny} {E:and I'm happy.}
Tuesday: {R:Daisy my horse} {O:got new shoes today.} {E:She's so proud.}
Pose: legs bent wide, arms forward -> {O:riding my horse} {W:across the ranch}
Pose: one arm swinging over my head -> {O:throwing my rope} {W:at the rodeo}
Pose: crouching, hands out -> {O:warming my hands} {W:by the campfire}
`,
  "Pirate": `
Angle: a pirate on a family boat tour, all arr and no trouble
R: pirate captain and crew | pirate and a family on the boat tour | pirate and parrot
O: run the family boat tour | find buried treasure [cookies; old map; chocolate coins] | teach a pirate song
W: on a tour boat | on the beach | at the harbour
E: jolly | loud | proud of the boat
Line: {C:Arr, I'm Captain Pete} - {R:welcome aboard, Smith family,} {O:today we look for dolphins} {W:in the bay,} {E:I'm so excited.}
Line: {R:Polly, my parrot,} {W:the beach is right here} - {O:let's dig up the treasure chest of cookies,} {E:I'm so happy.}
Line: {R:Crew, you're the best} - {O:everyone sing the pirate song} {W:on the deck,} {E:arr, I love it.}
Tuesday: {O:Dolphin tour at ten.} {W:The harbour is calm} {E:and I'm jolly.}
Tuesday: {R:Polly the parrot} {O:learned a new word today.} {E:I'm so proud.}
Pose: hand over eyes, looking far -> {O:looking for dolphins} {W:from the boat}
Pose: bent over, digging -> {O:digging for treasure} {W:on the beach}
Pose: one foot up, hands on hips -> {E:so proud} of {W:my tour boat}
`,
  "King": `
Angle: grand and royal, but loves simple things like a good sandwich
R: king and royal helper | king and queen | king and a kid visitor
O: give a royal speech | host a royal picnic | judge the castle cake contest
W: in the throne room | in the castle garden | at the royal picnic
E: proud | jolly | a bit bored on the throne
Line: {C:I'm King Arthur,} {W:welcome to my throne room} - {O:today we have a royal picnic,} {E:I'm so jolly.}
Line: {R:Sir Ben, my best helper,} {O:bring me a cheese sandwich} {W:in the castle garden,} {E:I'm so hungry.}
Line: {R:Little visitor, welcome} - {O:you can wear my crown} {W:in the throne room,} {E:I'm so happy.}
Tuesday: {O:Royal sock day.} {W:The whole castle wears fun socks} {E:and I love it.}
Tuesday: {R:The queen} {O:picked the castle flowers today.} {E:So lovely.}
Pose: sitting tall, chin up -> {E:very proud} {W:on my throne}
Pose: arm out, pointing forward -> {O:giving a royal order} {R:to my helper}
Pose: one knee down, arm out -> {O:making a kid a knight} {W:in the castle garden}
`,
  "Queen": `
Angle: elegant, kind, and very serious about tea time
R: queen and king | queen and royal gardener | queen and a visiting kid
O: host the royal tea party | plant the royal roses | wave to the crowd
W: in the castle garden | on the royal balcony | in the grand hall
E: elegant | warm | proud
Line: {C:I'm Queen Rose,} {W:welcome to the royal tea party} - {O:try the lemon cake,} {E:I'm delighted.}
Line: {R:Tom, my royal gardener,} {W:these roses are perfect} - {O:let's plant more by the gate,} {E:I'm so happy.}
Line: {W:From my royal balcony} {O:I'm waving to all of you,} {R:my people,} {E:I love this day.}
Tuesday: {O:Royal tea at three} {W:in the castle garden.} {E:I'm delighted.}
Tuesday: {R:The king} {O:burned the royal toast again.} {E:I'm laughing.}
Pose: hand up, small wave -> {O:waving to the crowd} {W:from the balcony}
Pose: crouching, hands low -> {O:planting roses} {W:in the castle garden}
Pose: holding a little cup, pinky up -> {O:having royal tea} {E:very elegantly}
`,
  "Santa": `
Angle: jolly, busy, and loves cookies more than anyone
R: Santa and elf | Santa and a kid | Santa and Mrs Claus
O: deliver presents | check the list | feed the reindeer
W: at the North Pole workshop | on a rooftop | at the mall
E: jolly | busy | a bit full of cookies
Line: {C:Ho ho ho, I'm Santa,} {R:and you're Max} - {O:you're on the nice list} {W:here at the mall,} {E:I'm so happy.}
Line: {R:Buddy, my best elf,} {W:the workshop is full of toys} - {O:let's wrap the bikes next,} {E:I'm so excited.}
Line: {R:Mrs Claus, your cookies are the best} - {O:I'm feeding the reindeer} {W:in the barn,} {E:so jolly.}
Tuesday: {O:Toy painting day.} {W:The workshop smells like paint} {E:and I love it.}
Tuesday: {R:Mrs Claus} {O:made gingerbread for the elves} {E:and I'm so happy.}
Pose: arm over shoulder, bent forward -> {O:carrying a big sack of toys} {W:on the rooftop}
Pose: hand on belly, leaning back -> {E:laughing ho ho ho} {W:in the workshop}
Pose: holding a long list -> {O:checking the nice list} {E:very carefully}
`,
  "Superhero": `
Angle: super strong, super kind, and saves tiny everyday problems
R: superhero and sidekick | superhero and a neighbour | superhero and their mum
O: save a cat | carry the groceries | rescue a kite from a tree
W: on a rooftop | in the city park | at the grocery store
E: brave | proud | a bit too dramatic
Line: {C:I'm Captain Kind,} {R:and you're Mrs Lee} - {O:I'll carry your groceries} {W:to your car,} {E:it's my honour.}
Line: {R:Sidekick Sam,} {W:there's a kite in the park tree} - {O:let's save it,} {E:I'm so pumped.}
Line: {R:Mum, I saved a cat today} {W:on Main Street} - {O:and now I'm home for dinner,} {E:I'm so proud.}
Tuesday: {O:Cape washing day.} {W:My cape is drying on the line} {E:and I'm happy.}
Tuesday: {R:Mrs Lee} {O:needs help opening her jar of pickles.} {E:I'm on it.}
Pose: one fist up high -> {O:flying to the rescue} {E:bravely}
Pose: hands on hips, chest out -> {E:so proud} after {O:saving a kite}
Pose: arms up, holding something heavy -> {O:carrying a bus full of kids} {W:to school}
`,
  "Villain": `
Angle: an evil laugh, a silly plan, and no real harm to anyone
R: villain and sidekick | villain and hero | villain and their neighbour
O: take the last donut | hide the TV remote | be first in line at the bakery
W: in a secret lair | in the office break room | at the bakery
E: sneaky | proud | a bit grumpy
Line: {C:I'm Doctor Grump,} {W:welcome to my secret lair} - {O:today I hide every TV remote in town,} {E:mwa ha ha.}
Line: {R:Minion Max,} {W:the office break room is empty} - {O:take the last donut,} {E:I'm so sneaky.}
Line: {R:Captain Kind, my enemy,} {O:I took the best parking spot} {W:at the bakery} {E:and I'm so proud.}
Tuesday: {O:I'm swapping the sugar and the salt} {W:in the office kitchen.} {E:Mwa ha ha.}
Tuesday: {R:Minion Max} {O:forgot the evil plan at home.} {E:I'm a bit grumpy.}
Pose: rubbing hands together -> {O:planning to hide the remote} {E:so sneakily}
Pose: tiptoeing, arms up -> {O:sneaking the last donut} {W:out of the break room}
Pose: leaning back, arms wide -> {E:laughing my evil laugh} {W:in my lair}
`,
  "Wizard": `
Angle: very old, very wise, and mostly uses magic for chores
R: wizard and apprentice | wizard and a villager | two old wizard friends
O: make a potion | do the dishes with magic | teach a spell
W: in a tall tower | in a cosy cottage | at the village market
E: wise | proud | a bit forgetful
Line: {C:I'm Merlin the wizard,} {R:and you're my new apprentice, Pip} - {O:today's spell cleans the dishes} {W:in my tower,} {E:how exciting.}
Line: {W:Welcome to the village market!} {O:This potion makes your carrots grow,} {R:Farmer Ruth,} {E:I'm so proud of it.}
Line: {R:Old friend Zara,} {W:my cottage is a mess} - {O:let's tidy it with one spell,} {E:I'm so happy you're here.}
Tuesday: {O:Potion day.} {W:My tower smells like mint} {E:and I love it.}
Tuesday: {R:Pip} {O:turned my hat into a frog again.} {E:I'm a bit annoyed.}
Pose: arms up, holding a staff -> {O:casting a cleaning spell} {W:in my tower}
Pose: stirring a big pot -> {O:making a mint potion} {E:with pride}
Pose: hand on head, looking around -> {E:a bit forgetful,} {O:looking for my wand}
`,
  "Fairy godmother": `
Angle: sparkly, kind, and turns tiny wishes into tiny miracles
R: fairy godmother and godchild | fairy godmother and a tired mum | fairy godmother and a mouse helper
O: grant a wish | fix a ripped dress | turn a pumpkin into a car
W: in a garden at night | in a kitchen | at a school dance
E: sparkly | kind | a bit flustered
Line: {C:I'm your fairy godmother,} {R:Ella} - {O:your wish is a new pair of shoes} {W:for the school dance,} {E:I'm so happy.}
Line: {R:Kate, you tired mum,} {W:your kitchen is a mess} - {O:one wave and the dishes are done,} {E:you're welcome, dear.}
Line: {R:Little mouse, my best helper,} {W:in this pumpkin patch} {O:we're making a car,} {E:I'm so excited.}
Tuesday: {O:Wish day!} {R:Ella wished for a sandwich} {E:and I'm so proud of it.}
Tuesday: {W:My wand is at the repair shop,} {O:so I'm granting wishes by hand.}
Pose: arm out, waving a wand -> {O:granting a wish} {E:with sparkle}
Pose: crouching, hand out low -> {O:turning a pumpkin into a car} {W:in the garden}
Pose: arms spinning around -> {O:making a dress sparkle} {R:for Ella}
`,
  "Ghost": `
Angle: a friendly ghost who really wants to be a good roommate
R: ghost and roommate | ghost and the new family | two ghost friends
O: be a good roommate | help with the chores | stop scaring the cat
W: in an old house | in the attic | in a shared apartment kitchen
E: friendly | eager | a bit shy
Line: {C:I'm Gus the ghost,} {R:and you're my new roommate, Jen} - {O:I did the dishes} {W:in our kitchen,} {E:I want to be a great roommate.}
Line: {R:Welcome, new family!} {W:I live in the attic} - {O:I'll keep the floor creaks quiet,} {E:I'm so happy you're here.}
Line: {R:Jen,} {O:I folded your laundry} {W:in the living room} - {E:I'm a bit shy about it.}
Tuesday: {O:Bin day!} {W:I floated the bins to the curb} {E:and I'm so proud.}
Tuesday: {R:Jen} {O:says I can pick the movie tonight.} {E:I'm so happy.}
Pose: arms out, hands floppy -> {O:floating down the hallway} {E:very quietly}
Pose: peeking out from behind something -> {E:a bit shy} {O:about meeting the new family}
Pose: reaching high -> {O:dusting the top shelf} {W:in our apartment}
`,
  "Vampire": `
Angle: a polite night owl with very good manners and a love of tomato soup
R: vampire and roommate | vampire and neighbour | vampire and a dentist
O: make a new friend | join the night book club | stay out of the sun
W: in an old castle | at a midnight book club | at the all-night diner
E: polite | dramatic | sleepy in the daytime
Line: {C:I'm Count Velvet,} {W:welcome to my castle} - {O:I made tomato soup for you,} {R:my new neighbour,} {E:I'm delighted.}
Line: {R:Hi book club!} {W:Midnight in the library is perfect} - {O:I picked a funny book,} {E:I'm so excited.}
Line: {R:Dr Lee, thanks for cleaning my fangs} - {O:I'll brush twice a day} {W:in my castle bathroom,} {E:I promise.}
Tuesday: {O:Night shift at the bakery.} {E:I love the smell} {W:of fresh bread at 3 am.}
Tuesday: {W:The sun is up,} {O:so I'm napping in my comfy box.} {E:Very sleepy.}
Pose: arm up, cape over face -> {O:hiding from the morning sun} {E:dramatically}
Pose: bowing low -> {O:greeting my new neighbour} {W:at the castle door}
Pose: lying flat, arms crossed on chest -> {O:taking a nap} {W:in my castle}
`,
  "Robot": `
Angle: very literal, very helpful, and learning what feelings are
R: robot and owner | robot and a kid | two robot friends
O: clean the house | learn to dance | make toast
W: in a family kitchen | in a robot factory | at a school science fair
E: beep-happy | confused | proud
Line: {C:I am Robo-7,} {R:hello, owner Jen} - {O:I made you toast} {W:in the kitchen,} {E:beep, I feel happy.}
Line: {W:Welcome to the science fair,} {R:hi kids} - {O:I can dance the robot,} {E:I am very proud.}
Line: {R:Max, my best kid friend,} {O:I folded your socks} {W:in your bedroom} - {E:beep boop, joy.}
Tuesday: {O:Vacuum day.} {W:I cleaned the whole living room} {E:and I feel proud.}
Tuesday: {R:Jen} {O:taught me a new joke.} {E:Beep, I am laughing.}
Pose: arms stiff, out in front -> {O:carrying a plate of toast} {W:to the table}
Pose: arms bent, jerky moves -> {O:learning to dance} {E:with joy}
Pose: one arm up, frozen still -> {O:waiting for new batteries} {W:in the kitchen}
`,
  "Alien": `
Angle: a friendly alien who copies human fashion, like a tie over a T-shirt
R: alien and new human friend | alien and a shop helper | two aliens on holiday
O: fit in with humans | try human food | make a human friend
W: at a clothes shop | at a burger place | in a spaceship parked in the yard
E: curious | excited | a bit confused
Line: {C:Hello, I am Zib from planet Zorp,} {W:here at the clothes shop} - {O:I want a tie for my T-shirt,} {E:I'm so excited.}
Line: {R:Human friend Dave,} {W:at this burger place} {O:I'm trying my first french fry,} {E:it is amazing.}
Line: {R:Welcome to my spaceship, neighbour} - {W:it's parked in your yard,} {O:I brought you space cookies,} {E:I'm so happy.}
Tuesday: {O:Human school day.} {E:I'm so excited} {R:to sit next to my friend Max.}
Tuesday: {W:The mall is open,} {O:so I'm buying socks for all four of my feet.}
Pose: hands at neck, pulling -> {O:fixing my tie over my T-shirt} {E:proudly}
Pose: hand up, palm out -> {O:saying hello the human way} {R:to my new friend}
Pose: leaning forward, staring -> {E:so curious} about {O:a human sandwich}
`,
});
