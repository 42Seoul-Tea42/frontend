import { useState, useEffect } from 'react';
import { get } from 'lodash';

type useSortedUsersProps = {
  users: any[];
  sortBy: string; // sortBy가 string 타입으로 지정되어 있으므로 any 대신 string으로 지정합니다.
  sortOrder: 'ascending' | 'descending';
};

const useSortedUsers = ({ users, sortBy, sortOrder }: useSortedUsersProps) => {
  const [sortedUsers, setSortedUsers] = useState<any[]>([]);

  useEffect(() => {
    if (users && users.length > 0) {
      const sorted = [...users].sort((a, b) => {
        console.log(a, b, sortBy, sortOrder);
        const aValue = get(a, sortBy);
        const bValue = get(b, sortBy);
        let comparison = 0;
        if (aValue < bValue) {
          comparison = -1;
        } else if (aValue > bValue) {
          comparison = 1;
        }
        return sortOrder === 'descending' ? comparison * -1 : comparison;
      });
      setSortedUsers(sorted);
    }
  }, [sortBy, sortOrder]);

  return sortedUsers;
};

export default useSortedUsers;
