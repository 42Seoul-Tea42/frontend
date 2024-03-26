export function newMatch() {
  // if (채팅 목록에 on) 채팅목록 refresh 처리
  // else: chat 탭에 노티
}

export function newFancy() {
  // (받으면) fancy 탭에 노티
}

export function newHistory() {
  // (받으면) history 탭에 노티
}

export function sendMessage() {
  // if (유저가 해당 유저와의 채팅방에 있을 때) 채팅방에 그려주고 readMessage 보내기
  // elif (유저가 채팅 목록을 켜뒀을 때) 해당 상대방의 채팅을 채팅목록 최상단으로 올리고 채팅라인에 노티
  // else (그 외의 경우) chat 탭에 노티
}

export function readMessage() {
  // (채팅방 내) 내가 보낸 메시지를 상대방이 읽었다는 표시 처리해주세요
}

export function updateDistance() {
  // 목록에 있는 유저의 위치가 이동함 -> 채팅목록에 표시되는 거리 업데이트 필요
  // (본인의 위치가 이동하는 경우 해당 location API로 보내주시면 BE에서 소켓으로 업데이트 진행하겠습니다)
}

export function updateStatus() {
  // 목록에 있는 유저가 로그인/로그아웃 해서 상태변경 함
  // -> 채팅목록에 표시되는 status 업데이트 필요
}

export function unMatch() {
  // 해당 채팅방 freeze! DB는 날아가고 채팅 더이상 못치게 됨
}

export function unRegiste() {
  // 해당 채팅방 freeze! target_id로 api/socket 요청 오지 못하게 해주세요
}
