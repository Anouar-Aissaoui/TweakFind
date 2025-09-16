import { getAppsWithPlaceholders, type AppDto } from './image-processing';


export type AppCategory =
  | 'Apps'
  | 'Games'
  | 'Emulators'
  | 'Tweaks'
  | 'Utilities'
  | 'Entertainment'
  | 'Social'
  | 'Developer Tools';

export type Entity = {
  id: string; // slug
  name: string; // title
  subhead: string;
  description: string; // summary
  category: AppCategory;
  lastModified: string; // updated_at
  media: {
    icon: string;
    iconHint: string;
    blurDataURL: string;
  };
  facts: {
    version: string;
    downloads: string;
    compatibility: string;
    safety: string[];
    license: string[];
  };
  about: {
    title: string;
    content: string;
  },
  features: {
    title: string;
    items: string[];
  },
  perfectFor: {
    title: string;
    tags: string[];
  },
  faq: {
    title: string;
    items: { question: string; answer: string; }[];
  }
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
        "description": "Recover Permanently Deleted Photos & Videos",
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
        "description": "Unlimited FC Points & Gems – open packs faster (iOS & Android)",
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
        "description": "Unlimited dice & cash – build faster on live servers (iOS/Android)",
        version: "1.13.0",
        category: "Games",
        lastModified: "2025-08-18"
    },
    {
        slug: "board-kings-hack",
        img: "https://i.imgur.com/Oh29tXi.jpeg",
        name: "Board Kings Hack",
        "data-ai-hint": "board game",
        "description": "Unlimited Gems, Coins & Rolls!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-17"
    },
    {
        slug: "bingo-blitz-hack",
        img: "https://i.imgur.com/WrZJqtT.jpeg",
        name: "Bingo Blitz Hack",
        "data-ai-hint": "bingo game",
        "description": "Unlimited Coins & Credits!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-16"
    },
    {
        slug: "subway-surfers-hack",
        img: "https://i.imgur.com/jEAi4PW.jpeg",
        name: "Subway Surfers Hack",
        "data-ai-hint": "runner game",
        "description": "Unlimited Coins/Keys!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-15"
    },
    {
        slug: "fc-mobile-hack",
        img: "https://i.imgur.com/bdvQ46z.jpeg",
        name: "FC Mobile Hack",
        "data-ai-hint": "football game",
        "description": "Unlimited FC Points & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-14"
    },
    {
        slug: "idle-heroes-hack",
        img: "https://i.imgur.com/t6uwXQY.jpeg",
        name: "Idle Heroes Hack",
        "data-ai-hint": "fantasy game",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-13"
    },
    {
        slug: "sims-freeplay-hack",
        img: "https://i.imgur.com/RuyIM2l.jpeg",
        name: "Sims FreePlay Hack",
        "data-ai-hint": "simulation game",
        "description": "Unlimited Simoleons/Points and MAX VIP!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-12"
    },
    {
        slug: "car-simulator-2-hack",
        img: "https://i.imgur.com/qOgKqhE.jpeg",
        name: "Car Simulator 2 Hack",
        "data-ai-hint": "car game",
        "description": "Unlimited Coins, Blueprints & Crypto!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-11"
    },
    {
        slug: "capcut-pro",
        img: "https://i.imgur.com/S2GDQsf.jpeg",
        name: "CapCut Pro",
        "data-ai-hint": "video editor",
        "description": "Compatible with Android & iOS devices!",
        version: "1.0.0",
        category: "Utilities",
        lastModified: "2025-08-10"
    },
    {
        slug: "dice-dreams-hack",
        img: "https://i.imgur.com/uNxEvkd.jpeg",
        name: "Dice Dreams Hack",
        "data-ai-hint": "dice game",
        "description": "Unlimited Rolls & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-09"
    },
    {
        slug: "modern-strike-hack",
        img: "https://i.imgur.com/9R6aWoD.jpeg",
        name: "Modern Strike Hack",
        "data-ai-hint": "shooter game",
        "description": "Unlimited Gold & Credits!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-08"
    },
    {
        slug: "hogwarts-mystery-hack",
        img: "https://i.imgur.com/ImQoAC8.jpeg",
        name: "Hogwarts Mystery Hack",
        "data-ai-hint": "magic game",
        "description": "Unlimited Energy, Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-07"
    },
    {
        slug: "ppsspp",
        img: "https://i.imgur.com/g1rtn5L.jpeg",
        name: "PPSSPP",
        "data-ai-hint": "game emulator",
        "description": "PPSSPP on iOS/Android without Jailbreak!",
        version: "1.0.0",
        category: "Emulators",
        lastModified: "2025-08-06"
    },
    {
        slug: "apex-legends-hack",
        img: "https://i.imgur.com/sgl0k68.jpeg",
        name: "Apex Legends Hack",
        "data-ai-hint": "shooter game",
        "description": "Unlimited Coins & Battle Pass!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-05"
    },
    {
        slug: "car-parking-multiplayer-2-hack",
        img: "https://i.imgur.com/ugYpecY.jpeg",
        name: "Car Parking Multiplayer 2 Hack",
        "data-ai-hint": "car game",
        "description": "Unlimited Money & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-04"
    },
    {
        slug: "blood-strike-mod",
        img: "https://i.imgur.com/jp8Z9r5.jpeg",
        name: "Blood Strike Mod",
        "data-ai-hint": "shooter game",
        "description": "Unlimited 9999999 Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-03"
    },
    {
        slug: "osm-22-23-hack",
        img: "https://i.imgur.com/l5nQWph.jpeg",
        name: "OSM 22/23 Hack",
        "data-ai-hint": "soccer manager",
        "description": "Unlimited Boss Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-02"
    },
    {
        slug: "efootball-2025-hack",
        img: "https://i.imgur.com/bHoTstK.jpeg",
        name: "eFootball 2025 Hack",
        "data-ai-hint": "football game",
        "description": "Unlimited Coins & GP!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-08-01"
    },
    {
        slug: "ludo-king-hack",
        img: "https://i.imgur.com/2NNYwpz.jpeg",
        name: "Ludo King Hack",
        "data-ai-hint": "ludo game",
        "description": "Unlimited Coins & Diamonds!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-31"
    },
    {
        slug: "island-war-hack",
        img: "https://i.imgur.com/5yQ3GHO.jpeg",
        name: "Island War Hack",
        "data-ai-hint": "war game",
        "description": "Unlimited Money & Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-30"
    },
    {
        slug: "valor-legends-hack",
        img: "https://i.imgur.com/cm3ufj9.jpeg",
        name: "Valor Legends Hack",
        "data-ai-hint": "fantasy game",
        "description": "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-29"
    },
    {
        slug: "star-wars-galaxy-of-heroes-hack",
        img: "https://i.imgur.com/qFY4m4t.jpeg",
        name: "Star Wars: Galaxy of Heroes Hack",
        "data-ai-hint": "sci-fi game",
        "description": "Unlimited Crystals!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-28"
    },
    {
        slug: "best-friends-hack",
        img: "https://i.imgur.com/NYCmoVJ.jpeg",
        name: "Best Friends Hack",
        "data-ai-hint": "puzzle game",
        "description": "Unlimited Gold & Keys!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-27"
    },
    {
        slug: "beatstar-hack",
        img: "https://i.imgur.com/KYT7Xrn.jpeg",
        name: "Beatstar Hack",
        "data-ai-hint": "music game",
        "description": "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-26"
    },
    {
        slug: "hungry-shark-world-hack",
        img: "https://i.imgur.com/OkWbNly.jpeg",
        name: "Hungry Shark World Hack",
        "data-ai-hint": "shark game",
        "description": "Unlimited Coins & Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-25"
    },
    {
        slug: "golf-battle-hack",
        img: "https://i.imgur.com/kQNvtV3.jpeg",
        name: "Golf Battle Hack",
        "data-ai-hint": "golf game",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-24"
    },
    {
        slug: "fc-mobile",
        img: "https://i.imgur.com/nATWBTW.jpeg",
        name: "FC Mobile",
        "data-ai-hint": "football game",
        "description": "Install FC Mobile on iOS/Android!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-23"
    },
    {
        slug: "match-masters-mod",
        img: "https://i.imgur.com/UzciDnD.jpeg",
        name: "Match Masters Mod",
        "data-ai-hint": "puzzle game",
        "description": "Unlimited Coins, Boosters & Free Shopping for iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-22"
    },
    {
        slug: "nova-legacy-mod",
        img: "https://i.imgur.com/FN5zMDe.png",
        name: "N.O.V.A. Legacy Mod",
        "data-ai-hint": "sci-fi game",
        "description": "Unlimited Money, Trilithium, VIP Unlocks for iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-21"
    },
    {
        slug: "forge-of-empires-mod",
        img: "https://i.imgur.com/I1yUA4w.png",
        name: "Forge of Empires Mod",
        "data-ai-hint": "strategy game",
        "description": "Unlimited Diamonds, Supplies & Free Shopping on iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-20"
    },
    {
        slug: "carx-street-mod",
        img: "https://i.imgur.com/ww6283n.jpeg",
        name: "CarX Street Mod",
        "data-ai-hint": "car game",
        "description": "Unlimited money – upgrade cars & builds (iOS/Android)",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-19"
    },
    {
        slug: "nulls-brawl",
        img: "https://i.imgur.com/qvEKuwI.jpeg",
        name: "Null's Brawl",
        "data-ai-hint": "brawler game",
        "description": "Private Brawl Stars server – easy install for iOS & Android",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-18"
    },
    {
        slug: "mortal-kombat-mod",
        img: "https://i.imgur.com/GPmMlCV.jpeg",
        name: "Mortal Kombat Mod",
        "data-ai-hint": "fighting game",
        "description": "Unlimited Souls & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-17"
    },
    {
        slug: "loot-boy-mod",
        img: "https://i.imgur.com/9UeNwnL.jpeg",
        name: "Loot Boy Mod",
        "data-ai-hint": "loot game",
        "description": "Unlimited Diamonds, Tickets & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-16"
    },
    {
        slug: "bus-simulator-ultimate-mod",
        img: "https://i.imgur.com/z5SVQvN.jpeg",
        name: "Bus Simulator: Ultimate Mod",
        "data-ai-hint": "bus simulator",
        "description": "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-15"
    },
    {
        slug: "race-master-3d-mod",
        img: "https://i.imgur.com/f2b9l1a.jpeg",
        name: "Race Master 3D Mod",
        "data-ai-hint": "racing game",
        "description": "Unlimited Money, Nitro & Shields!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-14"
    },
    {
        slug: "ninja-turtles-legends-mod",
        img: "https://i.imgur.com/5enzvGz.jpeg",
        name: "Ninja Turtles: Legends Mod",
        "data-ai-hint": "action game",
        "description": "Unlimited Greenbacks & Everything!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-13"
    },
    {
        slug: "guns-of-boom-mod",
        img: "https://i.imgur.com/iv7W48d.jpeg",
        name: "Guns of Boom Mod",
        "data-ai-hint": "shooter game",
        "description": "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-12"
    },
    {
        slug: "mini-world-mod",
        img: "https://i.imgur.com/t90YbJ7.jpeg",
        name: "Mini World Mod",
        "data-ai-hint": "block game",
        "description": "Unlimited Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-11"
    },
    {
        slug: "blockman-go-mod",
        img: "https://i.imgur.com/GM40RZm.jpeg",
        name: "Blockman GO Mod",
        "data-ai-hint": "block game",
        "description": "Unlimited GCubes & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-10"
    },
    {
        slug: "dead-by-daylight-mod",
        img: "https://i.imgur.com/ci82VQ5.jpeg",
        name: "Dead by Daylight Mod",
        "data-ai-hint": "horror game",
        "description": "Unlimited Auric Cells & More!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-09"
    },
    {
        slug: "the-sims-mod",
        img: "https://i.imgur.com/RoGapCb.jpeg",
        name: "The Sims™ Mod",
        "data-ai-hint": "simulation game",
        "description": "Unlimited Money & Simcash!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-08"
    },
    {
        slug: "lol-wild-rift-mod",
        img: "https://i.imgur.com/HA9DzHn.jpeg",
        name: "LOL: Wild Rift Mod",
        "data-ai-hint": "moba game",
        "description": "Unlimited Wild Cores!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-07"
    },
    {
        slug: "pubg-mobile-mod",
        img: "https://i.imgur.com/cThCbh8.jpeg",
        name: "PUBG Mobile Mod",
        "data-ai-hint": "shooter game",
        "description": "Unlimited UC, Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-06"
    },
    {
        slug: "last-day-on-earth-survival-mod",
        img: "https://i.imgur.com/zGEfhmo.jpeg",
        name: "Last Day on Earth: Survival Mod",
        "data-ai-hint": "survival game",
        "description": "Unlimited Coins & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-05"
    },
    {
        slug: "teamfight-tactics-mod",
        img: "https://i.imgur.com/9ZCZck1.jpeg",
        name: "TeamFight Tactics Mod",
        "data-ai-hint": "strategy game",
        "description": "Unlimited Coins & Star Fragments!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-04"
    },
    {
        slug: "jetpack-joyride-mod",
        img: "https://i.imgur.com/SHsNAMD.jpeg",
        name: "Jetpack Joyride Mod",
        "data-ai-hint": "runner game",
        "description": "Unlimited Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-03"
    },
    {
        slug: "baseball-9-mod",
        img: "https://i.imgur.com/PevNHtH.jpeg",
        name: "Baseball 9 Mod",
        "data-ai-hint": "baseball game",
        "description": "Unlimited Money & Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-07-02"
    },
    {
        slug: "photos-plus",
        img: "https://i.imgur.com/X78CBbO.png",
        "name": "Photos+",
        "data-ai-hint": "photo recovery",
        "description": "Recover deleted Photos/Videos on iOS & Android!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-07-01"
    },
    {
        slug: "harry-potter-puzzles-and-spells-mod",
        img: "https://i.imgur.com/1Ae1HUj.jpeg",
        name: "Harry Potter: Puzzles & Spells Mod",
        "data-ai-hint": "puzzle game",
        "description": "Unlimited Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-30"
    },
    {
        slug: "injustice-2-mod",
        img: "https://i.imgur.com/ecCKqAb.jpeg",
        name: "Injustice 2 Mod",
        "data-ai-hint": "fighting game",
        "description": "Unlimited Gems & Credits!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-29"
    },
    {
        slug: "king-of-thieves-mod",
        img: "https://i.imgur.com/vCWr1Yd.jpeg",
        name: "King of Thieves Mod",
        "data-ai-hint": "thief game",
        "description": "Unlimited Orbs & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-28"
    },
    {
        slug: "monster-legends-mod",
        img: "https://i.imgur.com/YoiDkaH.jpeg",
        name: "Monster Legends Mod",
        "data-ai-hint": "monster game",
        "description": "Unlimited Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-27"
    },
    {
        slug: "scrabble-go-mod",
        img: "https://i.imgur.com/7lJAiF0.jpeg",
        name: "Scrabble GO Mod",
        "data-ai-hint": "word game",
        "description": "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-26"
    },
    {
        slug: "state-of-survival-mod",
        img: "https://i.imgur.com/qK0wUbz.jpeg",
        name: "State of Survival Mod",
        "data-ai-hint": "survival game",
        "description": "Unlimited Biocaps & Resources!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-25"
    },
    {
        slug: "hungry-shark-evolution-mod",
        img: "https://i.imgur.com/Dcid1F2.jpeg",
        name: "Hungry Shark Evolution Mod",
        "data-ai-hint": "shark game",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-24"
    },
    {
        slug: "soul-knight-mod",
        img: "https://i.imgur.com/MxN7vqH.jpeg",
        name: "Soul Knight Mod",
        "data-ai-hint": "dungeon game",
        "description": "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-23"
    },
    {
        slug: "criminal-case-mod",
        img: "https://i.imgur.com/bkhqT3H.jpeg",
        name: "Criminal Case Mod",
        "data-ai-hint": "detective game",
        "description": "Unlimited Cash & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-22"
    },
    {
        slug: "frag-pro-shooter-mod",
        img: "https://i.imgur.com/AGM5hqE.jpeg",
        name: "FRAG Pro Shooter Mod",
        "data-ai-hint": "shooter game",
        "description": "Unlimited Diamonds & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-21"
    },
    {
        slug: "dc-legends-mod",
        img: "https://i.imgur.com/OBHbEhE.jpeg",
        name: "DC Legends Mod",
        "data-ai-hint": "superhero game",
        "description": "Unlimited Gems & Energy!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-20"
    },
    {
        slug: "fr-legends-mod",
        img: "https://i.imgur.com/ZxpS32A.jpeg",
        name: "FR Legends Mod",
        "data-ai-hint": "drifting game",
        "description": "Unlimited Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-19"
    },
    {
        slug: "dungeon-hunter-5-mod",
        img: "https://i.imgur.com/fZaPTZk.jpeg",
        name: "Dungeon Hunter 5 Mod",
        "data-ai-hint": "dungeon rpg",
        "description": "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-18"
    },
    {
        slug: "looney-tunes-world-of-mayhem-mod",
        img: "https://i.imgur.com/ILYs6Lg.jpeg",
        name: "Looney Tunes™ World of Mayhem Mod",
        "data-ai-hint": "cartoon game",
        "description": "Unlimited Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-17"
    },
    {
        slug: "need-for-speed-no-limits-mod",
        img: "https://i.imgur.com/5Yqlgg5.jpeg",
        name: "Need for Speed™ No Limits Mod",
        "data-ai-hint": "racing game",
        "description": "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-16"
    },
    {
        slug: "ice-age-adventures-mod",
        img: "https://i.imgur.com/Bx69dSO.jpeg",
        name: "Ice Age Adventures Mod",
        "data-ai-hint": "adventure game",
        "description": "Unlimited Acorns!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-15"
    },
    {
        slug: "score-hero-2022-mod",
        img: "https://i.imgur.com/ujRHvBz.jpeg",
        name: "Score! Hero 2022 Mod",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-14"
    },
    {
        slug: "gangstar-vegas-mod",
        img: "https://i.imgur.com/GtpkLZt.jpeg",
        name: "Gangstar Vegas Mod",
        "data-ai-hint": "gangster game",
        "description": "Unlimited Diamonds & Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-13"
    },
    {
        slug: "dislyte-mod",
        img: "https://i.imgur.com/O1IAYpK.jpeg",
        name: "Dislyte Mod",
        "data-ai-hint": "mythic rpg",
        "description": "Unlimited Crystals & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-12"
    },
    {
        slug: "the-wolf-mod",
        img: "https://i.imgur.com/KRobVTS.jpeg",
        name: "The Wolf Mod",
        "data-ai-hint": "wolf simulator",
        "description": "Unlimited Gems & Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-11"
    },
    {
        slug: "traffic-rider-mod",
        img: "https://i.imgur.com/h3eF6FU.jpeg",
        name: "Traffic Rider Mod",
        "data-ai-hint": "motorcycle game",
        "description": "Unlimited Money & Cash!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-10"
    },
    {
        slug: "skullgirls-mod",
        img: "https://i.imgur.com/xvhkfhL.jpeg",
        name: "Skullgirls Mod",
        "data-ai-hint": "fighting game",
        "description": "Unlimited Theonite!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-09"
    },
    {
        slug: "infinity-kingdom-mod",
        img: "https://i.imgur.com/epyQAFG.jpeg",
        name: "Infinity Kingdom Mod",
        "data-ai-hint": "strategy game",
        "description": "Unlimited Gems!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-08"
    },
    {
        slug: "mighty-party-mod",
        img: "https://i.imgur.com/TnqOIo0.jpeg",
        name: "Mighty Party Mod",
        "data-ai-hint": "hero battler",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-07"
    },
    {
        slug: "pocket-troops-mod",
        img: "https://i.imgur.com/GUU5sXx.jpeg",
        name: "Pocket Troops Mod",
        "data-ai-hint": "tactical game",
        "description": "Unlimited Coins & Cash!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-06"
    },
    {
        slug: "top-war-mod",
        img: "https://i.imgur.com/GTAlQzP.jpeg",
        name: "Top War Mod",
        "data-ai-hint": "strategy game",
        "description": "Unlimited Diamonds & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-05"
    },
    {
        slug: "war-and-order-mod",
        img: "https://i.imgur.com/pvaRLDg.jpeg",
        name: "War and Order Mod",
        "data-ai-hint": "strategy game",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-04"
    },
    {
        slug: "world-chef-mod",
        img: "https://i.imgur.com/lJGGZN4.jpeg",
        name: "World Chef Mod",
        "data-ai-hint": "cooking game",
        "description": "Unlimited Gems & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-03"
    },
    {
        slug: "angry-birds-evolution-mod",
        img: "https://i.imgur.com/BXKcVmy.jpeg",
        name: "Angry Birds Evolution Mod",
        "data-ai-hint": "bird game",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-02"
    },
    {
        slug: "project-makeover-mod",
        img: "https://i.imgur.com/IO2IdIQ.jpeg",
        name: "Project Makeover Mod",
        "data-ai-hint": "makeover game",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-06-01"
    },
    {
        slug: "basketball-stars-mod",
        img: "https://i.imgur.com/U0tFpXg.jpeg",
        name: "Basketball Stars Mod",
        "data-ai-hint": "basketball game",
        "description": "Unlimited Money & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-31"
    },
    {
        slug: "disney-heroes-mod",
        img: "https://i.imgur.com/wpvpO0V.jpeg",
        name: "Disney Heroes Mod",
        "data-ai-hint": "disney game",
        "description": "Unlimited Diamonds & Gold!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-30"
    },
    {
        slug: "lilys-garden-mod",
        img: "https://i.imgur.com/dee3c7i.jpeg",
        name: "Lily's Garden Mod",
        "data-ai-hint": "garden game",
        "description": "Unlimited Stars & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-29"
    },
    {
        slug: "tennis-clash-mod",
        img: "https://i.imgur.com/KuqWj0q.jpeg",
        name: "Tennis Clash Mod",
        "data-ai-hint": "tennis game",
        "description": "Unlimited Gems & Coins!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-28"
    },
    {
        slug: "pvz-heroes-mod",
        img: "https://i.imgur.com/t6RvgZr.jpeg",
        name: "PvZ Heroes Mod",
        "data-ai-hint": "card game",
        "description": "Unlimited Gems & Cards!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-27"
    },
    {
        slug: "nba-live-mobile-mod",
        img: "https://i.imgur.com/7xFvMdi.jpeg",
        name: "NBA Live Mobile Mod",
        "data-ai-hint": "basketball game",
        "description": "Unlimited Money!",
        version: "1.0.0",
        category: "Games",
        lastModified: "2025-05-26"
    },
    {
        slug: "dragon-mania-legends-mod",
        img: "https://i.imgur.com/xhAYWdn.jpeg",
        name: "Dragon Mania Legends Mod",
        "description": "Unlimited Gems & Coins!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-05-25",
        "data-ai-hint": "dragon game"
    },
    {
        "slug": "among-us-mod",
        "img": "https://i.imgur.com/fJeWDXH.png",
        "name": "Among Us MOD",
        "data-ai-hint": "game mod",
        "description": "Imposter When You Want & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "apple-music",
        "img": "https://i.imgur.com/mWy5Hxe.png",
        "name": "Apple Music",
        "data-ai-hint": "music app",
        "description": "Free Apple Music & Unlock All Features!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "appstore-plus-plus",
        "img": "https://i.imgur.com/xcuYI12.png",
        "name": "AppStore++",
        "data-ai-hint": "app store",
        "description": "Get iOS Paid Apps For Free!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "auto-clicker",
        "img": "https://i.imgur.com/alRhRj9.png",
        "name": "Auto Clicker",
        "data-ai-hint": "utility tool",
        "description": "Auto Clicker For Any App!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "avakin-life-plus-plus",
        "img": "https://i.imgur.com/rXM6GIh.jpg",
        "name": "Avakin Life++",
        "data-ai-hint": "social game",
        "description": "Unlimited Avacoins, Gems & All Hidden Stuff",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "basketball-arena-plus-plus",
        "img": "https://i.imgur.com/hieOjQ1.jpg",
        "name": "Basketball Arena++",
        "data-ai-hint": "sports game",
        "description": "Unlimited Gold & Diamonds!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "shein-plus-plus",
        "img": "https://i.imgur.com/ojhhTl6.png",
        "name": "Shein++",
        "data-ai-hint": "shopping app",
        "description": "Get free clothes & coupon code",
        "version": "1.0.0",
        "category": "Apps",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "facebook-recover-app",
        "img": "https://i.imgur.com/1Z2rxyK.png",
        "name": "Facebook Recover App",
        "data-ai-hint": "recovery tool",
        "description": "Recover App iOS/Android",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ios-downgrader",
        "img": "https://i.imgur.com/puUG6Vx.png",
        "name": "iOS Downgrader",
        "data-ai-hint": "system tool",
        "description": "Downgrade to Any iOS Version!",
        "version": "1.0.0",
        "category": "Developer Tools",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "efootball-pes-2024-mod",
        "img": "https://i.imgur.com/xgC6p4m.png",
        "name": "eFootball Pes 2024 MOD",
        "data-ai-hint": "football game",
        "description": "MOD for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ea-sports-fc-mobile-24",
        "img": "https://i.imgur.com/M5GuyLN.png",
        "name": "EA SPORTS FC Mobile 24",
        "data-ai-hint": "football game",
        "description": "MOD For iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "madfut-24-plus-plus",
        "img": "https://i.imgur.com/bksYLNR.png",
        "name": "MadFut 24++",
        "data-ai-hint": "football game",
        "description": "MOD For iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "8-ball-pool-mod-menu",
        "img": "https://i.imgur.com/0eBpy3X.png",
        "name": "8 Ball Pool Mod Menu",
        "data-ai-hint": "pool game",
        "description": "Mod Menu + Unlimited Money!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "dls-24-hack",
        "img": "https://i.imgur.com/3Rpbg98.png",
        "name": "DLS 24 Hack",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Diamonds & Coins!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "monster-hunter-now-mod",
        "img": "https://i.imgur.com/PkIyOjr.png",
        "name": "Monster Hunter Now MOD",
        "data-ai-hint": "monster game",
        "description": "MOD For iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "screen-time-plus-plus",
        "img": "https://i.imgur.com/6RvCKl1.png",
        "name": "Screen Time++",
        "data-ai-hint": "utility tool",
        "description": "Bypass Screen time Passcode!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "dragon-ball-legends-patch",
        "img": "https://i.imgur.com/UtNTelO.png",
        "name": "Dragon Ball Legends Patch",
        "data-ai-hint": "anime game",
        "description": "Unlimited Free Chrono Crystals",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "grindr-xtra",
        "img": "https://i.imgur.com/JPJN8Sv.png",
        "name": "Grindr XTRA",
        "data-ai-hint": "dating app",
        "description": "Free install iOS/Android",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "holoflash",
        "img": "https://i.imgur.com/4tUcJEG.png",
        "name": "HOLOflash",
        "data-ai-hint": "projector app",
        "description": "HOLOflash Projector App for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tentacle-locker-mobile",
        "img": "https://i.imgur.com/nCou1yz.png",
        "name": "Tentacle Locker Mobile",
        "data-ai-hint": "mobile game",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "beamng-driver",
        "img": "https://i.imgur.com/RtLMu6J.png",
        "name": "BeamNg Driver",
        "data-ai-hint": "driving game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "hunting-sniper-mod",
        "img": "https://i.imgur.com/BUMqJLX.png",
        "name": "Hunting Sniper Mod",
        "data-ai-hint": "sniper game",
        "description": "Hunting Sniper Mod",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "fc-mobile-25-mod",
        "img": "https://i.imgur.com/VR8OomZ.png",
        "name": "FC Mobile 25 Mod",
        "data-ai-hint": "football game",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "top-eleven-2025-mod",
        "img": "https://i.imgur.com/zA03bxP.png",
        "name": "Top Eleven 2025 Mod",
        "data-ai-hint": "soccer manager",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "cartube",
        "img": "https://i.imgur.com/07ueAjg.png",
        "name": "CarTube",
        "data-ai-hint": "car app",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "black-myth-wukong",
        "img": "https://i.imgur.com/2chlvAC.png",
        "name": "Black Myth Wukong",
        "data-ai-hint": "action rpg",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "madden-nfl-25-mobile-mod",
        "img": "https://i.imgur.com/qP1Qhgs.png",
        "name": "Madden NFL 25 Mobile Mod",
        "data-ai-hint": "football game",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pocketfm-coins",
        "img": "https://i.imgur.com/AfS9A4h.png",
        "name": "PocketFM Coins",
        "data-ai-hint": "audio app",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "dramabox",
        "img": "https://i.imgur.com/EDd37z1.png",
        "name": "DramaBox",
        "data-ai-hint": "video app",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "shortmax-coins",
        "img": "https://i.imgur.com/bQHTcY0.png",
        "name": "ShortMax Coins",
        "data-ai-hint": "video app",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pokemmo",
        "img": "https://i.imgur.com/0xT8xwa.png",
        "name": "PokeMMO",
        "data-ai-hint": "monster mmo",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "jenny-mcpe",
        "img": "https://i.imgur.com/eCl9nde.png",
        "name": "Jenny MCPE",
        "data-ai-hint": "minecraft mod",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "dls-2022-plus-plus",
        "img": "https://i.imgur.com/cFwiDZC.png",
        "name": "DLS 2022++",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Coins, Gems & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "roblox-studio",
        "img": "https://i.imgur.com/Nk047Cm.png",
        "name": "Roblox Studio",
        "data-ai-hint": "game creation",
        "description": "Roblox Studio iOS/Android!",
        "version": "1.0.0",
        "category": "Developer Tools",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "harry-potter-hogwarts-mystery-mod",
        "img": "https://i.imgur.com/tBWnGPc.png",
        "name": "Harry Potter Hogwarts Mystery MOD",
        "data-ai-hint": "magic game",
        "description": "Energy Mod iOS & Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mini-militia-mod-menu",
        "img": "https://i.imgur.com/OspeCqq.png",
        "name": "Mini Militia Mod Menu",
        "data-ai-hint": "shooter game",
        "description": "Mod Menu iOS & Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "csr-2-mod",
        "img": "https://i.imgur.com/xhw0o6b.png",
        "name": "CSR 2 MOD",
        "data-ai-hint": "racing game",
        "description": "Hacked iOS & Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "car-parking-multiplayer-plus-plus",
        "img": "https://i.imgur.com/mQrCDBr.png",
        "name": "Car Parking Multiplayer++",
        "data-ai-hint": "car game",
        "description": "Unlimited Money, Remove Ads & All Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tutubox",
        "img": "https://i.imgur.com/vZ7dBEe.png",
        "name": "Tutubox",
        "data-ai-hint": "app installer",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "amazon-free-orders",
        "img": "https://i.imgur.com/j8vxruN.png",
        "name": "Amazon (Free Orders)",
        "data-ai-hint": "shopping app",
        "description": "Amazon",
        "version": "1.0.0",
        "category": "Apps",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "procreate",
        "img": "https://i.imgur.com/J9TPB6S.png",
        "name": "Procreate",
        "data-ai-hint": "drawing app",
        "description": "Full App for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Apps",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "efootball-2023-mod",
        "img": "https://i.imgur.com/hmj8n7y.png",
        "name": "eFootball 2023 Mod",
        "data-ai-hint": "football game",
        "description": "For iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "madden-23-nfl-mod",
        "img": "https://i.imgur.com/WUrQegY.png",
        "name": "Madden 23 NFL Mod",
        "data-ai-hint": "football game",
        "description": "Madden Cash Modded!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "township-plus-plus",
        "img": "https://i.imgur.com/jRK8ll6.png",
        "name": "Township++",
        "data-ai-hint": "city game",
        "description": "Unlimited Coins & Cash!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mad-fut-23-plus-plus",
        "img": "https://i.imgur.com/RuoEhwy.png",
        "name": "MAD FUT 23++",
        "data-ai-hint": "football game",
        "description": "Unlimited Packs, Coins, Cards & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "survivor-io-plus-plus",
        "img": "https://i.imgur.com/jtujuR8.png",
        "name": "Survivor.io++",
        "data-ai-hint": "survival game",
        "description": "Unlimited Gems, Chapter Packs & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "my-singing-monsters-plus-plus",
        "img": "https://i.imgur.com/QiwhKTE.png",
        "name": "My Singing Monsters++",
        "data-ai-hint": "music game",
        "description": "Unlimted Diamonds & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "dls-2023-plus-plus",
        "img": "https://i.imgur.com/LTHNYV4.png",
        "name": "DLS 2023++",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Coins, Gems & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "nba-2k23-mobile",
        "img": "https://i.imgur.com/Id3vgsP.png",
        "name": "NBA 2K23 Mobile",
        "data-ai-hint": "basketball game",
        "description": "For iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "nulls-royale",
        "img": "https://i.imgur.com/wyPrLnT.png",
        "name": "Null's Royale",
        "data-ai-hint": "strategy game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "simcity-buildit-plus-plus",
        "img": "https://i.imgur.com/FrrqMHh.png",
        "name": "Simcity Buildit++",
        "data-ai-hint": "city builder",
        "description": "Unlimited Resources & More",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ppsspp-gold",
        "img": "https://i.imgur.com/UBwzSAa.png",
        "name": "PPSSPP Gold",
        "data-ai-hint": "game emulator",
        "description": "PPSSPP Gold Install iOS & Android",
        "version": "1.0.0",
        "category": "Emulators",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "taptap-ios-apk",
        "img": "https://i.imgur.com/V6PxvfL.png",
        "name": "Taptap IOS/APK",
        "data-ai-hint": "app store",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "imvu-plus-plus",
        "img": "https://i.imgur.com/LoOBm2y.png",
        "name": "IMVU++",
        "data-ai-hint": "social avatar",
        "description": "Get Free IMVU Credits",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mario-kart-tour-plus-plus",
        "img": "https://i.imgur.com/aE7GXSk.png",
        "name": "Mario Kart Tour++",
        "data-ai-hint": "racing game",
        "description": "Unlimited Rubies MOD. FREE STORE",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mudness-offroad-car-simulator-mod",
        "img": "https://i.imgur.com/TB7keS8.png",
        "name": "Mudness Offroad Car Simulator MOD",
        "data-ai-hint": "car simulator",
        "description": "999999 Gold & Silver Hack",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tesla-jailbreak",
        "img": "https://i.imgur.com/QdNei3B.png",
        "name": "Tesla Jailbreak",
        "data-ai-hint": "car hack",
        "description": "Install for iPhone iOS & Android",
        "version": "1.0.0",
        "category": "Tweaks",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "fnaf-security-breach-mobile",
        "img": "https://i.imgur.com/PEcBfVL.png",
        "name": "FNAF Security Breach Mobile",
        "data-ai-hint": "horror game",
        "description": "iOS & Android Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "upgrade-to-ios-15",
        "img": "https://i.imgur.com/TRqGzGw.png",
        "name": "Upgrade to iOS 15",
        "data-ai-hint": "system utility",
        "description": "For iPhone 6 or Lower",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "crunchyroll-plus-plus",
        "img": "https://i.imgur.com/eyFGch7.png",
        "name": "Crunchyroll++",
        "data-ai-hint": "anime streaming",
        "description": "Crunchyroll Premium for Free!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gacha-nebula",
        "img": "https://i.imgur.com/NEnc0FS.png",
        "name": "Gacha Nebula",
        "data-ai-hint": "gacha game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "legend-of-slime-plus-plus",
        "img": "https://i.imgur.com/t0zCfJf.png",
        "name": "Legend of Slime++",
        "data-ai-hint": "idle rpg",
        "description": "Unlimited Gems, Premium Pass & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "replika",
        "img": "https://i.imgur.com/ahwigM2.png",
        "name": "Replika",
        "data-ai-hint": "ai companion",
        "description": "Pro Mod, Unlimited Gems & More Features!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "street-fighter-duel-plus-plus",
        "img": "https://i.imgur.com/csSduqa.png",
        "name": "Street Fighter Duel++",
        "data-ai-hint": "fighting game",
        "description": "Unlimited Gems, Fight Mall and more features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "idle-office-tycoon-plus-plus",
        "img": "https://i.imgur.com/80fjVXM.png",
        "name": "Idle Office Tycoon++",
        "data-ai-hint": "tycoon game",
        "description": "Unlimited Diamonds, No Ads & More Features",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "yandere-simulator",
        "img": "https://i.imgur.com/jjmKiSK.png",
        "name": "Yandere Simulator",
        "data-ai-hint": "stealth game",
        "description": "iOS/Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tag-after-school",
        "img": "https://i.imgur.com/85CIdO6.png",
        "name": "Tag After School",
        "data-ai-hint": "horror game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "arceus-x-v3",
        "img": "https://i.imgur.com/1l6Y2Fd.png",
        "name": "Arceus X V3",
        "data-ai-hint": "roblox exploit",
        "description": "Latest version Arceus X V3 on iOS & Android!",
        "version": "1.0.0",
        "category": "Tweaks",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gacha-art",
        "img": "https://i.imgur.com/8XsNjZN.png",
        "name": "Gacha Art",
        "data-ai-hint": "gacha game",
        "description": "Full Game Download iOS & Android App!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pokemon-legends-arceus-mobile",
        "img": "https://i.imgur.com/S8KIlvn.png",
        "name": "Pokemon Legends Arceus Mobile",
        "data-ai-hint": "monster game",
        "description": "iOS & Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "zepeto-plus-plus",
        "img": "https://i.imgur.com/s8j8kSC.png",
        "name": "Zepeto++",
        "data-ai-hint": "avatar creator",
        "description": "Unlimited Zems & More!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "nba-plus-plus",
        "img": "https://i.imgur.com/JO1rvQW.png",
        "name": "NBA++",
        "data-ai-hint": "sports streaming",
        "description": "Watch NBA Games for Free!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "zoom-cloud-meetings",
        "img": "https://i.imgur.com/LwMoKlu.png",
        "name": "ZOOM Cloud Meetings",
        "data-ai-hint": "video conference",
        "description": "No Jailbreak or Root Required!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "nba-2k22-mobile",
        "img": "https://i.imgur.com/4dvbsPJ.png",
        "name": "NBA 2K22 Mobile",
        "data-ai-hint": "basketball game",
        "description": "NBA 2K22 Mobile Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "zinitevi",
        "img": "https://i.imgur.com/i7PKEXg.png",
        "name": "ZiniTevi",
        "data-ai-hint": "movie app",
        "description": "iOS/Android Download!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pikashow",
        "img": "https://i.imgur.com/JQHiPra.png",
        "name": "Pikashow",
        "data-ai-hint": "movie app",
        "description": "iOS & Android Downloa!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tutuvalley-plus-plus",
        "img": "https://i.imgur.com/j0UzDWk.png",
        "name": "TutuValley++",
        "data-ai-hint": "app installer",
        "description": "Get Tweaked Apps on any iOS devices!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tiktok-18-plus",
        "img": "https://i.imgur.com/xgYYeeC.png",
        "name": "TikTok 18+",
        "data-ai-hint": "social video",
        "description": "iOS/Android Install",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "top-war-hack",
        "img": "https://i.imgur.com/8YUziOg.png",
        "name": "Top War Hack",
        "data-ai-hint": "strategy game",
        "description": "iOS/Android Install",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ngl-plus-plus",
        "img": "https://i.imgur.com/9mxUg2N.png",
        "name": "NGL++",
        "data-ai-hint": "social anonymous",
        "description": "See Who Sent Message, Unlimited Hints & Premium Features!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "monkey-plus-plus",
        "img": "https://i.imgur.com/rVxJ1p3.png",
        "name": "Monkey++",
        "data-ai-hint": "social video",
        "description": "Money APP (iOS & Android) + Phantom V2.7A",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "hbo-max-plus-plus",
        "img": "https://i.imgur.com/Ixl2ERr.png",
        "name": "HBO Max++",
        "data-ai-hint": "movie streaming",
        "description": "Free HBO Max!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "cydia",
        "img": "https://i.imgur.com/RlUrNUP.png",
        "name": "Cydia",
        "data-ai-hint": "jailbreak app",
        "description": "Cydia Rootjack (IOS 12,13,14 & 15)",
        "version": "1.0.0",
        "category": "Developer Tools",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "dragon-city-plus-plus",
        "img": "https://i.imgur.com/fMHIDTg.png",
        "name": "Dragon City++",
        "data-ai-hint": "dragon game",
        "description": "Free Gems & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "stardew-valley",
        "img": "https://i.imgur.com/s1c4IIX.png",
        "name": "Stardew Valley",
        "data-ai-hint": "farming sim",
        "description": "FREE Download iOS/Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ufc-mobile-2-mod",
        "img": "https://i.imgur.com/YV1o9Lu.png",
        "name": "UFC Mobile 2 Mod",
        "data-ai-hint": "fighting game",
        "description": "iOS/Android UFC Mobile 2 Mod",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "f1-mobile-racing-hack",
        "img": "https://i.imgur.com/phL9A6w.png",
        "name": "F1 Mobile Racing Hack",
        "data-ai-hint": "racing game",
        "description": "Hacked for iOS & Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "rokkr-plus-plus",
        "img": "https://i.imgur.com/T48tfDx.jpg",
        "name": "Rokkr++",
        "data-ai-hint": "movie app",
        "description": "Free Movies/TV Shows App",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "youtube-plus-plus",
        "img": "https://i.imgur.com/sTyZf0b.jpg",
        "name": "Youtube++",
        "data-ai-hint": "video app",
        "description": "Get Free Premium & More!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "playstore-plus-plus",
        "img": "https://i.imgur.com/HpjwrkV.png",
        "name": "PlayStore++",
        "data-ai-hint": "app store",
        "description": "Playstore++ IOS/Android [UID Emulator]",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "nba-2k21-arcade-plus-plus",
        "img": "https://i.imgur.com/hyr09iw.png",
        "name": "NBA 2K21 Arcade++",
        "data-ai-hint": "basketball game",
        "description": "Free Download for iOS & Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "delta-plus-plus",
        "img": "https://i.imgur.com/wpFHXlq.png",
        "name": "Delta++",
        "data-ai-hint": "game emulator",
        "description": "With Multiplayer!",
        "version": "1.0.0",
        "category": "Emulators",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "moviebox-pro-plus-plus",
        "img": "https://i.imgur.com/y4191mN.png",
        "name": "Moviebox Pro++",
        "data-ai-hint": "movie app",
        "description": "No Jailbreak or Root Required!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gps-spoofer",
        "img": "https://i.imgur.com/irde8LK.png",
        "name": "GPS Spoofer",
        "data-ai-hint": "location tool",
        "description": "No Jailbreak or Root Required!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "blockman-go-plus-plus",
        "img": "https://i.imgur.com/FkOWrNi.png",
        "name": "Blockman Go++",
        "data-ai-hint": "block game",
        "description": "Unlimited Gcubes, Lifetime MVP & more features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "the-sims-4-mobile",
        "img": "https://i.imgur.com/7zOcr6O.png",
        "name": "The Sims 4 Mobile",
        "data-ai-hint": "simulation game",
        "description": "IOS/Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gta-vice-city-plus-plus",
        "img": "https://i.imgur.com/mkcBhg1.png",
        "name": "GTA Vice City++",
        "data-ai-hint": "action game",
        "description": "Download Gta Vice City on IOS/Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "bitlife-plus-plus",
        "img": "https://i.imgur.com/sEdZTGa.png",
        "name": "BitLife++",
        "data-ai-hint": "simulation game",
        "description": "BitLife MOD Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "summertime-saga",
        "img": "https://i.imgur.com/hPJ5Lw0.png",
        "name": "Summertime Saga",
        "data-ai-hint": "visual novel",
        "description": "Download for iOS & Android!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "efootball-pes-2022-plus-plus",
        "img": "https://i.imgur.com/JkotJkU.png",
        "name": "eFootball PES 2022++",
        "data-ai-hint": "football game",
        "description": "Unlimited myClub Coins & GP!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "extreme-car-driving-simulator-mod",
        "img": "https://i.imgur.com/dytUa6L.png",
        "name": "Extreme Car Driving Simulator Mod",
        "data-ai-hint": "car simulator",
        "description": "IOS & Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mech-arena-hack",
        "img": "https://i.imgur.com/226lCFD.png",
        "name": "Mech Arena Hack",
        "data-ai-hint": "robot shooter",
        "description": "IOS & Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "stumble-guys-plus-plus",
        "img": "https://i.imgur.com/0M9aDeG.png",
        "name": "Stumble Guys++",
        "data-ai-hint": "party game",
        "description": "Unlimited Coins, Gems & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pkxd-plus-plus",
        "img": "https://i.imgur.com/mMOZDlF.png",
        "name": "PKXD++",
        "data-ai-hint": "social game",
        "description": "iOS/Android PK XD Modded!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gba4ios-plus-plus",
        "img": "https://i.imgur.com/0wHngeZ.jpg",
        "name": "GBA4iOS++",
        "data-ai-hint": "game emulator",
        "description": "NO JAILBREAK REQUIRED. NEW Version!",
        "version": "1.0.0",
        "category": "Emulators",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "minecraft-pe",
        "img": "https://i.imgur.com/KSv6o2V.png",
        "name": "Minecraft PE",
        "data-ai-hint": "block game",
        "description": "Free Download for iOS/Android!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "wriz-v2",
        "img": "https://i.imgur.com/vL6uK6m.png",
        "name": "Wriz V2",
        "data-ai-hint": "utility tool",
        "description": "Free Download for iOS/Android!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "cookie-run-kingdom",
        "img": "https://i.imgur.com/GOs99Kk.png",
        "name": "Cookie Run: Kingdom",
        "data-ai-hint": "kingdom builder",
        "description": "GRAND BALL PACKAGE, Unlimited Crystals & All Features!!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "alight-motion-plus-plus",
        "img": "https://i.imgur.com/rZnFqk7.png",
        "name": "Alight Motion++",
        "data-ai-hint": "video editor",
        "description": "Latest IPA/APK: Unlock Alight Motion Pro. [NO JB/Root]",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "subway-surfers-mod",
        "img": "https://i.imgur.com/WBtlvf0.png",
        "name": "Subway Surfers Mod",
        "data-ai-hint": "runner game",
        "description": "Unlimited Coins/Boosts/Keys Mod",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "downgrade-from-ios-15",
        "img": "https://i.imgur.com/VCQHtdT.png",
        "name": "Downgrade from IOS 15",
        "data-ai-hint": "system utility",
        "description": "Downgrader App!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "nu-carnival",
        "img": "https://i.imgur.com/GojgsqU.png",
        "name": "NU: carnival",
        "data-ai-hint": "anime rpg",
        "description": "iOS & Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pocket-love",
        "img": "https://i.imgur.com/4vLo4zN.png",
        "name": "Pocket Love",
        "data-ai-hint": "life simulator",
        "description": "Unlimited Dogllars, Valentine's Pack & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "sims-freeplay-mod",
        "img": "https://i.imgur.com/Nnq1JKf.png",
        "name": "Sims FreePlay MOD",
        "data-ai-hint": "simulation game",
        "description": "Hack iOS/Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "your-boyfriend",
        "img": "https://i.imgur.com/kIet0yz.png",
        "name": "Your Boyfriend",
        "data-ai-hint": "visual novel",
        "description": "Mobile Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "minecraft-java-edition",
        "img": "https://i.imgur.com/OR9RUWK.png",
        "name": "Minecraft Java Edition",
        "data-ai-hint": "block game",
        "description": "Mobile Download",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "warzone-plus-plus",
        "img": "https://i.imgur.com/eYnBRQy.png",
        "name": "Warzone++",
        "data-ai-hint": "shooter game",
        "description": "Get Free COD Points & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "citra",
        "img": "https://i.imgur.com/3S91VE8.png",
        "name": "Citra",
        "data-ai-hint": "game emulator",
        "description": "3DS Emulator for iOS & Android!",
        "version": "1.0.0",
        "category": "Emulators",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "psn-recovery",
        "img": "https://i.imgur.com/u9Wvjol.png",
        "name": "PSN Recovery",
        "data-ai-hint": "account recovery",
        "description": "Recover Your PSN Account",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "retro-bowl-plus-plus",
        "img": "https://i.imgur.com/w2ojenF.png",
        "name": "Retro Bowl++",
        "data-ai-hint": "football game",
        "description": "Unlimited Coaching Credits & More Features !",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mad-fut-22-plus-plus",
        "img": "https://i.imgur.com/xYJhLA4.png",
        "name": "MAD FUT 22++",
        "data-ai-hint": "football game",
        "description": "Unlimited Packs, Coins, Cards & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "clash-royale-plus-plus",
        "img": "https://i.imgur.com/5EXVxC2.png",
        "name": "Clash Royale++",
        "data-ai-hint": "strategy game",
        "description": "Get Free Gems & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "diablo-immortal-mod",
        "img": "https://i.imgur.com/2ZmvAg1.png",
        "name": "Diablo Immortal Mod",
        "data-ai-hint": "action rpg",
        "description": "Eternal Orbs & Platinum",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "valorant",
        "img": "https://i.imgur.com/8gJoQGI.png",
        "name": "Valorant",
        "data-ai-hint": "shooter game",
        "description": "Mobile version | Android + iOS",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "baseball-9-plus-plus",
        "img": "https://i.imgur.com/2QUaaZW.png",
        "name": "Baseball 9++",
        "data-ai-hint": "baseball game",
        "description": "Unlimited Gems & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "kakamanga",
        "img": "https://i.imgur.com/DevM1G0.png",
        "name": "KakaManga",
        "data-ai-hint": "manga reader",
        "description": "Best Manga App!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "apkpure",
        "img": "https://i.imgur.com/PZhfne5.png",
        "name": "APKPure",
        "data-ai-hint": "app store",
        "description": "APKPure Install iPhone iOS & Android",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "messenger-plus-plus",
        "img": "https://i.imgur.com/5akdEmP.png",
        "name": "Messenger++",
        "data-ai-hint": "chat app",
        "description": "Free Download for iOS & Android",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "fifa-soccer-plus-plus",
        "img": "https://i.imgur.com/sTQ4Pce.png",
        "name": "FIFA Soccer++",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Coins & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "lucky-patcher",
        "img": "https://i.imgur.com/syyGhjx.png",
        "name": "Lucky Patcher",
        "data-ai-hint": "android tool",
        "description": "No Jailbreak or Root Required",
        "version": "1.0.0",
        "category": "Tweaks",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ppsspp-emulator",
        "img": "https://i.imgur.com/sAcCRKk.png",
        "name": "PPSSPP Emulator",
        "data-ai-hint": "game emulator",
        "description": "PSP Emulator iOS & Android",
        "version": "1.0.0",
        "category": "Emulators",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "chegg-plus-plus",
        "img": "https://i.imgur.com/CePNKg5.png",
        "name": "Chegg++",
        "data-ai-hint": "education tool",
        "description": "See & Unblur Answers",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "course-hero-plus-plus",
        "img": "https://i.imgur.com/9g00DHi.png",
        "name": "Course Hero++",
        "data-ai-hint": "education tool",
        "description": "See Answers & More.",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "showbox",
        "img": "https://i.imgur.com/PQ94PsI.png",
        "name": "Showbox",
        "data-ai-hint": "movie app",
        "description": "Moviebox Pro VIP (New Showbox)",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "project-makeover-plus-plus",
        "img": "https://i.imgur.com/2oonwBm.png",
        "name": "Project Makeover++",
        "data-ai-hint": "puzzle game",
        "description": "Unlimited Gems and access to all premium content.",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "aptoide",
        "img": "https://i.imgur.com/eAAGTVk.png",
        "name": "Aptoide",
        "data-ai-hint": "app store",
        "description": "Aptoide++ Phantom V2.1 (No Jailbreak Required)",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "omegle-plus-plus",
        "img": "https://i.imgur.com/xiP1EOO.png",
        "name": "Omegle++",
        "data-ai-hint": "video chat",
        "description": "Omegle Mobile (Video enabled)",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pokemon-unite-mod",
        "img": "https://i.imgur.com/guYPW9m.png",
        "name": "Pokemon Unite MOD",
        "data-ai-hint": "moba game",
        "description": "iOS & Android Mod Install",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "master-royale-infinity",
        "img": "https://i.imgur.com/hTzg6f2.png",
        "name": "Master Royale Infinity",
        "data-ai-hint": "strategy game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "popcorn-time",
        "img": "https://i.imgur.com/kQkXBnt.png",
        "name": "Popcorn Time",
        "data-ai-hint": "movie app",
        "description": "No Jailbreak or Root Required",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "friday-night-funkin",
        "img": "https://i.imgur.com/apYjv3Q.png",
        "name": "Friday Night Funkin",
        "data-ai-hint": "rhythm game",
        "description": "Free Download for iOS & Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "xbox-plus-plus",
        "img": "https://i.imgur.com/O9cHXvl.png",
        "name": "Xbox++",
        "data-ai-hint": "game app",
        "description": "Install Unsupported Games!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pico-park",
        "img": "https://i.imgur.com/mUNswVN.png",
        "name": "Pico Park",
        "data-ai-hint": "puzzle game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "appsign",
        "img": "https://i.imgur.com/RORFGfb.png",
        "name": "AppSign",
        "data-ai-hint": "app signer",
        "description": "Free Download & No Jailbreak",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "lulubox",
        "img": "https://i.imgur.com/4vVud7S.png",
        "name": "Lulubox",
        "data-ai-hint": "game mod",
        "description": "Free Install for iOS & Android!",
        "version": "1.0.0",
        "category": "Tweaks",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "brazzers-plus-plus",
        "img": "https://i.imgur.com/8CbjRgL.png",
        "name": "Brazzers++",
        "data-ai-hint": "adult content",
        "description": "Free Brazzers Premium Accounts!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "call-of-duty-plus-plus",
        "img": "https://i.imgur.com/SYy5m7E.png",
        "name": "Call of Duty++",
        "data-ai-hint": "shooter game",
        "description": "Unlimited COD Points & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "carbridge",
        "img": "https://i.imgur.com/7aQj7c0.jpg",
        "name": "CarBridge",
        "data-ai-hint": "carplay app",
        "description": "No Jailbreak required & All Features!",
        "version": "1.0.0",
        "category": "Tweaks",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "cash-app-plus-plus",
        "img": "https://i.imgur.com/XcsxPAf.png",
        "name": "Cash App++",
        "data-ai-hint": "finance app",
        "description": "100$ Injection - One per day!",
        "version": "1.0.0",
        "category": "Tweaks",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "axie-infinity",
        "img": "https://i.imgur.com/qlv0jPM.png",
        "name": "Axie Infinity",
        "data-ai-hint": "blockchain game",
        "description": "iOS & Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "appcake",
        "img": "https://i.imgur.com/q3XpiR3.png",
        "name": "AppCake",
        "data-ai-hint": "app installer",
        "description": "Download Tweaked Apps No Revoked!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pandora-plus-plus",
        "img": "https://i.imgur.com/IOn8v1H.png",
        "name": "Pandora++",
        "data-ai-hint": "music app",
        "description": "Get Pandora Plus for FREE!!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gta-san-andreas",
        "img": "https://i.imgur.com/yZ4ypaN.png",
        "name": "GTA San Andreas",
        "data-ai-hint": "action game",
        "description": "GTA San Andreas Inject!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tutuapp-plus-plus",
        "img": "https://i.imgur.com/a6TuNo6.png",
        "name": "tutuapp++",
        "data-ai-hint": "app installer",
        "description": "Download Tweaked Apps No Revoked!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "onlyfans-plus-plus",
        "img": "https://i.imgur.com/fMBvQLI.png",
        "name": "OnlyFans++",
        "data-ai-hint": "social media",
        "description": "Download Tweaked Apps No Revoked!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "coin-master-plus-plus",
        "img": "https://i.imgur.com/kxOxfnY.jpg",
        "name": "Coin Master++",
        "data-ai-hint": "casual game",
        "description": "Free Spins and Coins & All Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "crashonthe-run-plus-plus",
        "img": "https://i.imgur.com/70VGWX7.jpg",
        "name": "CrashOntheRun!++",
        "data-ai-hint": "runner game",
        "description": "Unlimited Purple Crystals, Subscription Offers & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "cyberika-plus-plus",
        "img": "https://i.imgur.com/6FeVaxA.jpg",
        "name": "Cyberika++",
        "data-ai-hint": "cyberpunk rpg",
        "description": "Unlimited HyperKoins, Creds & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "discord-plus-plus",
        "img": "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png",
        "name": "Discord++",
        "data-ai-hint": "chat app",
        "description": "Free Discord Nitro & Lifetime Premium Subscription!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "genshin-impact-plus-plus",
        "img": "https://i.imgur.com/9S8yGfc.png",
        "name": "Genshin Impact++",
        "data-ai-hint": "action rpg",
        "description": "Free Primogems iOS & Android",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "voicemod-plus-plus",
        "img": "https://i.imgur.com/t5zlWUa.jpg",
        "name": "VoiceMod++",
        "data-ai-hint": "voice changer",
        "description": "Free Voice Changer!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tachiyomi-plus-plus",
        "img": "https://i.imgur.com/JN0oRRX.jpg",
        "name": "Tachiyomi++",
        "data-ai-hint": "manga reader",
        "description": "Download iOS & Android Devices",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "efootball-pes-2022",
        "img": "https://i.imgur.com/dcLknzm.png",
        "name": "eFootball PES 2022",
        "data-ai-hint": "football game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "poppy-playtime-mobile",
        "img": "https://i.imgur.com/CdezbB8.png",
        "name": "Poppy Playtime Mobile",
        "data-ai-hint": "horror game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "dls-21-mod",
        "img": "https://i.imgur.com/OQEQG6w.png",
        "name": "DLS 21 MOD",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Coins & Gems!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "i-am-fish-plus-plus",
        "img": "https://i.imgur.com/ySaxjAU.png",
        "name": "I Am Fish++",
        "data-ai-hint": "adventure game",
        "description": "",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "crab-game-plus-plus",
        "img": "https://i.imgur.com/iPPktVo.png",
        "name": "Crab Game++",
        "data-ai-hint": "party game",
        "description": "",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "clash-mini-plus-plus",
        "img": "https://i.imgur.com/zgYJw59.png",
        "name": "Clash Mini++",
        "data-ai-hint": "strategy game",
        "description": "",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "efootball-pes-2021-plus-plus",
        "img": "https://i.imgur.com/U1j431V.jpg",
        "name": "eFootball PES 2021++",
        "data-ai-hint": "football game",
        "description": "Unlimited Coins, GP & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "episode-plus-plus",
        "img": "https://i.imgur.com/tdDWkzz.png",
        "name": "Episode++",
        "data-ai-hint": "interactive story",
        "description": "Unlimited Passes & Gems!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "fifa-mobile-plus-plus",
        "img": "https://i.imgur.com/sTQ4Pce.png",
        "name": "FIFA Mobile++",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Coins & Points!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "fortnite",
        "img": "https://i.imgur.com/seQZxNS.jpg",
        "name": "Fortnite",
        "data-ai-hint": "shooter game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gacha-animator",
        "img": "https://i.imgur.com/x7Pgb3o.png",
        "name": "Gacha Animator",
        "data-ai-hint": "gacha game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "gta-5",
        "img": "https://i.imgur.com/QEmj3cc.jpg",
        "name": "GTA 5",
        "data-ai-hint": "action game",
        "description": "Full Game for iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "happymod",
        "img": "https://i.imgur.com/eeddQ4v.png",
        "name": "HappyMod",
        "data-ai-hint": "app installer",
        "description": "Modded Apps on iOS/Android! [No Jailbreak]",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "inds",
        "img": "https://i.imgur.com/0taCz6k.png",
        "name": "INDS",
        "data-ai-hint": "game emulator",
        "description": "INDS Simulator on iOS & Android devices!",
        "version": "1.0.0",
        "category": "Emulators",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "insta-followers-plus-plus",
        "img": "https://i.imgur.com/MPQlKLL.png",
        "name": "Insta Followers++",
        "data-ai-hint": "social tool",
        "description": "Free Followers!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "inshot-pro",
        "img": "https://i.imgur.com/LYaESwh.png",
        "name": "Inshot Pro",
        "data-ai-hint": "video editor",
        "description": "Inshot Pro Install iOS Android!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "rec-room-plus-plus",
        "img": "https://i.imgur.com/yZ4MwfR.png",
        "name": "Rec Room++",
        "data-ai-hint": "social game",
        "description": "Get Unlimited Tokens & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "vrchat",
        "img": "https://i.imgur.com/YiOafYj.png",
        "name": "VRChat",
        "data-ai-hint": "social vr",
        "description": "Mobile version | Android + iOS!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ispy",
        "img": "https://i.imgur.com/wqDQ7lm.png",
        "name": "iSpy",
        "data-ai-hint": "spy tool",
        "description": "Spy on Someones Phone!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mad-fut-21-plus-plus",
        "img": "https://i.imgur.com/jeJX5DJ.png",
        "name": "MAD FUT 21++",
        "data-ai-hint": "football game",
        "description": "Unlimited Packs, Coins, Cards & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mha-tsh-plus-plus",
        "img": "https://i.imgur.com/CozVs4e.jpg",
        "name": "MHA: TSH++",
        "data-ai-hint": "anime game",
        "description": "Unlimited Hero Coins, Elite Peacekeeping Pass & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "minecraft-pocket-edition",
        "img": "https://i.imgur.com/Et2E8XJ.png",
        "name": "Minecraft Pocket Edition",
        "data-ai-hint": "block game",
        "description": "iOS & Android Download!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "mobile-legends-plus-plus",
        "img": "https://i.imgur.com/z2Jn6dR.png",
        "name": "Mobile Legends++",
        "data-ai-hint": "moba game",
        "description": "Unlimited Diamonds, Starlight Member & More Features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "nba2k21-arcade",
        "img": "https://i.imgur.com/2LRfvLY.png",
        "name": "NBA2K21 Arcade",
        "data-ai-hint": "basketball game",
        "description": "iOS & Android Download For Free!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "netflix",
        "img": "https://i.imgur.com/0dJ9fHe.png",
        "name": "Netflix",
        "data-ai-hint": "movie streaming",
        "description": "Free Ultimate Premium & All Features!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "no-limit-drag-racing-2-0-plus-plus",
        "img": "https://i.imgur.com/z9r9276.jpg",
        "name": "No Limit Drag Racing 2.0++",
        "data-ai-hint": "racing game",
        "description": "Unlimited Money & Gold and More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "offroad-outlaws-plus-plus",
        "img": "https://i.imgur.com/2bsBjdB.jpg",
        "name": "Offroad Outlaws++",
        "data-ai-hint": "offroad game",
        "description": "Unlimited Money & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pandahelper",
        "img": "https://i.imgur.com/6VuBPm8.png",
        "name": "PandaHelper",
        "data-ai-hint": "app installer",
        "description": "Panda Helper VIP Free Download for iOS Devices!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "patreon-plus-plus",
        "img": "https://i.imgur.com/pV45kyf.jpg",
        "name": "Patreon++",
        "data-ai-hint": "creator platform",
        "description": "Unlock ANY Patreon Content FOR FREE!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "play-together",
        "img": "https://i.imgur.com/FPMM7bd.jpg",
        "name": "Play Together++",
        "data-ai-hint": "social game",
        "description": "Unlimited Gems, Packages & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "pokemon-go-plus-plus",
        "img": "https://i.imgur.com/sFNo5vL.png",
        "name": "Pokemon GO++",
        "data-ai-hint": "monster game",
        "description": "Location Spoof, Quick Catch, Joystick & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "ps2-emulator",
        "img": "https://i.imgur.com/347nHvD.png",
        "name": "PS2 Emulator",
        "data-ai-hint": "game emulator",
        "description": "Download on iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Emulators",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "kim-kardashian-hollywood-mod",
        "img": "https://i.imgur.com/78u0o9V.png",
        "name": "Kim Kardashian: Hollywood MOD",
        "data-ai-hint": "celebrity game",
        "description": "FREE Money, K Stars & Energy!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "homescapes-plus-plus",
        "img": "https://i.imgur.com/qApcBho.png",
        "name": "Homescapes++",
        "data-ai-hint": "puzzle game",
        "description": "Unlimited Coins, Stars & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "roblox-plus-plus",
        "img": "https://i.imgur.com/oICrfhe.png",
        "name": "Roblox++",
        "data-ai-hint": "block game",
        "description": "Unlimited Robux & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "rokkr",
        "img": "https://i.imgur.com/o80NzBf.png",
        "name": "Rokkr",
        "data-ai-hint": "media browser",
        "description": "Download Rokkr iOS App!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "score-hero-2-plus-plus",
        "img": "https://i.imgur.com/JhGQ8bL.png",
        "name": "Score! Hero 2++",
        "data-ai-hint": "soccer game",
        "description": "Unlimited Bux, Energy and more features!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "snapchat-plus-plus",
        "img": "https://i.imgur.com/rioOwIH.jpg",
        "name": "Snapchat++",
        "data-ai-hint": "social media",
        "description": "Modded Features on iOS & Android Devices!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "spotify-plus-plus",
        "img": "https://i.imgur.com/GZp2h2G.png",
        "name": "Spotify++",
        "data-ai-hint": "music app",
        "description": "Free Spotify Premium!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "the-sims-freeplay-plus-plus",
        "img": "https://i.imgur.com/QQabcCR.jpg",
        "name": "The Sims Freeplay++",
        "data-ai-hint": "simulation game",
        "description": "Unlimited Simoleons, Lifestyle Points, Money & More!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tiktok-plus-plus",
        "img": "https://i.imgur.com/EJN5TxV.jpg",
        "name": "TikTok++",
        "data-ai-hint": "social video",
        "description": "No Jailbreak or Root Required!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tik-followers-plus-plus",
        "img": "https://i.imgur.com/EJN5TxV.jpg",
        "name": "Tik Followers++",
        "data-ai-hint": "social tool",
        "description": "Free Followers!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tinder-gold",
        "img": "https://i.imgur.com/R9jMHHH.png",
        "name": "Tinder Gold",
        "data-ai-hint": "dating app",
        "description": "Free Gold & All Features!",
        "version": "1.0.0",
        "category": "Social",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "toca-life-world",
        "img": "https://i.imgur.com/D5RaxbL.png",
        "name": "Toca Life World",
        "data-ai-hint": "kids game",
        "description": "Unlocked All Locations & Secret Crumpes!",
        "version": "1.0.0",
        "category": "Games",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "tutuapp-vip",
        "img": "https://i.imgur.com/ofeuULY.png",
        "name": "TutuApp VIP",
        "data-ai-hint": "app installer",
        "description": "Free download with VIP",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "unc0ver",
        "img": "https://i.imgur.com/dWgFEoV.png",
        "name": "Unc0ver",
        "data-ai-hint": "jailbreak tool",
        "description": "Jailbreak any iOS devices!",
        "version": "1.0.0",
        "category": "Developer Tools",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "watched-plus-plus",
        "img": "https://i.imgur.com/TZWiEcl.png",
        "name": "WATCHED++",
        "data-ai-hint": "movie app",
        "description": "Access to All Shows & Movies!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "webtoon-plus-plus",
        "img": "https://i.imgur.com/t8ak0Iw.png",
        "name": "Webtoon++",
        "data-ai-hint": "comic reader",
        "description": "Free Fast Pass & Unlimited Coins!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "youtube-vanced",
        "img": "https://i.imgur.com/jU4xpyb.png",
        "name": "Youtube Vanced",
        "data-ai-hint": "video app",
        "description": "Youtube Vanced for iOS & Android devices!",
        "version": "1.0.0",
        "category": "Entertainment",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "video-star-plus-plus",
        "img": "https://i.imgur.com/lrfTExg.jpg",
        "name": "Video Star++",
        "data-ai-hint": "video editor",
        "description": "All Packs/Effects & More Features!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    },
    {
        "slug": "vsco-plus-plus",
        "img": "https://i.imgur.com/eGtUkNd.jpg",
        "name": "VSCO++",
        "data-ai-hint": "photo editor",
        "description": "Yearly VSCO Membership For Free!",
        "version": "1.0.0",
        "category": "Utilities",
        "lastModified": "2025-09-01"
    }
];

type AppContent = Omit<Entity, 'id' | 'name' | 'description' | 'category' | 'lastModified' | 'media' | 'facts'> & { facts: Omit<Entity['facts'], 'version'> };

const defaultContent = (app: AppDto): AppContent => ({
    subhead: `Sideload ${app.name} to your iPhone or iPad — safely, easily, and 100% free.`,
    facts: {
        downloads: '500,000+ Trusted Installs',
        compatibility: 'iOS 12.0+ • iPhone & iPad',
        safety: ['Open Source', 'No Jailbreak', 'No Root'],
        license: ['Free Forever', 'No Ads', 'No Paywalls'],
    },
    about: {
        title: `What is ${app.name}?`,
        content: `<strong>${app.name}</strong> is one of the top apps in the <strong>${app.category}</strong> category, designed to supercharge your mobile experience. It lets you bypass the standard limitations and unlock a new level of functionality right on your device. Whether you're a power user, a gamer, or just someone looking for more freedom, ${app.name} provides a clean, intuitive interface to get the most out of your iPhone or iPad. We ensure every download is safe, secure, and ready to go.`,
    },
    features: {
        title: `Why Users Love ${app.name}`,
        items: [
            '✅ No Apple Developer Account Needed — bypass App Store restrictions',
            '✅ Auto-Refresh Apps — keep sideloaded apps alive without daily re-signing',
            '✅ Wi-Fi Installations — wirelessly transfer and install IPAs from your browser',
            '✅ Open Source & Privacy-Focused — inspect the code. No tracking. No ads.',
            '✅ Works on All iOS Devices — iPhone, iPad, iPod Touch — iOS 12 and up',
        ],
    },
    perfectFor: {
        title: 'Perfect For',
        tags: ['Beta testers', 'App developers', 'Tweakers', 'Region-locked app users', 'Anyone tired of App Store limitations.'],
    },
    faq: {
        title: `Frequently Asked Questions about ${app.name}`,
        items: [
            {
                question: `How do I download ${app.name} for free?`,
                answer: `You can download ${app.name} for free directly from TweakFind. Just tap the 'Install' button on this page and follow the on-screen instructions to sideload the app onto your iOS or Android device.`
            },
            {
                question: `Is using this tweaked app from TweakFind legal?`,
                answer: `The legality of using tweaked apps like ${app.name} depends on your local laws and the app's terms of service. Generally, for personal, non-commercial use, it's unlikely to be a legal issue. However, redistributing them can violate copyright law. TweakFind provides these for educational and personal use only.`
            },
            {
                question: `How do I update the ${app.name} tweak?`,
                answer: `To update, simply return to this page on TweakFind. We regularly update our links to the latest, safest versions. We recommend checking back periodically to ensure you have the most recent release.`
            },
            {
                question: `What should I do if the app stops working?`,
                answer: `If ${app.name} stops working, it's often due to an update from the original developer or a certificate revocation. The best first step is to reinstall it from TweakFind to get the latest patched version. If the problem persists, please check our site for any updates or notices.`
            },
            {
                question: `Is it safe to install this app tweak from TweakFind?`,
                answer: `Yes, every app tweak on TweakFind, including this ${app.name} version, is scanned for safety and is 100% free from malware. We prioritize user security and ensure that no jailbreak or root is required.`
            },
            {
                question: `What are the main features of the ${app.name} unlocked version?`,
                answer: `This version of ${app.name} comes with several unlocked features, such as premium access, no ads, and unlimited resources, depending on the app. Check the 'Features' section on this page for a full list of enhancements.`
            }
        ]
    }
});

const customContent: Record<string, AppContent> = {
    'altstore': {
        subhead: "Sideload any IPA to iPhone or iPad — safely, easily, and 100% free. No Apple ID restrictions. No computer needed after setup.",
        facts: {
            downloads: "500,000+ Trusted Installs",
            compatibility: "iOS 12.0+ • iPhone & iPad",
            safety: ["Open Source", "No Jailbreak", "No Root"],
            license: ["Free Forever", "No Ads", "No Paywalls"],
        },
        about: {
            title: "What is AltStore?",
            content: "<strong>AltStore</strong> is the #1 free iOS app installer that lets you sideload any .IPA file directly to your iPhone or iPad — no jailbreak required. Designed for developers, power users, and everyday iOS enthusiasts, AltStore offers a clean, intuitive interface with automatic app refreshes and background updates — all without needing a Mac or complex setup."
        },
        features: {
            title: "Why Users Love AltStore:",
            items: [
                "✅ No Apple Developer Account Needed — bypass App Store restrictions",
                "✅ Auto-Refresh Apps — keep sideloaded apps alive without daily re-signing",
                "✅ Wi-Fi Installations — wirelessly transfer and install IPAs from your browser",
                "✅ Open Source & Privacy-Focused — inspect the code. No tracking. No ads.",
                "✅ Works on All iOS Devices — iPhone, iPad, iPod Touch — iOS 12 and up"
            ]
        },
        perfectFor: {
            title: "Perfect For:",
            tags: ["Beta testers", "App developers", "Tweakers", "Region-locked app users", "Anyone tired of App Store limitations."]
        },
        faq: {
            title: `Frequently Asked Questions about AltStore`,
            items: [
                {
                    question: `How to download AltStore for free?`,
                    answer: `You can download AltStore for free directly from TweakFind. Just tap the 'Install' button on this page and follow the on-screen instructions to sideload the app onto your iOS device.`
                },
                {
                    question: `Is it safe to install this app tweak from TweakFind?`,
                    answer: `Yes, every app tweak on TweakFind, including AltStore, is scanned for safety and is 100% free from malware. We prioritize user security and ensure that no jailbreak is required.`
                },
                {
                    question: `What is the main feature of this app tweak?`,
                    answer: `The main feature of this AltStore app tweak is the ability to sideload any .IPA file to your iPhone or iPad without needing a jailbreak, offering access to a world of apps not available on the App Store.`
                },
                {
                    question: `Does AltStore automatically refresh apps?`,
                    answer: `Yes, AltStore can automatically refresh your sideloaded apps in the background, preventing them from expiring so you can use them without interruption.`
                }
            ]
        }
    }
};

const appsWithPlaceholders = await getAppsWithPlaceholders(appData);

export const apps: Entity[] = appsWithPlaceholders.map((app) => {
  const content = customContent[app.slug] || defaultContent(app);
  
  return {
    id: app.slug,
    name: app.name,
    description: app.description,
    category: app.category,
    lastModified: app.lastModified,
    media: {
      icon: app.img,
      iconHint: app['data-ai-hint'],
      blurDataURL: app.blurDataURL,
    },
    facts: {
      version: app.version,
      ...content.facts,
    },
    subhead: content.subhead,
    about: content.about,
    features: content.features,
    perfectFor: content.perfectFor,
    faq: content.faq,
  };
});
