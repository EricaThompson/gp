import React, { useState } from 'react'

const Profile = ({user}) => {

  const [show, setShow] = useState(false)

  const profileToggle =()=> {
    show ? setShow(false) : setShow(true)
  }

  console.log("profile: ", user)
  return (
    <div className={`profile ${show ? "" : "profile-hidden"}`}>
            {show && <div>
              <p>@{user.username} | {user.displayName}</p>
              <p>{user.followers}</p>
              <p>{user.bio}</p>
              <p>{user.joinedDate}</p>
            </div>}
            <img className="profile-user-img" src={`http://localhost:2819${user.profileImage}`} alt="user profile image" />
            <p onClick={(()=> {profileToggle()})} className='profile-hider'>{show ? "-" : "+"}</p>
    </div>
  )
}

export default Profile