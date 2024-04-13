import { useState, useEffect } from 'react';

type useSortedUsersProps = {
  users: any[];
  sortBy: any;
  sortOrder: 'ascending' | 'descending';
};

const useSortedUsers = ({ users, sortBy, sortOrder }: useSortedUsersProps) => {
  const [sortedUsers, setSortedUsers] = useState<any[]>([]);

  useEffect(() => {
    if (users && users.length > 0) {
      const sorted = [...users].sort((a, b) => {
        let comparison = 0;
        if (a[sortBy] < b[sortBy]) {
          comparison = -1;
        } else if (a[sortBy] > b[sortBy]) {
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
