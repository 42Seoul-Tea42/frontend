/**
 * 채팅 메시지를 나타내는 인터페이스
 *
 * - `id`: 메시지의 고유 식별자
 * - `name`: 보낸 사용자의 이름
 * - `time`: 메시지를 보낸 시간
 */
export interface Message {
  id: string; // 메시지의 고유 식별자
  name: string; // 보낸 사용자의 이름
  time: string; // 메시지를 보낸 시간
}

/**
 * 채팅 상태 정보를 나타내는 인터페이스
 *
 * - `messages`: 채팅 메시지 배열
 * - `connect`: 연결 여부
 * - `noti`: 알림 여부
 */
export interface Chatting {
  messages: Message[]; // 채팅 메시지 배열
  connect: boolean; // 연결 여부
  noti: boolean; // 알림 여부
}

/**
 * 사용자 관심사를 정의하는 열거형
 */
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

/**
 * 검색 조건을 나타내는 인터페이스
 *
 * - `ageRange`: 나이 범위 배열
 * - `distance`: 거리
 * - `fame`: 명성
 * - `interests`: 관심사 배열
 */
export interface SearchParams {
  ageRange: number[]; // 나이 범위 배열
  distance: number; // 거리
  fame: number; // 명성
  interests: Interests[]; // 관심사 배열
}

/**
 * 회원가입 단계를 나타내는 인터페이스
 *
 * - `emailCheck`: 이메일 확인 단계 여부
 * - `profileCheck`: 프로필 확인 단계 여부
 * - `emojiCheck`: 이모티콘 확인 단계 여부
 */
export interface RegisterSteps {
  emailCheck: boolean; // 이메일 확인 단계 여부
  profileCheck: boolean; // 프로필 확인 단계 여부
  emojiCheck: boolean; // 이모티콘 확인 단계 여부
}
