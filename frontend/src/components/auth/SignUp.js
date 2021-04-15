import { useState, useEffect } from 'react'

const SignUp = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            user: {
                first_name: first,
                last_name: last,
                email: email,
                password: password
            }
        }
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(user => console.log(user))
        .catch(mes => console.log(mes))
    }

    return (
        <div>
            <form className='signup-form' onSubmit={e => handleSubmit(e)}>
                <label> First Name </label>
                <input onChange={e => setFirst(e.target.value)}></input>

                <label> Last Name </label>
                <input onChange={e => setLast(e.target.value)}></input>

                <label> Email </label>
                <input onChange={e => setEmail(e.target.value)}></input>

                <label> Password </label>
                <input onChange={e => setPassword(e.target.value)}></input>

                <input type="submit" value="Sign Up" className='signup-button' />
            </form>
        </div>
    )
}

export default SignUp