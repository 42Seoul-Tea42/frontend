import { useState, useEffect } from 'react';
import { get } from 'lodash';

/**
 * @type custom hook
 * @description 정렬기준에 따라서 정렬된 유저, 정렬기준 함수, 정렬방향 함수을 반환하는 훅 | 정렬 기준은 유저객체의 속성에 해당
 * @returns [fileteredUsers, setTrigger] as const
 */
const useSort = (users: any[]) => {
  const [sortedUsers, setSortedUsers] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<any>('another.distance');
  const [sortOrder, setSortOrder] = useState<'descending' | 'ascending'>('ascending');

  useEffect(() => {
    if (!users) return;
    const sorted = [...users].sort((a, b) => {
      const aValue = get(a, sortBy);
      const bValue = get(b, sortBy);
      let comparison = 0;
      if (aValue < bValue) {
        comparison = -1;
      }
      if (aValue > bValue) {
        comparison = 1;
      }
      return sortOrder === 'descending' ? comparison * -1 : comparison;
    });
    setSortedUsers(sorted);
  }, [sortBy, sortOrder]);

  return [sortedUsers, setSortBy, setSortOrder] as const;
};

export default useSort;
