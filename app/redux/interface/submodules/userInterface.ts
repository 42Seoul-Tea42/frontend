import { Interests } from './utilInterface';

export interface Identity {
  id: string;
  firstname: string;
  lastname: string;
}

export interface AgeGender {
  age: number;
  gender: string;
}

export interface Account {
  email: string;
  password: string;
}

export interface Authentication {
  accessToken: string;
  refreshToken: string;
}

export interface Profile {
  pictures: string[];
  interests: Interests[];
  rating: number;
  sexualPreference: string;
  introduction: string;
}

export interface UserRelation {
  fancy: boolean;
  distance: number;
}
