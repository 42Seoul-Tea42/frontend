interface timeProps {
  time: string;
}

// 기준시간 - 국제 표준시, 서버에서 한국시간으로 변환후 DB에 저장
export function timeConverter({ time }: timeProps) {
  // 시간이 없는 경우 현재시간으로 설정
  const select = (time: string) => {
    if (time === 'now') {
      return new Date().toISOString();
    } else {
      return time;
    }
  };

  // korea time = +9 %2B는 '+'의 인코딩, 안하면 +가 사라짐
  const formatting = (time: string) => {
    const plus = '%2B';
    const standard = '0000';
    return time.replace('T', ' ').replace('Z', '') + '000' + plus + standard;
  };

  return formatting(select(time));
}
