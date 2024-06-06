import { Fancy } from './enum';

/**
 * @identity {id: string; firstname: string; lastname: string;}
 */
export interface User {
  id: number;
  loginId: string;
  firstname: string;
  lastname: string;
}

/**
 * @ageGender {age: number; gender: string;}
 */
export interface User {
  age: number;
  gender: string;
}

/**
 * @account {email: string; password: string;}
 */
export interface User {
  email: string;
  password: string;
}

/**
 * @profileDetail {interests: number[]; rating: number; sexualPreference: string; introduction: string; picture: string[];}
 */
export interface User {
  interests: number[];
  rating: number;
  sexualPreference: string;
  introduction: string;
}

/**
 * @picture {pictures: string[];}
 */
export interface User {
  pictures: string[];
}

/**
 * @interface {fancy: Fancy; distance: number;}
 */
export interface User {
  fancy: Fancy;
  distance: number;
}

/**
 * @interface {latitude: number; longitude: number;}
 */
export interface Position {
  latitude: number;
  longitude: number;
}
