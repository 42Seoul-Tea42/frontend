import { Fancy, Gender } from '../enum';

/**
 * @type {id: string; firstname: string; lastname: string;}
 */
export type Identity = {
  id: number;
  loginId: string;
  firstname: string;
  lastname: string;
};

/**
 * @type {age: number; gender: string;}
 */
export type AgeGender = {
  age: number;
  gender: string;
};

/**
 * @type {email: string; password: string;}
 */
export type Account = {
  email: string;
  password: string;
};

/**
 * @type {accessToken: string; refreshToken: string;}
 */
export type Authentication = {
  accessToken: string;
  refreshToken: string;
};

/**
 * @type {subPhotos: string[]; interests: Interests; rating: number; sexualPreference: string; introduction: string;}
 */
export type Profile = {
  subPhotos: string[];
  interests: number[];
  rating: number;
  sexualPreference: string;
  introduction: string;
};

/**
 * @type {mainPhoto: string;}
 */
export type Photo = {
  mainPhoto: string; // 주요 사진 경로
};

/**
 * @type {fancy: boolean; distance: number;}
 */
export type Another = {
  fancy: Fancy;
  distance: number;
};

/**
 * @type {latitude: number; longitude: number;}
 */
export type Position = {
  latitude: number;
  longitude: number;
};
