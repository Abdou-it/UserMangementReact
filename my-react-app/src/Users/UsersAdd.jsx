import React from 'react'

export default function UsersAdd({lastId}) {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add User</h1>

            <form
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto"
            >
                <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Current Id</label>
                <input
                    type="text"
                    name="currentId"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                    value={lastId+1}
                    readOnly
                />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter full name"
                />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Country</label>
                    <select
                        name="country"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value="">Select a country</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Tunisia">Tunisia</option>
                    </select>
                </div>

                <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
                >
                Add User
                </button>
            </form>
    </>
    )
}
