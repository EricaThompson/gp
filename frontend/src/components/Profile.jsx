import React from 'react'

const Profile = ({user}) => {

  console.log("profile: ", user)
  return (
    <div className='profile'>
        <div>
            <p>@{user.username} | {user.displayName}</p>
            <p>{user.followers}: followers</p>
            <p>{user.bio} :bio</p>
            <p>{user.joinedDate} :since</p>
            {/* <img className="profile-user-img" src={user.profileImage} alt="" /> */}
        </div>
    </div>
  )
}

export default Profile