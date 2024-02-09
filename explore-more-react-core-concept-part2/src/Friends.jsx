import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend.jsx'
export default function Friends() {


    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}



/* 
1. declare a state to hold data
2.useEffect with dependency array
3. use fetch to load data
4. set loaded data to the state
*/

/* 
Recap: any screen update in a react app happens in three steps:
1. Trigger
2. Render
3. Commit
=> React does not touch the DOM if the rendaring result is the same as last time
*/