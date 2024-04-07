export interface Message {
  id: string;
  name: string;
  time: string;
}

export interface Chatting {
  messages: Message[];
  connect: boolean;
  noti: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export enum Interests {
  SPORTS = 1 << 0,
  TRAVEL = 1 << 1,
  FOOD = 1 << 2,
  GAME = 1 << 3,
  BOOK = 1 << 4,
  IT_SCIENCE = 1 << 5,
  VIDEO = 1 << 6,
  LANGUAGE = 1 << 7,
  FASHION = 1 << 8,
  PETS = 1 << 9,
  ART = 1 << 10,
  SMOKE = 1 << 11,
  DRINK = 1 << 12
}

export interface SearchParams {
  ageRange: number[];
  distance: number;
  fame: number;
  interests: Interests[];
}

export interface RegisterSteps {
  emailCheck: boolean;
  profileCheck: boolean;
  emojiCheck: boolean;
}
