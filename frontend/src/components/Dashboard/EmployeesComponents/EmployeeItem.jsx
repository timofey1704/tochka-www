import React from 'react'

const EmployeeItem = ({ user, onStatusChange }) => {
  const handleCheckboxChange = () => {
    onStatusChange(user.id, !user.is_active)
  }

  return (
    <tr>
      <td className="px-6 py-4 text-center whitespace-nowrap">
        {user.username}
      </td>
      <td className="px-6 py-4 text-center whitespace-nowrap">{user.email}</td>
      <td className="px-6 py-4 text-center whitespace-nowrap">
        <input
          type="checkbox"
          checked={user.is_active}
          onChange={handleCheckboxChange}
        />
      </td>
    </tr>
  )
}

export default EmployeeItem
