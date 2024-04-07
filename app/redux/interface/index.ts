import {
  Account,
  AgeGender,
  Authentication,
  Identity,
  Position,
  Profile,
  Another,
  Photo
} from './submodules/userInterface';
import { Chatting, RegisterSteps } from './submodules/utilInterface';

// 서비스마다 필요한 user의 정보가 다 달라서 각 서비스에서 사용하는 user를 추상화하고 싶었다. user로 접근했을때 필요한 데이터만 접근할 수 있게하기 위함.

/**
 * 사용자의 공개 정보를 나타내는 인터페이스
 *
 * - `id`: 사용자의 고유 식별자
 * - `firstname`: 사용자의 이름
 * - `lastname`: 사용자의 성
 * - `age`: 사용자의 나이
 * - `gender`: 사용자의 성별
 * - `fancy`: 추가 정보 1
 * - `distance`: 추가 정보 2
 * - `mainPhoto`: 주요 사진 경로
 */
export interface UserPublicSet extends Identity, AgeGender, Another, Photo {}

/**
 * 사용자의 채팅 정보를 나타내는 인터페이스
 *
 * - `id`: 사용자의 고유 식별자
 * - `firstname`: 사용자의 이름
 * - `lastname`: 사용자의 성
 * - `age`: 사용자의 나이
 * - `gender`: 사용자의 성별
 * - `fancy`: 추가 정보 1
 * - `distance`: 추가 정보 2
 * - `messages`: 채팅 메시지 배열
 * - `connect`: 연결 여부
 * - `noti`: 알림 여부
 * - `mainPhoto`: 주요 사진 경로
 */
export interface UserChattingSet extends Identity, Another, AgeGender, Chatting, Photo {}

/**
 * 사용자의 프로필 조회 정보를 나타내는 인터페이스
 *
 * - `id`: 사용자의 고유 식별자
 * - `firstname`: 사용자의 이름
 * - `lastname`: 사용자의 성
 * - `age`: 사용자의 나이
 * - `gender`: 사용자의 성별
 * - `subPhotos`: 부가 사진 경로 배열
 * - `interests`: 관심사 배열
 * - `rating`: 평점
 * - `sexualPreference`: 성적 취향
 * - `introduction`: 자기 소개
 * - `fancy`: 추가 정보 1
 * - `distance`: 추가 정보 2
 * - `mainPhoto`: 주요 사진 경로
 */
export interface UserProfileInquirySet extends Identity, Profile, Another, AgeGender, Photo {}

/**
 * 사용자의 회원가입 정보를 나타내는 인터페이스
 *
 * - `id`: 사용자의 고유 식별자
 * - `firstname`: 사용자의 이름
 * - `lastname`: 사용자의 성
 * - `email`: 사용자의 이메일 주소
 * - `password`: 사용자의 비밀번호
 */
export interface UserSignupSet extends Identity, Account {}

/**
 * 사용자의 로그인 정보를 나타내는 인터페이스
 *
 * - `id`: 사용자의 고유 식별자
 * - `firstname`: 사용자의 이름
 * - `lastname`: 사용자의 성
 * - `subPhotos`: 부가 사진 경로 배열
 * - `interests`: 관심사 배열
 * - `rating`: 평점
 * - `sexualPreference`: 성적 취향
 * - `introduction`: 자기 소개
 * - `accessToken`: 액세스 토큰
 * - `refreshToken`: 리프레시 토큰
 * - `emailCheck`: 이메일 확인 단계 여부
 * - `profileCheck`: 프로필 확인 단계 여부
 * - `emojiCheck`: 이모티콘 확인 단계 여부
 * - `mainPhoto`: 주요 사진 경로
 */
export interface UserLoginSet extends Identity, Profile, Authentication, Account, RegisterSteps, Photo {}

/**
 * 사용자의 계정 정보를 나타내는 인터페이스
 *
 * - `id`: 사용자의 고유 식별자
 * - `firstname`: 사용자의 이름
 * - `lastname`: 사용자의 성
 * - `email`: 사용자의 이메일 주소
 * - `password`: 사용자의 비밀번호
 * - `accessToken`: 액세스 토큰
 * - `refreshToken`: 리프레시 토큰
 * - `age`: 사용자의 나이
 * - `gender`: 사용자의 성별
 * - `subPhotos`: 부가 사진 경로 배열
 * - `interests`: 관심사 배열
 * - `rating`: 평점
 * - `sexualPreference`: 성적 취향
 * - `introduction`: 자기 소개
 * - `latitude`: 위도
 * - `longitude`: 경도
 * - `mainPhoto`: 주요 사진 경로
 */
export interface UserAccountSet extends Identity, Account, Authentication, AgeGender, Profile, Position, Photo {}
