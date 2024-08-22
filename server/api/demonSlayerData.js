// charactersData.js

export const characters = [
  {
    id: 1,
    name: "Tanjiro Kamado",
    role: "Main Protagonist",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Water Breathing",
    techniques: [
      "Water Surface Slash",
      "Water Wheel",
      "Dance of the Fire God",
      "Constant Flux",
    ],
    family: [
      "Nezuko Kamado (Sister)",
      "Tanjuro Kamado (Father, deceased)",
      "Kie Kamado (Mother, deceased)",
    ],
    status: "Alive",
    personality:
      "Kind-hearted, determined, and empathetic. Strong sense of justice and a deep love for his family.",
    background:
      "Tanjiro is a young boy who becomes a Demon Slayer to avenge his family and find a cure for his sister Nezuko, who was turned into a demon.",
    achievements: [
      "Defeated Rui, a Lower Rank Five demon",
      "Unlocked the Sun Breathing technique",
      "Survived the Mugen Train incident",
    ],
    goals: [
      "Protect his sister Nezuko",
      "Avenge his family by defeating Muzan Kibutsuji",
    ],
    mentor: "Sakonji Urokodaki",
    voice_actor: { japanese: "Natsuki Hanae", english: "Zach Aguilar" },
    first_appearance: "Manga Chapter 1",
  },
  {
    id: 2,
    name: "Nezuko Kamado",
    role: "Supporting Protagonist",
    affiliation: ["Demon Slayer Corps (Unofficially)"],
    breathStyle: null,
    techniques: [
      "Blood Demon Art: Exploding Blood",
      "Enhanced Strength",
      "Size Manipulation",
    ],
    family: [
      "Tanjiro Kamado (Brother)",
      "Tanjuro Kamado (Father, deceased)",
      "Kie Kamado (Mother, deceased)",
    ],
    status: "Alive",
    personality:
      "Caring and gentle, though reserved due to her demon transformation. Strongly protective of her brother.",
    background:
      "Once a human, Nezuko was turned into a demon after a brutal attack on her family. Despite this, she retains some of her humanity and fights alongside Tanjiro.",
    achievements: [
      "Resisted her demon instincts to harm humans",
      "Played a pivotal role in battles against demons",
      "Unlocked the ability to manipulate her size",
    ],
    goals: ["Protect her brother Tanjiro", "Return to her human form"],
    mentor: null,
    voice_actor: { japanese: "Akari Kito", english: "Abby Trott" },
    first_appearance: "Manga Chapter 1",
  },
  {
    id: 3,
    name: "Zenitsu Agatsuma",
    role: "Supporting Protagonist",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Thunder Breathing",
    techniques: ["Thunderclap and Flash"],
    family: null,
    status: "Alive",
    personality:
      "Timid, cowardly, but fiercely loyal to his friends. Has a strong sense of duty despite his fear.",
    background:
      "Zenitsu was reluctantly trained as a Demon Slayer and struggles with his self-esteem. However, when unconscious or cornered, he demonstrates incredible skill with his Thunder Breathing technique.",
    achievements: [
      "Defeated demons single-handedly while unconscious",
      "Developed his own variation of Thunder Breathing",
      "Survived the battle on the Mugen Train",
    ],
    goals: [
      "Protect Nezuko and his friends",
      "Overcome his fears and become a stronger Demon Slayer",
    ],
    mentor: "Jigoro Kuwajima",
    voice_actor: { japanese: "Hiro Shimono", english: "Aleks Le" },
    first_appearance: "Manga Chapter 4",
  },
  {
    id: 4,
    name: "Inosuke Hashibira",
    role: "Supporting Protagonist",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Beast Breathing",
    techniques: ["Fang 1: Pierce", "Fang 3: Devour", "Spatial Awareness"],
    family: null,
    status: "Alive",
    personality:
      "Brash, aggressive, and competitive, but shows a softer side as he bonds with his friends.",
    background:
      "Raised by wild boars, Inosuke developed a unique and savage fighting style. He joins Tanjiro and Zenitsu in their quest to defeat demons.",
    achievements: [
      "Assisted in defeating several powerful demons",
      "Survived the battle on the Mugen Train",
    ],
    goals: [
      "Become the strongest fighter",
      "Prove his strength against powerful opponents",
    ],
    mentor: null,
    voice_actor: {
      japanese: "Yoshitsugu Matsuoka",
      english: "Bryce Papenbrook",
    },
    first_appearance: "Manga Chapter 21",
  },
  {
    id: 5,
    name: "Kyojuro Rengoku",
    role: "Flame Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Flame Breathing",
    techniques: [
      "First Form: Unknowing Fire",
      "Fifth Form: Flame Tiger",
      "Ninth Form: Rengoku",
    ],
    family: [
      "Shinjuro Rengoku (Father)",
      "Senjuro Rengoku (Younger Brother)",
      "Ruka Rengoku (Mother, deceased)",
    ],
    status: "Deceased",
    personality:
      "Passionate, optimistic, and deeply committed to protecting humanity. Strong sense of duty and justice.",
    background:
      "Kyojuro was one of the most powerful members of the Demon Slayer Corps. He sacrificed himself during the Mugen Train incident to protect the passengers and his comrades.",
    achievements: [
      "Defeated numerous demons as the Flame Hashira",
      "Protected over 200 passengers on the Mugen Train",
      "Inspired Tanjiro and his friends with his bravery",
    ],
    goals: [
      "Protect humanity from demons",
      "Live up to his mother's expectations",
    ],
    mentor: "Shinjuro Rengoku (Father)",
    voice_actor: { japanese: "Satoshi Hino", english: "Mark Whitten" },
    first_appearance: "Manga Chapter 44",
  },
  {
    id: 6,
    name: "Shinobu Kocho",
    role: "Insect Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Insect Breathing",
    techniques: [
      "Butterfly Dance: Caprice",
      "Dance of the Dragonfly: Compound Eye Hexagon",
      "Dance of the Bee Sting: True Flutter",
    ],
    family: [
      "Kanae Kocho (Older Sister, deceased)",
      "Kanao Tsuyuri (Adoptive Younger Sister)",
    ],
    status: "Deceased",
    personality:
      "Calm, cheerful, and has a mischievous side. Holds a deep hatred for demons due to her sister's death.",
    background:
      "Shinobu is the Insect Hashira known for her unique fighting style that incorporates poisons. Despite her small stature, she is a formidable fighter.",
    achievements: [
      "Killed numerous demons with her poison techniques",
      "Played a critical role in the battle against the Upper Rank demons",
    ],
    goals: [
      "Avenge her sister's death by defeating Upper Rank demons",
      "Find a way to coexist with demons despite her hatred for them",
    ],
    mentor: "Kanae Kocho (Sister)",
    voice_actor: { japanese: "Saori Hayami", english: "Erica Lindbeck" },
    first_appearance: "Manga Chapter 45",
  },
  {
    id: 7,
    name: "Muzan Kibutsuji",
    role: "Main Antagonist",
    affiliation: ["Demons"],
    breathStyle: null,
    techniques: [
      "Shape-Shifting",
      "Superhuman Strength and Speed",
      "Blood Demon Art",
    ],
    family: null,
    status: "Deceased",
    personality:
      "Cruel, manipulative, and has a god complex. Sees humans as mere tools for his survival.",
    background:
      "Muzan is the first demon and the progenitor of all other demons. He seeks to create a world where demons rule over humans.",
    achievements: [
      "Created the Twelve Kizuki",
      "Remained undefeated for over a thousand years",
    ],
    goals: ["Achieve true immortality", "Wipe out the Demon Slayer Corps"],
    mentor: null,
    voice_actor: { japanese: "Toshihiko Seki", english: "Greg Chun" },
    first_appearance: "Manga Chapter 10",
  },
  {
    id: 8,
    name: "Giyu Tomioka",
    role: "Water Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Water Breathing",
    techniques: ["Waterfall Basin", "Dead Calm", "Water Surface Slash"],
    family: null,
    status: "Alive",
    personality:
      "Reserved, stoic, and somewhat aloof. Deeply committed to his duty as a Hashira.",
    background:
      "Giyu is the Water Hashira who first encounters Tanjiro and Nezuko. Despite his strict exterior, he is compassionate and cares deeply for his comrades.",
    achievements: [
      "Survived numerous battles against powerful demons",
      "Played a key role in the final battle against Muzan Kibutsuji",
    ],
    goals: [
      "Protect humanity from demons",
      "Honor the memory of his fallen comrades",
    ],
    mentor: "Sakonji Urokodaki",
    voice_actor: { japanese: "Takahiro Sakurai", english: "Johnny Yong Bosch" },
    first_appearance: "Manga Chapter 1",
  },
  {
    id: 9,
    name: "Kanao Tsuyuri",
    role: "Supporting Character",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Flower Breathing",
    techniques: [
      "First Form: Breath of the Flower",
      "Final Form: Equinoctial Vermilion Eye",
    ],
    family: [
      "Kanae Kocho (Adoptive Sister, deceased)",
      "Shinobu Kocho (Adoptive Sister, deceased)",
    ],
    status: "Alive",
    personality:
      "Quiet, reserved, and initially emotionless due to her traumatic past. Gradually opens up as she bonds with others.",
    background:
      "Kanao was adopted by the Kocho sisters after being rescued from a life of abuse and slavery. She was trained as a Demon Slayer and eventually overcame her emotional detachment.",
    achievements: [
      "Survived the Final Selection to become a Demon Slayer",
      "Played a significant role in the battle against Upper Rank demons",
    ],
    goals: [
      "Live up to the expectations of her sisters",
      "Protect her comrades in the Demon Slayer Corps",
    ],
    mentor: "Kanae Kocho",
    voice_actor: { japanese: "Reina Ueda", english: "Brianna Knickerbocker" },
    first_appearance: "Manga Chapter 39",
  },
  {
    id: 10,
    name: "Genya Shinazugawa",
    role: "Supporting Character",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: null,
    techniques: ["Demon Eating to gain powers temporarily", "Gunmanship"],
    family: ["Sanemi Shinazugawa (Older Brother)"],
    status: "Deceased",
    personality:
      "Short-tempered, aggressive, but loyal and caring to those close to him. Struggles with his relationship with his brother.",
    background:
      "Genya is the younger brother of the Wind Hashira, Sanemi. Unlike traditional Demon Slayers, he cannot use Breathing techniques but instead gains demonic abilities temporarily by consuming demon flesh.",
    achievements: [
      "Assisted in the battle against Upper Rank demons",
      "Developed a unique fighting style utilizing demon powers",
    ],
    goals: [
      "Prove his worth as a Demon Slayer",
      "Reconcile with his brother Sanemi",
    ],
    mentor: null,
    voice_actor: { japanese: "Nobuhiko Okamoto", english: "Zeno Robinson" },
    first_appearance: "Manga Chapter 29",
  },
  {
    id: 11,
    name: "Sanemi Shinazugawa",
    role: "Wind Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Wind Breathing",
    techniques: [
      "First Form: Dust Whirlwind Cutter",
      "Seventh Form: Gale - Sudden Gusts",
      "Ninth Form: Idaten Typhoon",
    ],
    family: ["Genya Shinazugawa (Younger Brother)"],
    status: "Alive",
    personality:
      "Fierce, hot-headed, and deeply scarred by his past. Despite his harsh exterior, he cares deeply for his comrades.",
    background:
      "Sanemi became a Demon Slayer after a tragic incident involving his family. His harsh personality often masks the deep pain he carries, especially concerning his brother Genya.",
    achievements: [
      "Rose to the rank of Hashira within the Demon Slayer Corps",
      "Played a crucial role in the final battle against Muzan Kibutsuji",
    ],
    goals: ["Protect humanity from demons", "Avenge his family's death"],
    mentor: null,
    voice_actor: { japanese: "Tomoaki Maeno", english: "Kaiji Tang" },
    first_appearance: "Manga Chapter 44",
  },
  {
    id: 12,
    name: "Tengen Uzui",
    role: "Sound Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Sound Breathing",
    techniques: ["First Form: Roar", "Fifth Form: String Performance"],
    family: ["Suma Uzui (Wife)", "Makio Uzui (Wife)", "Hinatsuru Uzui (Wife)"],
    status: "Alive",
    personality:
      "Flamboyant, confident, and charismatic. Deeply cares for his wives and his fellow Demon Slayers.",
    background:
      "Tengen is a former ninja who became the Sound Hashira. He values life and does not believe in sacrificing others for the greater good. He is known for his flamboyant personality and his dedication to his family.",
    achievements: [
      "Defeated Upper Rank Six demons, Daki and Gyutaro, with the help of Tanjiro and his group",
      "Successfully protected his wives and comrades during the Entertainment District arc",
    ],
    goals: [
      "Protect his family and comrades",
      "Retire peacefully after defeating Upper Rank demons",
    ],
    mentor: null,
    voice_actor: { japanese: "Katsuyuki Konishi", english: "Ray Chase" },
    first_appearance: "Manga Chapter 45",
  },
  {
    id: 13,
    name: "Mitsuri Kanroji",
    role: "Love Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Love Breathing",
    techniques: [
      "First Form: Shivers of First Love",
      "Third Form: Catlove Shower",
      "Fifth Form: Swaying Love, Wildclaw",
    ],
    family: null,
    status: "Deceased",
    personality:
      "Gentle, emotional, and kind-hearted. Has a deep love for her friends and a strong sense of justice.",
    background:
      "Mitsuri is the Love Hashira, known for her superhuman strength and flexible body. Despite her gentle nature, she is a formidable warrior who fights passionately to protect those she loves.",
    achievements: [
      "Played a critical role in the battle against Upper Rank demons",
      "Sacrificed herself during the final battle against Muzan Kibutsuji",
    ],
    goals: [
      "Protect her comrades in the Demon Slayer Corps",
      "Find true love and happiness",
    ],
    mentor: null,
    voice_actor: { japanese: "Kana Hanazawa", english: "Kira Buckland" },
    first_appearance: "Manga Chapter 45",
  },
  {
    id: 14,
    name: "Muichiro Tokito",
    role: "Mist Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Mist Breathing",
    techniques: [
      "First Form: Low Clouds, Distant Haze",
      "Fifth Form: Sea of Clouds and Haze",
      "Seventh Form: Obscuring Clouds",
    ],
    family: null,
    status: "Deceased",
    personality:
      "Aloof, indifferent, and often forgetful, but highly focused and deadly in combat.",
    background:
      "Muichiro is the Mist Hashira, a prodigy who became a Hashira at a young age. Despite his airheaded demeanor, he is incredibly skilled and possesses a tragic past that fuels his determination.",
    achievements: [
      "Defeated Upper Rank demons in battle",
      "Played a significant role in the final battle against Muzan Kibutsuji",
    ],
    goals: [
      "Protect humanity from demons",
      "Honor the memory of his twin brother",
    ],
    mentor: null,
    voice_actor: { japanese: "Kengo Kawanishi", english: "Griffin Burns" },
    first_appearance: "Manga Chapter 45",
  },
  {
    id: 15,
    name: "Gyomei Himejima",
    role: "Stone Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Stone Breathing",
    techniques: [
      "First Form: Serpentinite Bipolar",
      "Third Form: Stone Skin",
      "Fifth Form: Arcs of Justice",
    ],
    family: null,
    status: "Deceased",
    personality:
      "Gentle, deeply religious, and highly compassionate. Despite his gentle nature, he is the strongest of the Hashira.",
    background:
      "Gyomei is the Stone Hashira, known as the strongest Hashira in the Demon Slayer Corps. Blind since childhood, he uses his heightened senses to fight demons. His strength and skill are unmatched, and he is respected by all.",
    achievements: [
      "Played a crucial role in the battle against Upper Rank demons",
      "Sacrificed himself during the final battle against Muzan Kibutsuji",
    ],
    goals: [
      "Protect humanity from demons",
      "Ensure the safety of his comrades",
    ],
    mentor: null,
    voice_actor: { japanese: "Tomokazu Sugita", english: "Crispin Freeman" },
    first_appearance: "Manga Chapter 45",
  },
  {
    id: 16,
    name: "Obanai Iguro",
    role: "Serpent Hashira",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Serpent Breathing",
    techniques: [
      "First Form: Winding Serpent Slash",
      "Third Form: Coil Choke",
      "Fifth Form: Slithering Serpent",
    ],
    family: null,
    status: "Deceased",
    personality:
      "Strict, cold, and deeply devoted to the Demon Slayer Corps. Despite his tough exterior, he has a soft spot for Mitsuri Kanroji.",
    background:
      "Obanai is the Serpent Hashira, a skilled and highly disciplined fighter. His harsh upbringing and the curse of his clan have shaped his stern personality, but he is unwavering in his dedication to the fight against demons.",
    achievements: [
      "Played a key role in the battle against Upper Rank demons",
      "Fought valiantly in the final battle against Muzan Kibutsuji",
    ],
    goals: [
      "Protect humanity from demons",
      "Reform the traditions of his cursed clan",
    ],
    mentor: null,
    voice_actor: {
      japanese: "Kenichi Suzumura",
      english: "Erik Scott Kimerer",
    },
    first_appearance: "Manga Chapter 45",
  },
  {
    id: 17,
    name: "Kokushibo (Michikatsu Tsugikuni)",
    role: "Upper Rank One",
    affiliation: ["Twelve Kizuki"],
    breathStyle: "Moon Breathing",
    techniques: [
      "First Form: Dark Moon, Evening Palace",
      "Fifth Form: Moon Spirit Calamitous Eddy",
      "Sixteenth Form: Moonbow, Half Moon",
    ],
    family: ["Yoriichi Tsugikuni (Twin Brother, deceased)"],
    status: "Deceased",
    personality:
      "Stoic, prideful, and filled with regret. He is driven by a deep sense of inadequacy compared to his twin brother Yoriichi.",
    background:
      "Kokushibo was once a human named Michikatsu Tsugikuni, the twin brother of the legendary swordsman Yoriichi Tsugikuni. Unable to surpass his brother, he became a demon and rose to the rank of Upper Rank One. His tragic story is intertwined with his complex feelings of envy and admiration for Yoriichi.",
    achievements: [
      "Rose to the highest rank among Muzan's Twelve Kizuki",
      "Fought against several Hashira simultaneously in the final battle",
    ],
    goals: [
      "Surpass his brother Yoriichi",
      "Serve Muzan Kibutsuji with unwavering loyalty",
    ],
    mentor: null,
    voice_actor: { japanese: "Ryotaro Okiayu", english: "Lucien Dodge" },
    first_appearance: "Manga Chapter 99",
  },
  {
    id: 18,
    name: "Akaza (Hakuji)",
    role: "Upper Rank Three",
    affiliation: ["Twelve Kizuki"],
    breathStyle: null,
    techniques: [
      "Destructive Death: Compass Needle",
      "Destructive Death: Leg Type - Crown Splitter",
      "Destructive Death: Final Form - Annihilation Type",
    ],
    family: ["Koyuki (Fiancée, deceased)"],
    status: "Deceased",
    personality:
      "Honorable and driven by a warrior's code. Akaza respects strength above all and despises the weak.",
    background:
      "Akaza was once a human martial artist named Hakuji, who became a demon after losing everything he loved. As Upper Rank Three, he is one of the most powerful and respected demons under Muzan. His tragic past and deep sense of honor make him a complex and formidable adversary.",
    achievements: [
      "Defeated multiple Hashira and high-ranking Demon Slayers",
      "Engaged in a climactic battle with Kyojuro Rengoku",
    ],
    goals: [
      "Become the strongest warrior",
      "Serve Muzan Kibutsuji with unwavering loyalty",
    ],
    mentor: null,
    voice_actor: { japanese: "Akira Ishida", english: "Lucien Dodge" },
    first_appearance: "Manga Chapter 62",
  },
  {
    id: 19,
    name: "Daki",
    role: "Upper Rank Six",
    affiliation: ["Twelve Kizuki"],
    breathStyle: null,
    techniques: ["Obi Sash Manipulation", "Obi Sash Slash"],
    family: ["Gyutaro (Brother, deceased)"],
    status: "Deceased",
    personality:
      "Sadistic, vain, and ruthless. She enjoys torturing her victims and is deeply loyal to her brother Gyutaro.",
    background:
      "Daki was once a human girl named Ume, who became a demon alongside her brother Gyutaro. Together, they hold the position of Upper Rank Six. Daki uses her beauty and cunning to lure in her victims, making her a dangerous and unpredictable foe.",
    achievements: [
      "Held the position of Upper Rank Six alongside her brother Gyutaro",
      "Fought against the Demon Slayer Corps in the Entertainment District",
    ],
    goals: [
      "Serve Muzan Kibutsuji with unwavering loyalty",
      "Protect her brother Gyutaro at all costs",
    ],
    mentor: null,
    voice_actor: { japanese: "Miyuki Sawashiro", english: "Erica Lindbeck" },
    first_appearance: "Manga Chapter 74",
  },
  {
    id: 20,
    name: "Gyutaro",
    role: "Upper Rank Six",
    affiliation: ["Twelve Kizuki"],
    breathStyle: null,
    techniques: [
      "Blood Demon Art: Flying Blood Sickles",
      "Blood Demon Art: Rotating Circular Slashes",
    ],
    family: ["Daki (Sister, deceased)"],
    status: "Deceased",
    personality:
      "Jealous, bitter, and fiercely protective of his sister. Gyutaro despises the wealthy and beautiful due to his own tragic upbringing.",
    background:
      "Gyutaro grew up in extreme poverty and was despised for his appearance. After becoming a demon alongside his sister Daki, he developed a deep-seated resentment towards those who had what he could not. As Upper Rank Six, he is a brutal and relentless fighter.",
    achievements: [
      "Held the position of Upper Rank Six alongside his sister Daki",
      "Fought against the Demon Slayer Corps in the Entertainment District",
    ],
    goals: [
      "Serve Muzan Kibutsuji with unwavering loyalty",
      "Protect his sister Daki at all costs",
    ],
    mentor: null,
    voice_actor: { japanese: "Ryota Osaka", english: "Brandon McInnis" },
    first_appearance: "Manga Chapter 76",
  },
  {
    id: 21,
    name: "Nakime",
    role: "Upper Rank Four",
    affiliation: ["Twelve Kizuki"],
    breathStyle: null,
    techniques: ["Biwa Manipulation", "Castle Manipulation"],
    family: null,
    status: "Deceased",
    personality:
      "Calm, calculating, and highly efficient. She carries out her duties with precision and without emotion.",
    background:
      "Nakime was initially the biwa-playing demon responsible for maintaining the Infinity Castle. After the death of the previous Upper Rank Four, she was promoted to take his place. Her ability to manipulate the castle's structure makes her a key asset to Muzan's operations.",
    achievements: [
      "Promoted to Upper Rank Four after Hantengu's death",
      "Maintained and controlled the Infinity Castle",
    ],
    goals: [
      "Serve Muzan Kibutsuji with unwavering loyalty",
      "Perfect her abilities in manipulating the Infinity Castle",
    ],
    mentor: null,
    voice_actor: { japanese: "Marina Inoue", english: "Faye Mata" },
    first_appearance: "Manga Chapter 125",
  },
  {
    id: 22,
    name: "Hantengu",
    role: "Upper Rank Four (former)",
    affiliation: ["Twelve Kizuki"],
    breathStyle: null,
    techniques: ["Emotion Manipulation", "Cloning"],
    family: null,
    status: "Deceased",
    personality:
      "Cowardly, paranoid, and deeply delusional. Hantengu believes he is constantly persecuted and blames others for his crimes.",
    background:
      "Hantengu was once a human who committed heinous crimes and refused to take responsibility for them. As a demon, he retained his cowardly nature but gained the ability to split into multiple clones, each representing different emotions. He served as Upper Rank Four until his death.",
    achievements: [
      "Held the position of Upper Rank Four before Nakime",
      "Fought against the Demon Slayer Corps during the Swordsmith Village arc",
    ],
    goals: [
      "Serve Muzan Kibutsuji while avoiding conflict whenever possible",
      "Survive at all costs by using his cloning ability",
    ],
    mentor: null,
    voice_actor: { japanese: "Toshio Furukawa", english: "Fred Tatasciore" },
    first_appearance: "Manga Chapter 98",
  },
  {
    id: 23,
    name: "Gyokko",
    role: "Upper Rank Five",
    affiliation: ["Twelve Kizuki"],
    breathStyle: null,
    techniques: [
      "Blood Demon Art: Water Basin of Hell",
      "Blood Demon Art: Ten Thousand Gliding Slime Fish",
    ],
    family: null,
    status: "Deceased",
    personality:
      "Arrogant, sadistic, and obsessed with his own art. Gyokko considers himself a master artist, creating grotesque works from his victims.",
    background:
      "Gyokko was once a human obsessed with creating art from the corpses of living beings. After becoming a demon, he retained this twisted passion, using his Blood Demon Art to create horrific 'art pieces.' He serves as Upper Rank Five of the Twelve Kizuki.",
    achievements: [
      "Held the position of Upper Rank Five within the Twelve Kizuki",
      "Fought against the Demon Slayer Corps during the Swordsmith Village arc",
    ],
    goals: [
      "Serve Muzan Kibutsuji with unwavering loyalty",
      "Perfect his grotesque 'art' creations",
    ],
    mentor: null,
    voice_actor: { japanese: "Kousuke Toriumi", english: "Brent Mukai" },
    first_appearance: "Manga Chapter 98",
  },
  {
    id: 24,
    name: "Kaigaku",
    role: "Upper Rank Six (successor)",
    affiliation: ["Twelve Kizuki"],
    breathStyle: "Thunder Breathing",
    techniques: [
      "First Form: Thunderclap and Flash (Modified)",
      "Sixth Form: Rumble and Flash",
      "Seventh Form: Honoikazuchi no Kami",
    ],
    family: null,
    status: "Deceased",
    personality:
      "Arrogant, resentful, and power-hungry. Kaigaku is driven by a desire to prove himself superior to others, especially Zenitsu Agatsuma.",
    background:
      "Kaigaku was once a Demon Slayer and a senior disciple of the former Thunder Hashira, Jigoro Kuwajima. After succumbing to his desire for power, he became a demon and was promoted to Upper Rank Six, succeeding Gyutaro and Daki.",
    achievements: [
      "Succeeded Gyutaro and Daki as Upper Rank Six",
      "Fought against Zenitsu Agatsuma in a climactic battle",
    ],
    goals: [
      "Surpass Zenitsu Agatsuma and prove his superiority",
      "Serve Muzan Kibutsuji with unwavering loyalty",
    ],
    mentor: "Jigoro Kuwajima",
    voice_actor: { japanese: "Yoshimasa Hosoya", english: "Alejandro Saab" },
    first_appearance: "Manga Chapter 139",
  },
  {
    id: 25,
    name: "Kanao Tsuyuri",
    role: "Demon Slayer",
    affiliation: ["Demon Slayer Corps"],
    breathStyle: "Flower Breathing",
    techniques: [
      "Second Form: Honorable Shadow Plum",
      "Fourth Form: Crimson Hanagoromo",
      "Final Form: Equinoctial Vermilion Eye",
    ],
    family: [
      "Kanae Kocho (Adoptive Sister, deceased)",
      "Shinobu Kocho (Adoptive Sister, deceased)",
    ],
    status: "Alive",
    personality:
      "Quiet, reserved, and obedient. Kanao struggles to make decisions on her own due to her traumatic upbringing.",
    background:
      "Kanao was rescued from a life of slavery by Kanae and Shinobu Kocho, who took her in and trained her as a Demon Slayer. Though she initially relied on a coin flip to make decisions, she gradually learns to trust her own judgment.",
    achievements: [
      "Played a key role in the final battle against Muzan Kibutsuji",
      "Mastered the Flower Breathing technique",
    ],
    goals: [
      "Protect her remaining loved ones",
      "Honor the legacy of her adoptive sisters",
    ],
    mentor: "Kanae Kocho",
    voice_actor: { japanese: "Reina Ueda", english: "Brianna Knickerbocker" },
    first_appearance: "Manga Chapter 6",
  },
];
