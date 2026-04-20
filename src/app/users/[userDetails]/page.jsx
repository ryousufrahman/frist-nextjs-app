import React from 'react';

const UserDetailsPage = async({params}) => {
    const {userDetails} =await params
    const userid = userDetails
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    const userData = await res.json()
    return (
        <div>
            <p>{userData.name}</p>
        </div>
    );
};

export default UserDetailsPage;