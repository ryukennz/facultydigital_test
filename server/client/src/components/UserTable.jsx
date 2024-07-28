/* eslint-disable react/prop-types */
const UserTable = ({ users }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Viewed Properties
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user._id}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                {idx + 1}
              </th>
              <td className="px-6 py-4">{user._id}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">
                {user.viewedProperties.length === 0 ? (
                  <div className="mb-2">
                    <span className="text-gray-900 dark:text-white">
                      No viewed properties
                    </span>
                  </div>
                ) : (
                  user.viewedProperties.map((property) => (
                    <div key={property._id} className="mb-2">
                      <span className="text-gray-900 dark:text-white">
                        - {property.propertyName}
                      </span>
                    </div>
                  ))
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
