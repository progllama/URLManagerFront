import './footer.css';
import axios from 'axios';

function sendRequest() {
    axios.get('http://localhost:8080', { 
        withCredentials: true
    }).then(function (response) {
        console.log(response.data);
      })
}

function Header(props)
{
    return (
        <div className="header">
            <button type="button" onClick={sendRequest} >Test</button>
            <a href="/about" className="logo">URL Manager</a>
            <div className="header-right">
                <a className="login" href="http://localhost:8080/">SingIn</a>
                <a className="SingUp" href="SignUp">SignUp</a>
            </div>
        </div>
    );
}

export default Header;