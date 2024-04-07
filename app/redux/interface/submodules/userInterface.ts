import { Interests } from './utilInterface';

/**
 * 사용자의 신원 정보를 나타내는 인터페이스
 *
 * - `id`: 사용자의 고유 식별자
 * - `firstname`: 사용자의 이름
 * - `lastname`: 사용자의 성
 */
export interface Identity {
  id: string;
  firstname: string;
  lastname: string;
}

/**
 * 사용자의 나이와 성별 정보를 나타내는 인터페이스
 *
 * - `age`: 사용자의 나이
 * - `gender`: 사용자의 성별
 */
export interface AgeGender {
  age: number;
  gender: string;
}

/**
 * 사용자의 계정 정보를 나타내는 인터페이스
 *
 * - `email`: 사용자의 이메일 주소
 * - `password`: 사용자의 비밀번호
 */
export interface Account {
  email: string;
  password: string;
}

/**
 * 사용자의 인증 정보를 나타내는 인터페이스
 *
 * - `accessToken`: 액세스 토큰
 * - `refreshToken`: 리프레시 토큰
 */
export interface Authentication {
  accessToken: string; // 액세스 토큰
  refreshToken: string; // 리프레시 토큰
}

/**
 * 사용자의 프로필 정보를 나타내는 인터페이스
 *
 * - `subPhotos`: 부가 사진 경로 배열
 * - `interests`: 관심사 배열
 * - `rating`: 평점
 * - `sexualPreference`: 성적 취향
 * - `introduction`: 자기 소개
 */
export interface Profile {
  subPhotos: string[]; // 부가 사진 경로 배열
  interests: Interests[]; // 관심사 배열
  rating: number; // 평점
  sexualPreference: string; // 성적 취향
  introduction: string; // 자기 소개
}

/**
 * 사용자의 사진 정보를 나타내는 인터페이스
 *
 * - `mainPhoto`: 주요 사진 경로
 */
export interface Photo {
  mainPhoto: string; // 주요 사진 경로
}

/**
 * 추가적인 사용자 정보를 나타내는 인터페이스
 *
 * - `fancy`: 추가 정보 1
 * - `distance`: 추가 정보 2
 */
export interface Another {
  fancy: boolean; // 추가 정보 1
  distance: number; // 추가 정보 2
}

/**
 * 사용자의 위치 정보를 나타내는 인터페이스
 *
 * - `latitude`: 위도
 * - `longitude`: 경도
 */
export interface Position {
  latitude: number; // 위도
  longitude: number; // 경도
}
