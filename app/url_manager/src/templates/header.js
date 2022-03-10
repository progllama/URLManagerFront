import './footer.css'

function Header(props)
{
    return (
        <div className="header">
            <a href="/about" className="logo">URL Manager</a>
            <div className="header-right">
                <a className="login" href="#login">SingIn</a>
                <a className="SingUp" href="SignUp">SignUp</a>
            </div>
        </div>
    );
}

export default Header;