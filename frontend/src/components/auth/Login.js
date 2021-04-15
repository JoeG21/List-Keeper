import { useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div>
            <form className='login-form'>
                <label> Email </label>
                <input onChange={e => setEmail(e.target.value)} />
                <label> Password </label>
                <input onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="Login" className='login-button' />
            </form>        
        </div>
    )
}

export default Login