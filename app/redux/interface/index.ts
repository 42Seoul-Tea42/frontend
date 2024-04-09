import { Account, AgeGender, Position, Profile, Another, Photo, Identity } from './submodules/userInterface';
import { Chatting, RegisterSteps } from './submodules/utilInterface';

/**
 * Interface representing public user set including identity, age, gender, and other details.
 * @interface
 * @extends {Identity}
 * @extends {AgeGender}
 * @extends {Another}
 * @extends {Photo}
 */
export interface UserPublicSet extends Identity, AgeGender, Another, Photo {}

/**
 * Interface representing user chatting set including identity, another detail, age, gender, chatting details, and photo.
 * @interface
 * @extends {Identity}
 * @extends {Another}
 * @extends {AgeGender}
 * @extends {Chatting}
 * @extends {Photo}
 */
export interface UserChattingSet extends Identity, Another, AgeGender, Chatting, Photo {}

/**
 * Interface representing user profile inquiry set including identity, profile details, another detail, age, gender, and photo.
 * @interface
 * @extends {Identity}
 * @extends {Profile}
 * @extends {Another}
 * @extends {AgeGender}
 * @extends {Photo}
 */
export interface UserProfileInquirySet extends Identity, Profile, Another, AgeGender, Photo {}

/**
 * Interface representing user account set including identity, account details, authentication details, age, gender, profile details, position, and photo.
 * @interface
 * @extends {Identity}
 * @extends {Account}
 * @extends {AgeGender}
 * @extends {Profile}
 * @extends {Position}
 * @extends {Photo}
 */
export interface UserAccountSet extends Identity, Account, AgeGender, Profile, Position, Photo {}
