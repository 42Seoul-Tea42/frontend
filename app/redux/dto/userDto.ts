import { Fancy, Gender } from '../enum';
import { AccountState } from '../slices/accountSlice';

/**
 * @property loginId: string
 * @property firstname: string
 * @property lastname: string
 * @property email: string
 * @property age: number
 * @property gender: string
 * @property sexualPreference: Gender
 * @property introduction: string
 * @property pictures: string[]
 * @property interests: number[]
 * @property hateInterests: number[]
 * @property emoji: number[]
 * @property hateEmoji: number[]
 * @property simillar: boolean
 */
export class MyAccountDTO {
  loginId: string;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  gender: string;
  sexualPreference: Gender;
  introduction: string;
  pictures: string[];
  interests: number[];
  hateInterests: number[];
  emoji: number[];
  hateEmoji: number[];
  simillar: boolean;

  constructor(serverData: any) {
    this.loginId = serverData.login_id;
    this.firstname = serverData.name;
    this.lastname = serverData.last_name;
    this.email = serverData.email;
    this.age = serverData.age;
    this.gender = serverData.gender;
    this.sexualPreference = serverData.taste;
    this.interests = serverData.tags;
    this.pictures = serverData.pictures;
    this.introduction = serverData.bio;
    this.interests = serverData.tags;
    this.hateInterests = serverData.hate_tags;
    this.emoji = serverData.emoji;
    this.hateEmoji = serverData.hate_emoji;
    this.simillar = serverData.similar;
  }
}

// login_id: str
// status: int (접속여부)
// last_online: str("%Y-%m-%d %H:%M:%S.%f%z")
// fame: float
// gender: int (Enum)
// taste: int (Enum) (성적취향)
// bio: str (자기소개)
// tags: [int] (관심사)
// hate_tags: [int] (관심사)
// emoji: [int] (Enum)
// hate_emoji: [int] (Enum)
// similar: bool
// pictures: file[]
export class UserDetailDTO {
  loginId: string;
  status: number;
  lastOnline: Date;
  rating: number;
  gender: Gender;
  sexualPreference: Gender;
  introduction: string;
  interests: number[];
  hateInterests: number[];
  emoji: number[];
  hateEmoji: number[];
  simillar: boolean;
  pictures: string[];

  constructor(serverData: any) {
    this.loginId = serverData.login_id;
    this.status = serverData.status;
    this.lastOnline = serverData.last_online;
    this.rating = serverData.fame;
    this.gender = serverData.gender;
    this.sexualPreference = serverData.taste;
    this.introduction = serverData.bio;
    this.interests = serverData.tags;
    this.hateInterests = serverData.hate_tags;
    this.emoji = serverData.emoji;
    this.hateEmoji = serverData.hate_emoji;
    this.simillar = serverData.similar;
    this.pictures = serverData.pictures;
  }
}

// {
// id: int
// name: str
// last_name: str
// distance: float
// fancy: int (Enum)
// age: int
// picture: file

// time: datetime
// }
export class UserListDTO {
  id: number;
  firstname: string;
  lastname: string;
  distance: number;
  fancy: Fancy;
  picture: string;
  age: number;
  time: Date;
  constructor(serverData: any) {
    this.id = serverData.id;
    this.firstname = serverData.name;
    this.lastname = serverData.last_name;
    this.distance = serverData.distance;
    this.fancy = serverData.fancy;
    this.age = serverData.age;
    this.picture = serverData.picture;
    this.time = serverData.time;
  }
}
