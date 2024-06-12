import { Gender } from '../enum';

const mappingTable = new Map<string, string>([
  // ['serverKey', 'clientKey']
  ['id', 'id'],
  ['login_id', 'loginId'],
  ['name', 'firstname'],
  ['last_name', 'lastname'],
  ['email', 'email'],
  ['pw', 'password'],
  ['age', 'age'],
  ['fame', 'rating'],
  ['gender', 'gender'],
  ['taste', 'sexualPreference'],
  ['bio', 'introduction'],
  ['pictures', 'pictures'],
  ['tags', 'interests'],
  ['hate_tags', 'hateInterests'],
  ['emoji', 'emoji'],
  ['hate_emoji', 'hateEmoji'],
  ['similar', 'simillar'],
  ['fancy', 'fancy'],
  ['email_check', 'emailCheck'],
  ['profile_check', 'profileCheck'],
  ['emoji_check', 'emojiCheck'],
  ['picture', 'picture'],
  ['time', 'time'],
  ['distance', 'distance'],
  ['oauth', 'oauth'],
  ['occupied', 'occupied'],
  ['error', 'error'],
  ['new', 'new'],
  ['status', 'status'],
  ['sender_id', 'senderId'],
  ['msg', 'message'],
  ['msg_time', 'time']
]);

export function serverToClientMapper(serverData: any): any {
  const frontEndData: Partial<any> = {};

  for (const key in serverData) {
    const newKey = mappingTable.get(key);
    if (newKey) {
      frontEndData[newKey] = serverData[key];
      // console.log(`serverToClientMapper: ${key} -> ${newKey}`);
    }
  }

  return frontEndData as any;
}
