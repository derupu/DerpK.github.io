// Edit this file to update the site. Keep the quotes and commas as they are.
window.SITE = {
  name: "DerpK",
  headline: "Game Playtester | QA Enthusiast | Android, iOS and PC",
  intro: "I playtest games on Android, iOS and PC. I find the bugs, confusing menus and rough edges players hit first, then write them up so developers can fix them. I also record gameplay with spoken commentary.",
  ndaNote: "I have also tested other games under NDA that I can’t name or describe.",
  contact: {
    email: "derp_demi_angel@yahoo.com",
    discord: "derpkayouew",
    reddit: "derpkayou",
    steam: "https://steamcommunity.com/id/itshardtomakeaname/"
  },
  // Only title and platforms ("Android", "iOS" or "PC") are required.
  // Optional: genre, period, status, image, note, description, activities, findings (a list), link.
  games: [
    { title: "Dual Blade", platforms: ["Android"] },
    { title: "Merge Command", platforms: ["Android"] },
    { title: "Dugout Dice", platforms: ["iOS"], note: "Tested through TestFlight" },
    { title: "Tiny Town", platforms: ["iOS"], note: "Tested through TestFlight" },
    { title: "Lilac Prose", platforms: ["PC"], genre: "Adventure, visual novel" },
    { title: "Despiry", platforms: ["PC"], genre: "Action, roguelite" },
    { title: "Station 12", platforms: ["PC"], genre: "Action, adventure, survival horror" },
    { title: "Damn, Zombies: The Corporate Undead", platforms: ["PC"], genre: "Zombie FPS, wave survival" },
    { title: "Clown Town", platforms: ["PC"], genre: "Action, simulation, horror" },
    { title: "Don’t Lose The Wheels!", platforms: ["PC"], genre: "Action, racing" },
    {
      title: "Kradle.ai Minecraft Mini Games",
      platforms: ["PC"],
      genre: "Minecraft mini games played with AI",
      description: "I tested the BuildWithAI and Skyblock mini games, where AI players build and play alongside you.",
      activities: "Gameplay and AI behavior testing, bug reproduction, written feedback report",
      findings: [
        "Sessions could end early and send the player back to the hub",
        "AI players left before the session timer ran out",
        "AI players forgot restrictions given earlier in the session"
      ],
      link: "#reports"
    }
  ],
  // Add recordings here. youtube is the ID after v= in the video link.
  videos: [
    // { title: "Title", youtube: "VIDEO_ID", game: "Game name", platform: "PC", description: "What this recording shows." }
  ]
};
