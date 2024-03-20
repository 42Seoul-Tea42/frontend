import React from 'react';

type UserRowProps = {
  name: string;
  email: string;
  role: string;
  status: string;
  onClickEdit: () => void;
};

const UserRow = ({ name, email, role, status, onClickEdit }: UserRowProps) => (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <th
      scope="row"
      className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      <img
        className="w-10 h-10 rounded-full"
        src={`/docs/images/people/${name.toLowerCase()}-picture.jpg`}
        alt={`${name} image`}
      />
      <div className="ps-3">
        <div className="text-base font-semibold">{name}</div>
        <div className="font-normal text-gray-500">{email}</div>
      </div>
    </th>
    <td className="px-6 py-4">{role}</td>
    <td className="px-6 py-4">
      <div className="flex items-center">
        <div
          className={`h-2.5 w-2.5 rounded-full bg-${
            status === 'Online' ? 'green' : 'red'
          }-500 me-2`}
        ></div>{' '}
        {status}
      </div>
    </td>
    <td className="px-6 py-4">
      <a
        href="#"
        type="button"
        onClick={onClickEdit}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Edit user
      </a>
    </td>
  </tr>
);

const SearchResultTable = () => {
  const users = [
    {
      id: 1,
      name: 'Neil Sims',
      email: 'neil.sims@flowbite.com',
      role: 'React Developer',
      status: 'Online'
    },
    {
      id: 2,
      name: 'Bonnie Green',
      email: 'bonnie@flowbite.com',
      role: 'Designer',
      status: 'Online'
    },
    {
      id: 3,
      name: 'Jese Leos',
      email: 'jese@flowbite.com',
      role: 'Vue JS Developer',
      status: 'Online'
    },
    {
      id: 4,
      name: 'Thomas Lean',
      email: 'thomes@flowbite.com',
      role: 'UI/UX Engineer',
      status: 'Online'
    }
  ];

  const handleEditUser = (userId: number) => {
    // Handle edit user action
    console.log('Edit user clicked:', userId);
  };

  return (
    <div className="relative mt-40 shadow overflow-x-scroll sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Distance
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow
              key={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
              status={user.status}
              onClickEdit={() => handleEditUser(user.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultTable;
