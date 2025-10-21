import React from 'react'

export default function UsersTable({users}) {
    return (
    <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Users
        </h1>

        <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100 text-gray-700">
            <tr>
                <th className="py-3 px-4 border-b text-left">#ID</th>
                <th className="py-3 px-4 border-b text-left">Full Name</th>
                <th className="py-3 px-4 border-b text-left">Country</th>
                <th className="py-3 px-4 border-b text-left">Actions</th>
            </tr>
            </thead>
            <tbody className="text-gray-600">
            {users.length >0 ? users.map((user,key) =>
                        <tr key={key} className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b">{user.id}</td>
                            <td className="py-3 px-4 border-b">{user.fullName}</td>
                            <td className="py-3 px-4 border-b">{user.country}</td>
                            <td className="py-3 px-4 border-b">
                            <button className="text-blue-600 hover:text-blue-800 font-medium">
                                View
                            </button>
                            </td>
                        </tr>): <tr><td colSpan={4} align='center'>No Users</td></tr>}
            </tbody>
        </table>
        </div>
    </div>
    );
}