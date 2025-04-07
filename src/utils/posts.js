const posts = [
  {
    id: "9871",
    title: "Work Space",
    image: "setup.png", // path or import
    likes: 42,
    body: "This is my first post",
    comments: [
      {user1: "A serious comment", liked: false,},
      {user2: "A funny comment", liked: false},
    ],
  },
  {
    id: "9872",
    title: "Chill Vibes",
    image: "beach.png",
    likes: 128,
    body: "Hooks make it magical",
    comments: [
      {coolguy: "wish I was there 😎", liked: true},
      {devgirl: "okay but where’s the wifi tho", liked: false},
    ],
  },
  {
    id: "9873",
    title: "Code All Night",
    image: "image-3.png",
    likes: 99,
    body: "Utility-first vibes" ,
    comments: [
      {sleepyJoe: "relatable content", liked: true},
      {caffeineQueen: "3AM commits hit different", liked: true},
      {yourManager: "Please take a break.", liked: false},
    ],
  },
];

export default posts;