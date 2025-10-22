import React, { useState } from 'react'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd';

export default function UsersApp() {
    const [users, setUsers] = useState([])
    const [lastId, setLastId] = useState(0)

    const addUser = (data) => {
        setUsers(prevState => [...prevState,data.payload])
        setLastId(prevState => prevState +1)
    }
    return (
        <>
        <UsersAdd lastId={lastId} onAddUser={addUser}/>
        <hr />
        <UsersTable users={users}/>

        </>
    )
}
