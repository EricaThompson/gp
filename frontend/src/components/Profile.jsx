import React from 'react'

// const user = [{
//     "userId": 2,
//     "username": "sarahsmith",
//     "displayName": "Sarah Smith",
//     "bio": "Digital artist | Cat mom | Dreamer ✨",
//     "profileImage": "src/assets/images/2.webp",
//     "followers": 987,
//     "following": 210,
//     "posts": 432,
//     "verified": false,
//     "joinedDate": new Date(2020, 5, 15, 12, 0, 0)
//   }]

const Profile = ({data}) => {
  return (
    <div className='profile'>
        <div>
            <p>@{data[0].username} | {data[0].displayName}</p>
            <p>{data[0].followers}: followers</p>
            <p>{data[0].bio} :bio</p>
            <p>{data[0].joinedDate.getFullYear()} :since</p>
            <img className="profile-user-img" src={data[0].profileImage} alt="" />
        </div>
    </div>
  )
}

export default Profile