import { Fancy } from '../../enum';

// api call
export function sendFancy(fancy: Fancy) {
  //   if (fancy === Fancy.NONE) {
  //     return Fancy.SEND;
  //   } else if (fancy === Fancy.SEND) {
  //     return Fancy.SEND;
  //   } else if (fancy === Fancy.RECV) {
  //     return Fancy.CONN;
  //   } else if (fancy === Fancy.CONN) {
  //     return Fancy.CONN;
  //   }
  return fancy | Fancy.SEND;
}

// api call
export function sendUnFancy(fancy: Fancy) {
  //   if (fancy === Fancy.NONE) {
  //     return Fancy.NONE;
  //   } else if (fancy === Fancy.SEND) {
  //     return Fancy.NONE;
  //   } else if (fancy === Fancy.RECV) {
  //     return Fancy.RECV;
  //   } else if (fancy === Fancy.CONN) {
  //     return Fancy.RECV;
  //   }
  return fancy & ~Fancy.SEND;
}

// socket Event
export function recvFancy(fancy: Fancy) {
  //   if (fancy === Fancy.NONE) {
  //     return Fancy.RECV;
  //   } else if (fancy === Fancy.SEND) {
  //     return Fancy.CONN;
  //   } else if (fancy === Fancy.RECV) {
  //     return Fancy.RECV;
  //   } else if (fancy === Fancy.CONN) {
  //     return Fancy.RECV;
  //   }
  return fancy | Fancy.RECV;
}

// socket Event
export function recvUnFancy(fancy: Fancy) {
  //   if (fancy === Fancy.NONE) {
  //     return Fancy.NONE;
  //   } else if (fancy === Fancy.SEND) {
  //     return Fancy.NONE;
  //   } else if (fancy === Fancy.RECV) {
  //     return Fancy.NONE;
  //   } else if (fancy === Fancy.CONN) {
  //     return Fancy.SEND;
  //   }
  return fancy & ~Fancy.RECV;
}
