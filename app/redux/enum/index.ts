// 성별은 124

// 취향은 247
export enum Gender {
  NONE = 0,
  OTHER = 1,
  FEMALE = 2,
  MALE = 4,
  ALL = 7
}

export enum Fancy {
  NONE = 0, //서로 안누름
  SEND = 1, // 내가 좋아요 누른거
  RECV = 2, // 좋아요 받음
  CONN = 3 //서로 좋아요 누름
}

export enum InputLimitLength {
  NONE_AGE = 0,
  MIN_AGE = 1,
  EMAIL = 30,
  PASSWORD = 16,
  ID = 20,
  NAME = 10
}

export const FancyColor = {
  send: 'border-gray-100',
  recv: 'border-green-400',
  connect: 'border-pink-400',
  none: 'border-gray-100',
  thumbConn: 'pink',
  thumbSend: 'green',
  thumbNone: 'gray'
};

export enum Status {
  OFFLINE,
  ONLINE
}

export enum Oauth {
  NONE,
  KAKAO,
  GOOGLE,
  EMAIL
}

export enum Auth {
  refreshToken,
  accessToken
}

export enum ReportReason {
  NONE,
  BULLY,
  CONTENT,
  FAKE,
  SPAM,
  MISINFORM,
  VIOLATION,
  PRIVACY,
  SUSPICIOUS,
  OTHER
}

export enum Route {
  HOME = '/',
  LOGIN = '/auth/login'
}
