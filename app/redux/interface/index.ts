import { Account, AgeGender, Position, Profile, Another, Photo, Identity } from './submodules/userInterface';
import { Chatting } from './submodules/utilInterface';

/**
 * Interface representing public user set including identity, age, gender, and other details.
 * @type
 * @member {Identity}
 * @member {AgeGender}
 * @member {Another}
 * @member {Photo}
 */
export type UserPublicSet = {
  identity: Identity;
  ageGender: AgeGender;
  another: Another;
  photo: Photo;
};

/**
 * Interface representing user chatting set including identity, another detail, age, gender, chatting details, and photo.
 * @type
 * @member {Identity}
 * @member {Another}
 * @member {AgeGender}
 * @member {Chatting}
 * @member {Photo}
 */
export type UserChattingSet = {
  identity: Identity;
  another: Another;
  ageGender: AgeGender;
  chatting: Chatting;
  photo: Photo;
};

/**
 * Interface representing user profile inquiry set including identity, profile details, another detail, age, gender, and photo.
 * @type
 * @member {Identity}
 * @member {Profile}
 * @member {Another}
 * @member {AgeGender}
 * @member {Photo}
 */
export type UserProfileInquirySet = {
  identity: Identity;
  profile: Profile;
  another: Another;
  ageGender: AgeGender;
  photo: Photo;
};

/**
 * Interface representing user account set including identity, account details, age and gender, profile details, position, and photo.
 * @type
 * @member {Identity}
 * @member {Account}
 * @member {AgeGender}
 * @member {Profile}
 * @member {Position}
 * @member {Photo}
 */
export type UserAccountSet = {
  identity: Identity;
  account: Account;
  ageGender: AgeGender;
  profile: Profile;
  position: Position;
  photo: Photo;
};
