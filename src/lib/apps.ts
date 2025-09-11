
export type AppCategory =
  | 'Apps'
  | 'Games'
  | 'Emulators'
  | 'Tweaks'
  | 'Utilities'
  | 'Entertainment'
  | 'Social';

export type Entity = {
  id: string; // slug
  name: string; // title
  description: string; // summary
  category: AppCategory;
  lastModified: string; // updated_at
  media: {
    icon: string;
    iconHint: string;
  };
  facts: {
    version: string;
  };
};

type AppDto = {
  slug: string;
  img: string;
  name: string;
  'data-ai-hint': string;
  description: string;
  version: string;
  category: AppCategory;
  lastModified: string;
};

const appData: AppDto[] = [
    {
        slug: "altstore",
        img: "https://i.imgur.com/rq3p0eE.png",
        name: "AltStore",
        "data-ai-hint": "app store",
        description: "Free iOS app installer – sideload any IPA to iPhone/iPad (no jailbreak)",
        version: "1.7.1",
        category: "Utilities",
        lastModified: "2025-08-28"
    },
    {
        slug: "dreameshort-coins",
        img: "https://i.imgur.com/qKcgXd2.png",
        name: "DreameShort Coins",
        "data-ai-hint": "video app",
        description: "Unlimited coins & daily bonuses – unlock VIP stories on iOS & Android",
        version: "2.1.0",
        category: "Entertainment",
        lastModified: "2025-08-27"
    },
    {
        slug: "cod-mobile-mod-menu",
        img: "https://i.imgur.com/HJXUIFC.png",
        name: "COD Mobile MOD Menu",
        "data-ai-hint": "mobile game",
        description: "Aimbot, Wallhack, No Recoil & SuperJump – iOS & Android",
        version: "3.5.2",
        category: "Games",
        lastModified: "2025-08-26"
    },
    {
        slug: "irecovery",
        img: "https://i.imgur.com/MSsLgHs.png",
        name: "iRecovery",
        "data-ai-hint": "file recovery",
        description: "Recover Permanently Deleted Photos & Videos",
        version: "4.0.1",
        category: "Utilities",
        lastModified: "2025-08-25"
    },
    {
        slug: "efootball-2025-mod",
        img: "https://i.imgur.com/jnmtM3E.png",
        name: "eFootball 2025",
        "data-ai-hint": "football game",
        description: "Unlimited Coins & GP, VIP features, free shopping – iOS & Android",
        version: "8.1.0",
        category: "Games",
        lastModified: "2025-08-24"
    },
    {
        slug: "fc-mobile-24-25-mod",
        img: "https://i.imgur.com/FcTO2xT.png",
        name: "FC Mobile 24/25",
        "data-ai-hint": "football game",
        description: "Unlimited FC Points & Gems – open packs faster (iOS & Android)",
        version: "1.2.5",
        category: "Games",
        lastModified: "2025-08-23"
    },
    {
        slug: "roblox-mod",
        img: "https://i.imgur.com/ItBBn9z.png",
        name: "Roblox Mod",
        "data-ai-hint": "block game",
        description: "Roblox Mod Menu – Fly, God Mode, Super Jump & Speed (iOS/Android)",
        version: "2.605.0",
        category: "Games",
        lastModified: "2025-08-22"
    },
    {
        slug: "instagram-plus-plus",
        img: "https://i.imgur.com/M5mKDJ8.png",
        name: "Instagram++",
        "data-ai-hint": "social media",
        description: "Instagram++ – download media, view stories anonymously, extra tools (iOS/Android)",
        version: "20.1",
        category: "Social",
        lastModified: "2025-08-21"
    },
    {
        slug: "discord-nitro-free",
        img: "https://i.imgur.com/tvz8mmU.jpeg",
        name: "Discord Nitro",
        "data-ai-hint": "chat app",
        description: "Enable Discord Nitro perks for free – emojis, HD streaming, uploads",
        version: "1.0.0",
        category: "Social",
        lastModified: "2025-08-20"
    },
    {
        slug: "pokemon-go-spoofer",
        img: "https://i.imgur.com/2X6jMHU.png",
        name: "Pokemon Go Spoofer",
        "data-ai-hint": "monster game",
        description: "Teleport, joystick, auto-walk, auto-catch & IV checker (iOS/Android)",
        version: "0.275.0",
        category: "Games",
        lastModified: "2025-08-19"
    },
     {
        slug: "monopoly-go-plus-plus",
        img: "https://i.imgur.com/ahghT00.jpeg",
        name: "Monopoly Go++",
        "data-ai-hint": "board game",
        description: "Unlimited dice & cash – build faster on live servers (iOS/Android)",
        version: "1.13.0",
        category: "Games",
        lastModified: "2025-08-18"
    },
    {
        slug: "board-kings-hack",
        img: "https://i.imgur.com/Oh29tXi.jpeg",
        name: "Board Kings Hack",
        "data-ai-hint": "board game",
        description: "Unlimited Gems, Coins & Rolls!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-17"
    },
    {
        slug: "bingo-blitz-hack",
        img: "https://i.imgur.com/WrZJqtT.jpeg",
        name: "Bingo Blitz Hack",
        "data-ai-hint": "bingo game",
        description: "Unlimited Coins & Credits!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-16"
    },
    {
        slug: "subway-surfers-hack",
        img: "https://i.imgur.com/jEAi4PW.jpeg",
        name: "Subway Surfers Hack",
        "data-ai-hint": "runner game",
        description: "Unlimited Coins/Keys!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-15"
    },
    {
        slug: "fc-mobile-hack",
        img: "https://i.imgur.com/bdvQ46z.jpeg",
        name: "FC Mobile Hack",
        "data-ai-hint": "football game",
        description: "Unlimited FC Points & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-14"
    },
    {
        slug: "idle-heroes-hack",
        img: "https://i.imgur.com/t6uwXQY.jpeg",
        name: "Idle Heroes Hack",
        "data-ai-hint": "fantasy game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-13"
    },
    {
        slug: "sims-freeplay-hack",
        img: "https://i.imgur.com/RuyIM2l.jpeg",
        name: "Sims FreePlay Hack",
        "data-ai-hint": "simulation game",
        description: "Unlimited Simoleons/Points and MAX VIP!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-12"
    },
    {
        slug: "car-simulator-2-hack",
        img: "https://i.imgur.com/qOgKqhE.jpeg",
        name: "Car Simulator 2 Hack",
        "data-ai-hint": "car game",
        description: "Unlimited Coins, Blueprints & Crypto!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-11"
    },
    {
        slug: "capcut-pro",
        img: "https://i.imgur.com/S2GDQsf.jpeg",
        name: "CapCut Pro",
        "data-ai-hint": "video editor",
        description: "Compatible with Android & iOS devices!",
        version: "1.0.0",
        category: "Utilities",
        lastModified: "2025-08-10"
    },
    {
        slug: "dice-dreams-hack",
        img: "https://i.imgur.com/uNxEvkd.jpeg",
        name: "Dice Dreams Hack",
        "data-ai-hint": "dice game",
        description: "Unlimited Rolls & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-09"
    },
    {
        slug: "modern-strike-hack",
        img: "https://i.imgur.com/9R6aWoD.jpeg",
        name: "Modern Strike Hack",
        "data-ai-hint": "shooter game",
        description: "Unlimited Gold & Credits!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-08"
    },
    {
        slug: "hogwarts-mystery-hack",
        img: "https://i.imgur.com/ImQoAC8.jpeg",
        name: "Hogwarts Mystery Hack",
        "data-ai-hint": "magic game",
        description: "Unlimited Energy, Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-07"
    },
    {
        slug: "ppsspp",
        img: "https://i.imgur.com/g1rtn5L.jpeg",
        name: "PPSSPP",
        "data-ai-hint": "game emulator",
        description: "PPSSPP on iOS/Android without Jailbreak!",
        version: "1.0.0",
        category: "Emulators",
        lastModified: "2025-08-06"
    },
    {
        slug: "apex-legends-hack",
        img: "https://i.imgur.com/sgl0k68.jpeg",
        name: "Apex Legends Hack",
        "data-ai-hint": "shooter game",
        description: "Unlimited Coins & Battle Pass!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-05"
    },
    {
        slug: "car-parking-multiplayer-2-hack",
        img: "https://i.imgur.com/ugYpecY.jpeg",
        name: "Car Parking Multiplayer 2 Hack",
        "data-ai-hint": "car game",
        description: "Unlimited Money & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-04"
    },
    {
        slug: "blood-strike-mod",
        img: "https://i.imgur.com/jp8Z9r5.jpeg",
        name: "Blood Strike Mod",
        "data-ai-hint": "shooter game",
        description: "Unlimited 9999999 Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-03"
    },
    {
        slug: "osm-22-23-hack",
        img: "https://i.imgur.com/l5nQWph.jpeg",
        name: "OSM 22/23 Hack",
        "data-ai-hint": "soccer manager",
        description: "Unlimited Boss Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-02"
    },
    {
        slug: "efootball-2025-hack",
        img: "https://i.imgur.com/bHoTstK.jpeg",
        name: "eFootball 2025 Hack",
        "data-ai-hint": "football game",
        description: "Unlimited Coins & GP!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-01"
    },
    {
        slug: "ludo-king-hack",
        img: "https://i.imgur.com/2NNYwpz.jpeg",
        name: "Ludo King Hack",
        "data-ai-hint": "ludo game",
        description: "Unlimited Coins & Diamonds!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-31"
    },
    {
        slug: "island-war-hack",
        img: "https://i.imgur.com/5yQ3GHO.jpeg",
        name: "Island War Hack",
        "data-ai-hint": "war game",
        description: "Unlimited Money & Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-30"
    },
    {
        slug: "valor-legends-hack",
        img: "https://i.imgur.com/cm3ufj9.jpeg",
        name: "Valor Legends Hack",
        "data-ai-hint": "fantasy game",
        description: "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-29"
    },
    {
        slug: "star-wars-galaxy-of-heroes-hack",
        img: "https://i.imgur.com/qFY4m4t.jpeg",
        name: "Star Wars: Galaxy of Heroes Hack",
        "data-ai-hint": "sci-fi game",
        description: "Unlimited Crystals!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-28"
    },
    {
        slug: "best-friends-hack",
        img: "https://i.imgur.com/NYCmoVJ.jpeg",
        name: "Best Friends Hack",
        "data-ai-hint": "puzzle game",
        description: "Unlimited Gold & Keys!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-27"
    },
    {
        slug: "beatstar-hack",
        img: "https://i.imgur.com/KYT7Xrn.jpeg",
        name: "Beatstar Hack",
        "data-ai-hint": "music game",
        description: "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-26"
    },
    {
        slug: "hungry-shark-world-hack",
        img: "https://i.imgur.com/OkWbNly.jpeg",
        name: "Hungry Shark World Hack",
        "data-ai-hint": "shark game",
        description: "Unlimited Coins & Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-25"
    },
    {
        slug: "golf-battle-hack",
        img: "https://i.imgur.com/kQNvtV3.jpeg",
        name: "Golf Battle Hack",
        "data-ai-hint": "golf game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-24"
    },
    {
        slug: "fc-mobile",
        img: "https://i.imgur.com/nATWBTW.jpeg",
        name: "FC Mobile",
        "data-ai-hint": "football game",
        description: "Install FC Mobile on iOS/Android!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-23"
    },
    {
        slug: "match-masters-mod",
        img: "https://i.imgur.com/UzciDnD.jpeg",
        name: "Match Masters Mod",
        "data-ai-hint": "puzzle game",
        description: "Unlimited Coins, Boosters & Free Shopping for iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-22"
    },
    {
        slug: "nova-legacy-mod",
        img: "https://i.imgur.com/FN5zMDe.png",
        name: "N.O.V.A. Legacy Mod",
        "data-ai-hint": "sci-fi game",
        description: "Unlimited Money, Trilithium, VIP Unlocks for iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-21"
    },
    {
        slug: "forge-of-empires-mod",
        img: "https://i.imgur.com/I1yUA4w.png",
        name: "Forge of Empires Mod",
        "data-ai-hint": "strategy game",
        description: "Unlimited Diamonds, Supplies & Free Shopping on iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-20"
    },
    {
        slug: "carx-street-mod",
        img: "https://i.imgur.com/ww6283n.jpeg",
        name: "CarX Street Mod",
        "data-ai-hint": "car game",
        description: "Unlimited money – upgrade cars & builds (iOS/Android)",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-19"
    },
    {
        slug: "nulls-brawl",
        img: "https://i.imgur.com/qvEKuwI.jpeg",
        name: "Null's Brawl",
        "data-ai-hint": "brawler game",
        description: "Private Brawl Stars server – easy install for iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-18"
    },
    {
        slug: "mortal-kombat-mod",
        img: "https://i.imgur.com/GPmMlCV.jpeg",
        name: "Mortal Kombat Mod",
        "data-ai-hint": "fighting game",
        description: "Unlimited Souls & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-17"
    },
    {
        slug: "loot-boy-mod",
        img: "https://i.imgur.com/9UeNwnL.jpeg",
        name: "Loot Boy Mod",
        "data-ai-hint": "loot game",
        description: "Unlimited Diamonds, Tickets & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-16"
    },
    {
        slug: "bus-simulator-ultimate-mod",
        img: "https://i.imgur.com/z5SVQvN.jpeg",
        name: "Bus Simulator: Ultimate Mod",
        "data-ai-hint": "bus simulator",
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-15"
    },
    {
        slug: "race-master-3d-mod",
        img: "https://i.imgur.com/f2b9l1a.jpeg",
        name: "Race Master 3D Mod",
        "data-ai-hint": "racing game",
        description: "Unlimited Money, Nitro & Shields!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-14"
    },
    {
        slug: "ninja-turtles-legends-mod",
        img: "https://i.imgur.com/5enzvGz.jpeg",
        name: "Ninja Turtles: Legends Mod",
        "data-ai-hint": "action game",
        description: "Unlimited Greenbacks & Everything!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-13"
    },
    {
        slug: "guns-of-boom-mod",
        img: "https://i.imgur.com/iv7W48d.jpeg",
        name: "Guns of Boom Mod",
        "data-ai-hint": "shooter game",
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-12"
    },
    {
        slug: "mini-world-mod",
        img: "https://i.imgur.com/t90YbJ7.jpeg",
        name: "Mini World Mod",
        "data-ai-hint": "block game",
        description: "Unlimited Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-11"
    },
    {
        slug: "blockman-go-mod",
        img: "https://i.imgur.com/GM40RZm.jpeg",
        name: "Blockman GO Mod",
        "data-ai-hint": "block game",
        description: "Unlimited GCubes & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-10"
    },
    {
        slug: "dead-by-daylight-mod",
        img: "https://i.imgur.com/ci82VQ5.jpeg",
        name: "Dead by Daylight Mod",
        "data-ai-hint": "horror game",
        description: "Unlimited Auric Cells & More!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-09"
    },
    {
        slug: "the-sims-mod",
        img: "https://i.imgur.com/RoGapCb.jpeg",
        name: "The Sims™ Mod",
        "data-ai-hint": "simulation game",
        description: "Unlimited Money & Simcash!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-08"
    },
    {
        slug: "lol-wild-rift-mod",
        img: "https://i.imgur.com/HA9DzHn.jpeg",
        name: "LOL: Wild Rift Mod",
        "data-ai-hint": "moba game",
        description: "Unlimited Wild Cores!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-07"
    },
    {
        slug: "pubg-mobile-mod",
        img: "https://i.imgur.com/cThCbh8.jpeg",
        name: "PUBG Mobile Mod",
        "data-ai-hint": "shooter game",
        description: "Unlimited UC, Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-06"
    },
    {
        slug: "last-day-on-earth-survival-mod",
        img: "https://i.imgur.com/zGEfhmo.jpeg",
        name: "Last Day on Earth: Survival Mod",
        "data-ai-hint": "survival game",
        description: "Unlimited Coins & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-05"
    },
    {
        slug: "teamfight-tactics-mod",
        img: "https://i.imgur.com/9ZCZck1.jpeg",
        name: "TeamFight Tactics Mod",
        "data-ai-hint": "strategy game",
        description: "Unlimited Coins & Star Fragments!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-04"
    },
    {
        slug: "jetpack-joyride-mod",
        img: "https://i.imgur.com/SHsNAMD.jpeg",
        name: "Jetpack Joyride Mod",
        "data-ai-hint": "runner game",
        description: "Unlimited Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-03"
    },
    {
        slug: "baseball-9-mod",
        img: "https://i.imgur.com/PevNHtH.jpeg",
        name: "Baseball 9 Mod",
        "data-ai-hint": "baseball game",
        description: "Unlimited Money & Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-02"
    },
    {
        slug: "photos-plus",
        img: "https://i.imgur.com/X78CBbO.png",
        name: "Photos+",
        "data-ai-hint": "photo recovery",
        description: "Recover deleted Photos/Videos on iOS & Android!",
        version: "1.0.0",
        category: "Utilities",
        lastModified: "2025-07-01"
    },
    {
        slug: "harry-potter-puzzles-and-spells-mod",
        img: "https://i.imgur.com/1Ae1HUj.jpeg",
        name: "Harry Potter: Puzzles & Spells Mod",
        "data-ai-hint": "puzzle game",
        description: "Unlimited Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-30"
    },
    {
        slug: "injustice-2-mod",
        img: "https://i.imgur.com/ecCKqAb.jpeg",
        name: "Injustice 2 Mod",
        "data-ai-hint": "fighting game",
        description: "Unlimited Gems & Credits!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-29"
    },
    {
        slug: "king-of-thieves-mod",
        img: "https://i.imgur.com/vCWr1Yd.jpeg",
        name: "King of Thieves Mod",
        "data-ai-hint": "thief game",
        description: "Unlimited Orbs & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-28"
    },
    {
        slug: "monster-legends-mod",
        img: "https://i.imgur.com/YoiDkaH.jpeg",
        name: "Monster Legends Mod",
        "data-ai-hint": "monster game",
        description: "Unlimited Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-27"
    },
    {
        slug: "scrabble-go-mod",
        img: "https://i.imgur.com/7lJAiF0.jpeg",
        name: "Scrabble GO Mod",
        "data-ai-hint": "word game",
        description: "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-26"
    },
    {
        slug: "state-of-survival-mod",
        img: "https://i.imgur.com/qK0wUbz.jpeg",
        name: "State of Survival Mod",
        "data-ai-hint": "survival game",
        description: "Unlimited Biocaps & Resources!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-25"
    },
    {
        slug: "hungry-shark-evolution-mod",
        img: "https://i.imgur.com/Dcid1F2.jpeg",
        name: "Hungry Shark Evolution Mod",
        "data-ai-hint": "shark game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-24"
    },
    {
        slug: "soul-knight-mod",
        img: "https://i.imgur.com/MxN7vqH.jpeg",
        name: "Soul Knight Mod",
        "data-ai-hint": "dungeon game",
        description: "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-23"
    },
    {
        slug: "criminal-case-mod",
        img: "https://i.imgur.com/bkhqT3H.jpeg",
        name: "Criminal Case Mod",
        "data-ai-hint": "detective game",
        description: "Unlimited Cash & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-22"
    },
    {
        slug: "frag-pro-shooter-mod",
        img: "https://i.imgur.com/AGM5hqE.jpeg",
        name: "FRAG Pro Shooter Mod",
        "data-ai-hint": "shooter game",
        description: "Unlimited Diamonds & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-21"
    },
    {
        slug: "dc-legends-mod",
        img: "https://i.imgur.com/OBHbEhE.jpeg",
        name: "DC Legends Mod",
        "data-ai-hint": "superhero game",
        description: "Unlimited Gems & Energy!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-20"
    },
    {
        slug: "fr-legends-mod",
        img: "https://i.imgur.com/ZxpS32A.jpeg",
        name: "FR Legends Mod",
        "data-ai-hint": "drifting game",
        description: "Unlimited Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-19"
    },
    {
        slug: "dungeon-hunter-5-mod",
        img: "https://i.imgur.com/fZaPTZk.jpeg",
        name: "Dungeon Hunter 5 Mod",
        "data-ai-hint": "dungeon rpg",
        description: "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-18"
    },
    {
        slug: "looney-tunes-world-of-mayhem-mod",
        img: "https://i.imgur.com/ILYs6Lg.jpeg",
        name: "Looney Tunes™ World of Mayhem Mod",
        "data-ai-hint": "cartoon game",
        description: "Unlimited Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-17"
    },
    {
        slug: "need-for-speed-no-limits-mod",
        img: "https://i.imgur.com/5Yqlgg5.jpeg",
        name: "Need for Speed™ No Limits Mod",
        "data-ai-hint": "racing game",
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-16"
    },
    {
        slug: "ice-age-adventures-mod",
        img: "https://i.imgur.com/Bx69dSO.jpeg",
        name: "Ice Age Adventures Mod",
        "data-ai-hint": "adventure game",
        description: "Unlimited Acorns!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-15"
    },
    {
        slug: "score-hero-2022-mod",
        img: "https://i.imgur.com/ujRHvBz.jpeg",
        name: "Score! Hero 2022 Mod",
        "data-ai-hint": "soccer game",
        description: "Unlimited Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-14"
    },
    {
        slug: "gangstar-vegas-mod",
        img: "https://i.imgur.com/GtpkLZt.jpeg",
        name: "Gangstar Vegas Mod",
        "data-ai-hint": "gangster game",
        description: "Unlimited Diamonds & Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-13"
    },
    {
        slug: "dislyte-mod",
        img: "https://i.imgur.com/O1IAYpK.jpeg",
        name: "Dislyte Mod",
        "data-ai-hint": "mythic rpg",
        description: "Unlimited Crystals & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-12"
    },
    {
        slug: "the-wolf-mod",
        img: "https://i.imgur.com/KRobVTS.jpeg",
        name: "The Wolf Mod",
        "data-ai-hint": "wolf simulator",
        description: "Unlimited Gems & Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-11"
    },
    {
        slug: "traffic-rider-mod",
        img: "https://i.imgur.com/h3eF6FU.jpeg",
        name: "Traffic Rider Mod",
        "data-ai-hint": "motorcycle game",
        description: "Unlimited Money & Cash!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-10"
    },
    {
        slug: "skullgirls-mod",
        img: "https://i.imgur.com/xvhkfhL.jpeg",
        name: "Skullgirls Mod",
        "data-ai-hint": "fighting game",
        description: "Unlimited Theonite!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-09"
    },
    {
        slug: "infinity-kingdom-mod",
        img: "https://i.imgur.com/epyQAFG.jpeg",
        name: "Infinity Kingdom Mod",
        "data-ai-hint": "strategy game",
        description: "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-08"
    },
    {
        slug: "mighty-party-mod",
        img: "https://i.imgur.com/TnqOIo0.jpeg",
        name: "Mighty Party Mod",
        "data-ai-hint": "hero battler",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-07"
    },
    {
        slug: "pocket-troops-mod",
        img: "https://i.imgur.com/GUU5sXx.jpeg",
        name: "Pocket Troops Mod",
        "data-ai-hint": "tactical game",
        description: "Unlimited Coins & Cash!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-06"
    },
    {
        slug: "top-war-mod",
        img: "https://i.imgur.com/GTAlQzP.jpeg",
        name: "Top War Mod",
        "data-ai-hint": "strategy game",
        description: "Unlimited Diamonds & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-05"
    },
    {
        slug: "war-and-order-mod",
        img: "https://i.imgur.com/pvaRLDg.jpeg",
        name: "War and Order Mod",
        "data-ai-hint": "strategy game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-04"
    },
    {
        slug: "world-chef-mod",
        img: "https://i.imgur.com/lJGGZN4.jpeg",
        name: "World Chef Mod",
        "data-ai-hint": "cooking game",
        description: "Unlimited Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-03"
    },
    {
        slug: "angry-birds-evolution-mod",
        img: "https://i.imgur.com/BXKcVmy.jpeg",
        name: "Angry Birds Evolution Mod",
        "data-ai-hint": "bird game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-02"
    },
    {
        slug: "project-makeover-mod",
        img: "https://i.imgur.com/IO2IdIQ.jpeg",
        name: "Project Makeover Mod",
        "data-ai-hint": "makeover game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-01"
    },
    {
        slug: "basketball-stars-mod",
        img: "https://i.imgur.com/U0tFpXg.jpeg",
        name: "Basketball Stars Mod",
        "data-ai-hint": "basketball game",
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-31"
    },
    {
        slug: "disney-heroes-mod",
        img: "https://i.imgur.com/wpvpO0V.jpeg",
        name: "Disney Heroes Mod",
        "data-ai-hint": "disney game",
        description: "Unlimited Diamonds & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-30"
    },
    {
        slug: "lilys-garden-mod",
        img: "https://i.imgur.com/dee3c7i.jpeg",
        name: "Lily's Garden Mod",
        "data-ai-hint": "garden game",
        description: "Unlimited Stars & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-29"
    },
    {
        slug: "tennis-clash-mod",
        img: "https://i.imgur.com/KuqWj0q.jpeg",
        name: "Tennis Clash Mod",
        "data-ai-hint": "tennis game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-28"
    },
    {
        slug: "pvz-heroes-mod",
        img: "https://i.imgur.com/t6RvgZr.jpeg",
        name: "PvZ Heroes Mod",
        "data-ai-hint": "card game",
        description: "Unlimited Gems & Cards!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-27"
    },
    {
        slug: "nba-live-mobile-mod",
        img: "https://i.imgur.com/7xFvMdi.jpeg",
        name: "NBA Live Mobile Mod",
        "data-ai-hint": "basketball game",
        description: "Unlimited Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-26"
    },
    {
        slug: "dragon-mania-legends-mod",
        img: "https://i.imgur.com/xhAYWdn.jpeg",
        name: "Dragon Mania Legends Mod",
        "data-ai-hint": "dragon game",
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-25"
    }
];

export const apps: Entity[] = appData.map((app) => ({
  id: app.slug,
  name: app.name,
  description: app.description,
  category: app.category,
  lastModified: app.lastModified,
  media: {
    icon: app.img,
    iconHint: app['data-ai-hint'],
  },
  facts: {
    version: app.version,
  },
}));
