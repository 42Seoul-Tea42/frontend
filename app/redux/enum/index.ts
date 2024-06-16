// 성별은 124
// 취향은 247
export enum Gender {
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
  EMAIL = 30,
  PASSWORD = 16,
  ID = 20,
  NAME = 10
}

export const FancyColor = {
  send: 'green',
  recv: 'pink',
  connect: 'pink',
  none: 'gray'
};

export enum Status {
  OFFLINE,
  ONLINE
}
