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
  subPhotos: string[];
  interests: Interests[];
  rating: number;
  sexualPreference: string;
  introduction: string;
}

export interface Photo {
  mainPhoto: string;
}

export interface Another {
  fancy: boolean;
  distance: number;
}

export interface Position {
  latitude: number;
  longitude: number;
}
