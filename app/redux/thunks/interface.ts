interface User {
  picture: string;
  name: string;
  age: number;
  distance: number;
  gender: string;
}

export interface UserFancy extends User {
  fancy: boolean;
}

export enum Tag {
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

export interface UserDetail extends User {
  subPicture: string[];
  tag: Tag;
  rating: number;
  taste: string;
}

interface Message {
  id: number;
  content: string;
  time: string;
}

export interface UserChatting {
  message: Message[];
  connect: boolean;
}

export interface UserDetailAuth extends UserDetail {
  password: string;
  email: string;
  token: string;
}
