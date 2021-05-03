import { useState } from 'react'
import {
    withRouter
} from 'react-router'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            email: email,
            password: password
        }
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
            .then(token => {
                localStorage.setItem('auth_key', token['auth_key'])
                props.handleLogin()
                props.history.push('/mynotes')
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
                <label> Email </label>
                <input className='user-input' onChange={e => setEmail(e.target.value)} />

                <label> Password </label>
                <input className='user-input' type='password' onChange={e => setPassword(e.target.value)} />

                <input className='submit-button' type="submit" value="Login" />
            </form>
        </div>
    )
}

export default withRouter(Login)