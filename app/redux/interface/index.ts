import { Account, AgeGender, Authentication, Identity, Position, Profile, Another } from './submodules/userInterface';
import { Chatting, RegisterSteps } from './submodules/utilInterface';

// 서비스마다 필요한 user의 정보가 다 달라서 각 서비스에서 사용하는 user를 추상화하고 싶었다. user로 접근했을때 필요한 데이터만 접근할 수 있게하기 위함.
export interface UserPublicSet extends Identity, AgeGender, Another {}
export interface UserChattingSet extends Identity, Another, AgeGender, Chatting {}
export interface UserProfileInquirySet extends Identity, Profile, Another, AgeGender {}
export interface UserSignupSet extends Identity, Account {}
export interface UserLoginSet extends Identity, Profile, Authentication, Account, RegisterSteps {}
export interface UserAccountSet extends Identity, Account, Authentication, AgeGender, Profile, Position {}

Geolocation;
