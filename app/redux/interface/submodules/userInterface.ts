import { Interests } from './utilInterface';

/**
 * @type {id: string; firstname: string; lastname: string;}
 */
export interface Identity {
  id: string;
  firstname: string;
  lastname: string;
}

/**
 * @type {age: number; gender: string;}
 */
export interface AgeGender {
  age: number;
  gender: string;
}

/**
 * @type {email: string; password: string;}
 */
export interface Account {
  email: string;
  password: string;
}

/**
 * @type {accessToken: string; refreshToken: string;}
 */
export interface Authentication {
  accessToken: string;
  refreshToken: string;
}

/**
 * @type {subPhotos: string[]; interests: Interests[]; rating: number; sexualPreference: string; introduction: string;}
 */
export interface Profile {
  subPhotos: string[];
  interests: Interests[];
  rating: number;
  sexualPreference: string;
  introduction: string;
}

/**
 * @type {mainPhoto: string;}
 */
export interface Photo {
  mainPhoto: string; // 주요 사진 경로
}

/**
 * @type {fancy: boolean; distance: number;}
 */
export interface Another {
  fancy: boolean;
  distance: number;
}

/**
 * @type {latitude: number; longitude: number;}
 */
export interface Position {
  latitude: number;
  longitude: number;
}
