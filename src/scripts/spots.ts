
export interface DiveSpot {
  id: number;
  name: string;
  country: string;
  depth: string;
  level: string;
  rating: number;
  image: string;
  description?: string;
  images: string[];
}

export const allSpots: DiveSpot[] = [
  {
    id: 1,
    name: "Мальдивы",
    country: "Мальдивы",
    depth: "до 30 м",
    level: "все уровни",
    rating: 4.8,
    image: "https://via.placeholder.com/250x150?text=Мальдивы",
    description: "Известны своими коралловыми рифами и мanta ray.",
    images: [
      "../assets/"
    ]
  },
  {
    id: 2,
    name: "Красное море",
    country: "Египет",
    depth: "до 40 м",
    level: "средний+",
    rating: 4.7,
    image: "../assets/RS1.png",
    description: "Прекрасная видимость и разнообразие фауны.",
    images: [
      "../assets/RS1.png",
      "../assets/RS2.avif",
      "../assets/RS3.png"
    ]
  },
  {
    id: 3,
    name: "Бали",
    country: "Индонезия",
    depth: "до 35 м",
    level: "все уровни",
    rating: 5,
    image: "https://via.placeholder.com/250x150?text=Бали",
    description: "Уютные отели и отличные дайв-центры.",
    images: [
      "../assets/"
    ]
  },
  {
    id: 4,
    name: "Северное море",
    country: "Нидерланды",
    depth: "до 20 м",
    level: "все уровни",
    rating: 4.2,
    image: "https://via.placeholder.com/250x150?text=Северное+море",
    description: "Подводные скалы и уникальные виды.",
    images: [
      "../assets/"
    ]
  },
  {
    id: 5,
    name: "Куршская коса",
    country: "Россия",
    depth: "до 15 м",
    level: "все уровни",
    rating: 4.0,
    image: "https://via.placeholder.com/250x150?text=Куршская+коса",
    description: "Уникальная природная зона на Балтике.",
    images: [
      "../assets/"
    ]
  },
  {
    id: 6,
    name: "Озеро Байкал",
    country: "Россия",
    depth: "до 40 м",
    level: "продвинутый",
    rating: 4.9,
    image: "https://via.placeholder.com/250x150?text=Байкал",
    description: "Самое глубокое озеро мира, кристальная вода.",
    images: [
      "../assets/"
    ]
  },
  {
    id: 7,
    name: "Амстердамские рифы",
    country: "Нидерланды",
    depth: "до 10 м",
    level: "все уровни",
    rating: 3.8,
    image: "https://via.placeholder.com/250x150?text=Амстердамские+рифы",
    description: "Искусственные рифы для начинающих.",
    images: [
      "../assets/"
    ]
  },
  {
    id: 8,
    name: "Командорские острова",
    country: "Россия",
    depth: "до 30 м",
    level: "продвинутый",
    rating: 4.5,
    image: "https://via.placeholder.com/250x150?text=Командорские",
    description: "Дикие пейзажи и уникальная фауна.",
    images: [
      "../assets/"
    ]
  }
];