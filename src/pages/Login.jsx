import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const [loginError, setLoginError] = useState('');


    const { logIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const greetings = () => toast("Thanks for login...")

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        logIn(email, password)

        setLoginError('')

        if (password.length < 6) {
            setLoginError("Password must be at least 6 character or longer");
            return;
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
            setLoginError('Must have capital and special character');
            return;
        }
        logIn(email, password )
        .then(result => {
            console.log(result.user);

            { greetings() }
            navigate(location?.state ? location.state : '/')

        })
        .catch(error => {
            console.error(error);
        })
    }

return (

    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>


            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

            </div>
            <p className="text-center ">Do not have an account? please <Link className="text-blue-800 font-bold" to='/register'>Register</Link></p>
        </div>

        {
            loginError && <p className="text-red-600">{loginError}</p>
        }

    </div>
);
};

export default Login;