import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid orange',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}


// why useState() is needed:
/* 
=> To update a component with new data, two things need to happen:
1. Retain the data between renders.
2. Trigger React to render the component with the new data(re-rendering).


=> 5 use cases of useState()
1. state management
2. conditional rendering
3. toggle flags (true/false)
4. counter
5. store API data in state
*/