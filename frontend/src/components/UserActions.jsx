import React, { useState } from 'react'
import Post from './Post'

const UserActions = () => {
    const [newPost, setNewPost] = useState(false)

    const actions = [{
        icon:"✍🏾",
        setNewPost
    },{
        icon:"📍",
        setNewPost
    },{
        icon:"🔍",
        setNewPost
    },{
        icon:"✔️",
        setNewPost
    },{
        icon:"🗑",
        setNewPost
    }]
    
    return (
        <div className='user-actions'>
            {actions.map((action, i)=> (
                <div onClick={()=>action.setNewPost(true)} className="each-action" key={i}>
                    {action.icon}
                </div>
            ))}
            { newPost && (<Post /> )}
            {newPost && <div className="closer" onClick={()=>setNewPost(false)}>
                x
            </div>}
        </div>
    )
}

export default UserActions