import { useState, useEffect } from 'react';
import ChattingListItem, { ChattingListItemProps } from './ChattingListItem';

const ChattingList = () => {
  const [users, setUsers] = useState<ChattingListItemProps[]>([]);

  useEffect(() => {
    setUsers([
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        imageSrc: '/emoji/1.jpg'
      },
      {
        name: 'Jane Cooper',
        distance: '2.7 km',
        imageSrc: '/emoji/1.jpg'
      }
    ]);

    // 서버에서 데이터를 가져오는 API 요청 수행
    // fetch('your_api_endpoint')
    //   .then(response => response.json())
    //   .then(data => setUsers(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul className="divide-gray-200 dark:divide-gray-700">
      {users.map((user, index) => (
        <ChattingListItem key={index} {...user} />
      ))}
    </ul>
  );
};

export default ChattingList;
