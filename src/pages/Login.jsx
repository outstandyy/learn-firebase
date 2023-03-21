import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signIn, signInWithGithub, signInWithGoogle } from "../helpers/auth";

function Login() {
	const [input, setInput] = useState({ email: "", password: "" });

	// sign in submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		let email = input.email.toLowerCase().trim();
		let password = input.password;

		// sign in function
		signIn(email, password);
	};

	// Google click handler
	const googleSignIn = () => {
		signInWithGoogle();
	};

	// Github click handler
	const githubSignIn = () => {
		signInWithGithub();
	};

	const handleChange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="form-body">
			<form autoComplete="off" className="form" onSubmit={handleSubmit}>
				<h1>Sign In</h1>
				<p>Fill the form below to sign in to your account.</p>
				<div className="email-input">
					<input
						name="email"
						type="text"
						placeholder="Enter email"
						onChange={handleChange}
						value={input.email}
						required
						autoComplete="true"
					/>
					<label htmlFor="email" className="label-name">
						<span className="content-name">Email</span>
					</label>
				</div>
				<div className="password-input">
					<input
						name="password"
						placeholder="Enter password"
						onChange={handleChange}
						value={input.password}
						type="password"
						required
						autoComplete="true"
					/>
					<label htmlFor="password" className="label-name">
						<span className="content-name">Password</span>
					</label>
				</div>
				<div className="btn">
					<button title="Login" aria-label="Login" type="submit">
						Login
					</button>
				</div>
			</form>
			<div className="option">
				or <br />
				<button
					title="Sign in with Google"
					aria-label="Sign in with Google"
					onClick={googleSignIn}
				>
					Sign in with Google
				</button>
				<button
					title="Sign in with Github"
					aria-label="Sign in with Github"
					onClick={githubSignIn}
				>
					Sign in with Github
				</button>
				<p>
					Don't have an account?
					<Link to="/signup">Sign Up</Link>
				</p>
			</div>
		</div>
	);
}

export default Login;
