
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
  lat: number;
  lng: number;
}

export const allSpots: DiveSpot[] = [
  {
    id: 1,
    name: "Мальдивы",
    country: "Мальдивы",
    depth: "до 30 м",
    level: "все уровни",
    rating: 4.8,
    image: "../assets/Mal.jfif",
    description: "Известны своими коралловыми рифами и мanta ray.",
    images: [
      "../assets/Mal.jfif",
      "../assets/mal2.webp",
      "../assets/mal3.jpg"
    ],
    lat: 3.2028,
    lng: 73.2207
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
    ],
    lat: 27.8333,
    lng: 34.0
  },
  {
    id: 3,
    name: "Бали",
    country: "Индонезия",
    depth: "до 35 м",
    level: "все уровни",
    rating: 5,
    image: "../assets/Bal.jfif",
    description: "Уютные отели и отличные дайв-центры.",
    images: [
      "../assets/Bal.jfif",
      "../assets/bal2.webp",
      "../assets/bal3.jpg",
      "../assets/bal4.jpg"
    ],
    lat: -8.3405,
    lng: 115.0920
  },
  {
    id: 4,
    name: "Северное море",
    country: "Нидерланды",
    depth: "до 20 м",
    level: "все уровни",
    rating: 4.2,
    image: "../assets/Gul.jfif",
    description: "Подводные скалы и уникальные виды.",
    images: [
      "../assets/Gul.jfif",
      "../assets/gal2.webp",
      "../assets/gal3.webp",
      "../assets/gal4.jpg"
    ],
    lat: 55.0,
    lng: 3.0
  },
  {
    id: 5,
    name: "Куршская коса",
    country: "Россия",
    depth: "до 15 м",
    level: "все уровни",
    rating: 4.0,
    image: "../assets/kk.jpg",
    description: "Уникальная природная зона на Балтике.",
    images: [
      "../assets/kk.jpg"
    ],
    lat: 55.1,
    lng: 20.8
  },
  {
    id: 6,
    name: "Озеро Байкал",
    country: "Россия",
    depth: "до 40 м",
    level: "продвинутый",
    rating: 4.9,
    image: "../assets/ob.jpg",
    description: "Самое глубокое озеро мира, кристальная вода.",
    images: [
      "../assets/ob.jpg"
    ],
    lat: 53.5,
    lng: 108.0
  },
  {
    id: 7,
    name: "Амстердамские рифы",
    country: "Нидерланды",
    depth: "до 10 м",
    level: "все уровни",
    rating: 3.8,
    image: "../assets/ar.jpg",
    description: "Искусственные рифы для начинающих.",
    images: [
      "../assets/ar.jpg"
    ],
    lat: 52.3702,
    lng: 4.8952
  },
  {
    id: 8,
    name: "Командорские острова",
    country: "Россия",
    depth: "до 30 м",
    level: "продвинутый",
    rating: 4.5,
    image: "../assets/ko.webp",
    description: "Дикие пейзажи и уникальная фауна.",
    images: [
      "../assets/ko.webp"
    ],
    lat: 55.0,
    lng: 167.0
  }
];