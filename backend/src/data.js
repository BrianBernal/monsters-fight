const monsters = [
  {
    id: "monster-1",
    name: "Dead Unicorn",
    attack: 60,
    defense: 40,
    hp: 10,
    speed: 80,
    type: "Type",
    imageUrl:
      "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png",
  },
  {
    id: "monster-2",
    name: "Old Shark",
    attack: 50,
    defense: 20,
    hp: 80,
    speed: 90,
    type: "Type",
    imageUrl:
      "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png",
  },
  {
    id: "monster-3",
    name: "Red Dragon",
    attack: 90,
    defense: 80,
    hp: 90,
    speed: 70,
    type: "Type",
    imageUrl:
      "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/red-dragon.png",
  },
  {
    id: "monster-4",
    name: "Robot Bear",
    attack: 50,
    defense: 40,
    hp: 80,
    speed: 60,
    type: "Type",
    imageUrl:
      "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/robot-bear.png",
  },
  {
    id: "monster-5",
    name: "Angry Snake",
    attack: 80,
    defense: 20,
    hp: 70,
    speed: 80,
    type: "Type",
    imageUrl:
      "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/angry-snake.png",
  },
];

const USERS_BBDD = [
  {
    guid: "d769bb29-6889-4f4e-b15b-eeb1c73d4328",
    name: "Jose Miguel",
    email: "jose@desarrolloutil.com",
    password: "test1234",
    role: "user",
    isActive: true,
    balance: "$2,800.79",
    age: 37,
    eyeColor: "brown",
    company: "ZENTHALL",
    phone: "+1 (866) 525-2197",
    address: "361 Woodrow Court, Sperryville, Washington, 1168",
    registered: "2016-06-09T01:54:34 -02:00",
  },
  {
    guid: "672a085c-ee47-4664-895d-96a8d4759ee3",
    name: "Pablo Castellanos",
    email: "pablo@desarrolloutil.com",
    password: "test1234",
    role: "admin",
    isActive: true,
    balance: "$2,595.39",
    age: 38,
    eyeColor: "brown",
    company: "RODEOLOGY",
    phone: "+1 (802) 556-3341",
    address: "444 Landis Court, Sutton, Colorado, 6446",
    registered: "2016-07-18T10:28:25 -02:00",
  },
];

export { monsters, USERS_BBDD };
