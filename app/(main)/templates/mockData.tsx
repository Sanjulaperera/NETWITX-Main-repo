export interface Template {
  id: number;
  title: string;
  category: string;
  tags: string[];
  keywords: string[];
  imageUrl: string;
  link: string;
}

export const mockTemplates: Template[] = [
  {
    id: 1,
    title: "TroWeld Welding",
    category: "Business",
    tags: ["Free"],
    keywords: ["designer", "developer", "artist", "photographer", "creative", "showcase", "gallery", "resume"],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltREcTVt879WLqhOUariGQYlTJNdZFA0jw8Dgf",
    link: "https://netwitxfiles.github.io/troweld/",
  },
  {
    id: 2,
    title: "AutoMated",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltk2nhqKbtTLOvUDG4xP5AMcdKmjYVuyBq78F0",
    link: "https://netwitxfiles.github.io/automated/",
  },
  {
    id: 3,
    title: "Zarage",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltIXX0mDTt7yRWQdFOXesMq2JABhGjYS9u8VE6",
    link: "https://netwitxfiles.github.io/zarage/",
  },
  {
    id: 4,
    title: "Cloapedia",
    category: "Personal",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltrtcIkb5HZ8mQkuXalTdfipOy37xb9joWcILF",
    link: "https://netwitxfiles.github.io/cloapedia/",
  },
  {
    id: 5,
    title: "Constructed",
    category: "Business",
    tags: ["free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltmL9Hr6q7Efia9R8vW2gQSLM7kAOBGo4h1I3d",
    link: "https://netwitxfiles.github.io/constructed/",
  },
  // Adding featured templates from the homepage
  {
    id: 6,
    title: "CoTo",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltp8vZFiErceo27DYGqM6AXJCk8sB4FVKhmjv5",
    link: "https://netwitxfiles.github.io/coto/",
  },
  {
    id: 7,
    title: "DelFood",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltmAWZbk7Efia9R8vW2gQSLM7kAOBGo4h1I3dZ",
    link: "https://netwitxfiles.github.io/delfood/",
  },
  {
    id: 8,
    title: "Electricca",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltuXcS9UnJOlv8GsR7ZfXIEW2C6d3oBiuw1Knq",
    link: "https://netwitxfiles.github.io/electricca/",
  },
  {
    id: 9,
    title: "Feane",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltn0EvybRvRqQ5jUZXAMuphI9YTSNogLi4Pwne",
    link: "https://netwitxfiles.github.io/feane/",
  },
  {
    id: 10,
    title: "Finter",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNlt4oVtPsDiFhmGQlfpSjXuoqLcC6wPxg7KE0bO",
    link: "https://netwitxfiles.github.io/finter/",
  },
  {
    id: 11,
    title: "Fonicy",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltsigAFdu6RJhXqanpv57fWuNFM4wHm9e8VEkj",
    link: "https://netwitxfiles.github.io/fonicy/",
  },
  {
    id: 12,
    title: "Gravita",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltAhhumb9SPF29HlSJWNk5visoxXumU8A01Ggc",
    link: "https://netwitxfiles.github.io/Gravita/",
  },
  {
    id: 13,
    title: "HairCut",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltE7lDbLeeGiFsxTKBCob2rwMQYPRkjLA5yqgN",
    link: "https://netwitxfiles.github.io/haircut/",
  },
  {
    id: 14,
    title: "Handyman",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltqdym3XHMJdxCm7TzsNbWl8oU0BcpyLEraHFD",
    link: "https://netwitxfiles.github.io/handyman/",
  },
  {
    id: 15,
    title: "Heron",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltRw2Ezt879WLqhOUariGQYlTJNdZFA0jw8Dgf",
    link: "https://netwitxfiles.github.io/heron/",
  },
  {
    id: 16,
    title: "Inodino",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltLKbzRIZaCKAiy6TVlY3zpGkSb1jONtIxsvh2",
    link: "https://netwitxfiles.github.io/inodino/",
  },
  {
    id: 17,
    title: "Intimate",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNlt7vNHhfWIhABgdQHiYKf0b9qD4PXntycCm58l",
    link: "https://netwitxfiles.github.io/intimate/",
  },
  {
    id: 18,
    title: "Jazzy",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltdfHrT6GMT2KNHSqOlLZ5pUFEcz76AhXPo4D1",
    link: "https://netwitxfiles.github.io/jazzy/",
  },
  {
    id: 19,
    title: "Jomily",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNlthmwBxIzFRSGYzI52gFMZC8ifmpdPtjOVlHD4",
    link: "https://netwitxfiles.github.io/jomily/",
  },
  {
    id: 20,
    title: "Neo Gym",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltsZ3WEVu6RJhXqanpv57fWuNFM4wHm9e8VEkj",
    link: "https://netwitxfiles.github.io/neogym/",
  },
  {
    id: 21,
    title: "PestKit",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltxGcbmNYytqWBkJb3hCS1De9U0dOjaXw6NRLP",
    link: "https://netwitxfiles.github.io/PestKit/",
  },
  {
    id: 22,
    title: "Phalanx",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltvispd6Qbzjd6hE3K2TMxPurqi1In9clsv5mZ",
    link: "https://netwitxfiles.github.io/phalanx/",
  },
  {
    id: 23,
    title: "Food Funday",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltgSBEkwKNRrEAFtIP4o1HMDcdb0fWYjGJCnqZ",
    link: "https://netwitxfiles.github.io/Restaurant/",
  },
  {
    id: 24,
    title: "Scarvve",
    category: "Personal",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltxDu6T8YytqWBkJb3hCS1De9U0dOjaXw6NRLP",
    link: "https://netwitxfiles.github.io/scarvve/",
  },
  {
    id: 25,
    title: "SportPar",
    category: "Business ",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltkEd1LGbtTLOvUDG4xP5AMcdKmjYVuyBq78F0",
    link: "https://netwitxfiles.github.io/sportpar/",
  },
  {
    id: 26,
    title: "Style Barber",
    category: "Business",
    tags: ["Free", "Premium"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltIV0v8bTt7yRWQdFOXesMq2JABhGjYS9u8VE6",
    link: "https://netwitxfiles.github.io/stylebarber/",
  },
  {
    id: 27,
    title: "Ulio",
    category: "Personal",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltRvUZbdQ879WLqhOUariGQYlTJNdZFA0jw8Dg",
    link: "https://netwitxfiles.github.io/ulio/",
  },
  {
    id: 28,
    title: "TraCork",
    category: "Business",
    tags: ["Free"],
    keywords: [],
    imageUrl:
      "https://uploadthing.com/f/9k2xQe1rFNltxUjIlB7YytqWBkJb3hCS1De9U0dOjaXw6NRL",
    link: "https://netwitxfiles.github.io/tracork/",
  },
];
