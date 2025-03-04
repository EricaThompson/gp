import React from 'react'

const UserActions = () => {

    const actions = ["✍🏾","📍","🔍","✔️","🗑"]
    
    return (
        <div className='user-actions'>
            {actions.map((action, i)=> (
                <div className="each-action" key={i}>
                    {action}
                </div>
            ))}
        </div>
    )
}

export default UserActions