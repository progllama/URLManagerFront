import { useState } from "react";
import axios from "axios";

function SignIn() {
    return (
        <div className="formContaienr">
            <SignInForm />
        </div>
    );
}

function SignInForm() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        axios.post("http://localhost:8080/sign_in", {
            name: name,
            email: email,
            password: password
        })
    };

    const handleValueChange = (setter) => {
        return (event) => {
            setter(event.target.value)
        }
    }

    return (
        <form name="sign_in">
            <label>Name</label>
            <input name="name" type="text" onChange={handleValueChange(setName)}/>
            <label>Email</label>
            <input name="email" type="text" onChange={handleValueChange(setEmail)}/>
            <label>Password</label>
            <input name="password" type="text" onChange={handleValueChange(setPassword)}/>
            <button type="button" onClick={handleSubmit}>送信</button>
        </form>
    );
}

export default SignIn;