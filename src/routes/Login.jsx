import React from 'react'

const Login = () => {
    return (
        <div className='container border rounded my-5 p-2'>
            <h4 className='fw-bold text-center'>ENTRAR</h4>
            <hr />
            <form action="/login">
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label fw-bold">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Seu email"
                        name="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label fw-bold">
                        Senha:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Sua senha"
                        name="pswd"
                    />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" />{" "}
                        Lembre-me
                    </label>
                </div>
                <div className="d-flex justify-content-around">
                    <button type="submit" className="btn btn-primary w-25">
                        Logar
                    </button>
                    <a href="/register" className='btn btn-success w-25'>Registrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login