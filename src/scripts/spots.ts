
export interface DiveSpot {
  id: number;
  name: string;
  country: string;
  depth: string;
  level: string;
  rating: number;
  image: string;
  description?: string; // необязательное поле
}

interface Review {
    id: number;
    spotName: string;
    text: string;
    user: string;
    avatar: string;
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
    description: "Известны своими коралловыми рифами и мanta ray."
  },
  {
    id: 2,
    name: "Красное море",
    country: "Египет",
    depth: "до 40 м",
    level: "средний+",
    rating: 4.7,
    image: "https://via.placeholder.com/250x150?text=Красное+море",
    description: "Прекрасная видимость и разнообразие фауны."
  },
  {
    id: 3,
    name: "Бали",
    country: "Индонезия",
    depth: "до 35 м",
    level: "все уровни",
    rating: 4.6,
    image: "https://via.placeholder.com/250x150?text=Бали",
    description: "Уютные отели и отличные дайв-центры."
  },
  {
    id: 4,
    name: "Северное море",
    country: "Нидерланды",
    depth: "до 20 м",
    level: "все уровни",
    rating: 4.2,
    image: "https://via.placeholder.com/250x150?text=Северное+море",
    description: "Подводные скалы и уникальные виды."
  },
  {
    id: 5,
    name: "Куршская коса",
    country: "Россия",
    depth: "до 15 м",
    level: "все уровни",
    rating: 4.0,
    image: "https://via.placeholder.com/250x150?text=Куршская+коса",
    description: "Уникальная природная зона на Балтике."
  },
  {
    id: 6,
    name: "Озеро Байкал",
    country: "Россия",
    depth: "до 40 м",
    level: "продвинутый",
    rating: 4.9,
    image: "https://via.placeholder.com/250x150?text=Байкал",
    description: "Самое глубокое озеро мира, кристальная вода."
  },
  {
    id: 7,
    name: "Амстердамские рифы",
    country: "Нидерланды",
    depth: "до 10 м",
    level: "все уровни",
    rating: 3.8,
    image: "https://via.placeholder.com/250x150?text=Амстердамские+рифы",
    description: "Искусственные рифы для начинающих."
  },
  {
    id: 8,
    name: "Командорские острова",
    country: "Россия",
    depth: "до 30 м",
    level: "продвинутый",
    rating: 4.5,
    image: "https://via.placeholder.com/250x150?text=Командорские",
    description: "Дикие пейзажи и уникальная фауна."
  }
];

const userReviews: Review[] = [
    {
        id: 1,
        spotName: "Мальдивы",
        text: "Невероятные кораллы",
        user: "Анна",
        avatar: "A"
    },
    {
        id: 2,
        spotName: "Красное море",
        text: "Прекрасная видимость и разнообразие фауны",
        user: "Игорь",
        avatar: "И"
    },
    {
        id: 3,
        spotName: "Бали",
        text: "Уютные отели и отличные дайв-центры.",
        user: "Марина",
        avatar: "M"
    }
];
