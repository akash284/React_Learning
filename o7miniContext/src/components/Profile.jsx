import React,{useContext} from 'react'
import UserContext from '../context/UserContext'


// data fetch krre hein
function Profile() {

    const {user} = useContext(UserContext)
    // user ni exist krta to login p phucho
    if(!user) return <div>please login</div>

    return <div>welcome {user.username}</div>
}


export default Profile
