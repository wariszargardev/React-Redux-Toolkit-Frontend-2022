import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../feature/user/userSlice";

const Users = () => {
    const {loading , users, error} = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h1>Users list</h1>
            {loading ? <h1>Loading.......</h1> : ""}
            {error ? <h1>{error} </h1> : ""}
            {users && users.map((user, index) => (
                <div key={index} style={{border: "1px solid black"}}>
                    <p><b>ID:</b> {user.id}</p>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Email:</b> {user.email}</p>

                </div>
            ))}

        </div>
    );
};

export default Users;