import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import UserProfile from "../UserProfile/UserProfile";
import jwt_decode from "jwt-decode";

function AuthForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };

        try {
            const response = await fetch("http://localhost:8080/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Здесь вы можете обработать успешный ответ, например, перенаправить пользователя
                const jsonResponse = await response.json();
                setToken(jsonResponse.token);
                console.log("Успешно вошли!");
                console.log({ token });
                navigate("/certificates/data");
                const decodedToken = jwt_decode(token);
                console.log(decodedToken);
                console.log(decodedToken.sub);
                console.log(decodedToken.roles);

            } else {
                // Здесь вы можете обработать ошибку, например, вывести сообщение об ошибке
                setError("Login failed");
                console.error("Ошибка входа.", error);
            }
        } catch (error) {
            console.error("Произошла ошибка при отправке запроса:", error);
        }
    };

    return (<div className="form-wrapper d-flex justify-content-center align-items-center">
        <form className="mt-5 login-form">
            <div className="login-header">Login</div>
            <div className="items-wrapper">
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        style={{ fontSize: "12px" }}
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        id="exampleInputPassword1"
                        style={{ fontSize: "12px" }}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="out">
                    {error && <div className="error-message">{error}</div>}
                </div>
                <button type="submit" className="btn btn-primary" style={{ fontSize: "12px" }} onClick={handleLogin}>Login</button>
            </div>
        </form>



    </div>)
};

export default AuthForm;