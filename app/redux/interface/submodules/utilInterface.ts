/**
 * @type {id: string; name: string; time: string;}
 */
export type Message = {
  id: string; // 메시지의 고유 식별자
  name: string; // 보낸 사용자의 이름
  time: string; // 메시지를 보낸 시간
};

/**
 * @type {messages: Message[]; connect: boolean; noti: boolean;}
 */
export type Chatting = {
  messages: Message[]; // 채팅 메시지 배열
  connect: boolean; // 연결 여부
  noti: boolean; // 알림 여부
};

/**
 * @type {SPORTS: number; TRAVEL: number; FOOD: number; GAME: number; BOOK: number; IT_SCIENCE: number; VIDEO: number; LANGUAGE: number; FASHION: number; PETS: number; ART: number; SMOKE: number; DRINK: number;}
 * @description DB에서 비트연산을 이용한 '한번에 가져오기 기능'을 사용하기 위해 비트쉬프팅으로 정의 - juhoh님께 문의
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
 * @type {ageRange: number[]; distance: number; fame: number; interests: Interests[];}
 */
export type SearchParams = {
  ageRange: number[]; // 나이 범위 배열
  distance: number; // 거리
  fame: number; // 명성
  interests: Interests[]; // 관심사 배열
};

/**
 * @type {emailCheck: boolean; profileCheck: boolean; emojiCheck: boolean;}
 */
export type RegisterSteps = {
  emailCheck: boolean; // 이메일 확인 단계 여부
  profileCheck: boolean; // 프로필 확인 단계 여부
  emojiCheck: boolean; // 이모티콘 확인 단계 여부
};
