import { Fancy } from '../interface/enum';

/**
 * @property {number} id
 * @property {string} firstname
 * @property {string} lastname
 * @property {number} age
 * @property {string} gender
 * @property {string} email
 * @property {string} password
 * @property {number[]} interests
 * @property {number} rating
 * @property {string} introduction
 * @property {string[]} pictures
 * @property {Fancy} fancy
 * @property {number} distance
 */
class UserDTO {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  interests: number[];
  rating: number;
  introduction: string;
  pictures: string[];
  fancy: Fancy;
  distance: number;

  /**
   * @param {any} serverData
   */
  constructor(serverData: any) {
    this.id = serverData.id;
    this.firstname = serverData.name;
    this.lastname = serverData.last_name;
    this.age = serverData.age;
    this.gender = serverData.gender;
    this.email = serverData.email;
    this.password = serverData.pw;
    this.interests = serverData.tags;
    this.rating = serverData.fame;
    this.introduction = serverData.bio;
    this.pictures = serverData.pictures;
    this.fancy = serverData.fancy;
    this.distance = serverData.distance;
  }
}

export default UserDTO;
