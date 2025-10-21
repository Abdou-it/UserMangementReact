import React, { useState } from 'react'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd';
const INITIAL_DATA = [ 
    { 
        id: 1, 
        fullName: 'Amin', 
        country: 'Algeria' 
    }, 
    { 
        id: 2, 
        fullName: 'Mohamed', 
        country: 'Morocco' 
    }, 
    { 
        id: 3, 
        fullName: 'Rachid', 
        country: 'Tunisia' 
    } 
];

export default function UsersApp() {
    const [users, setUsers] = useState(INITIAL_DATA)
    const [lastId, setLastId] = useState(0)
    return (
        <>
        <UsersAdd lastId={lastId}/>
        <hr />
        <UsersTable users={users}/>

        </>
    )
}
