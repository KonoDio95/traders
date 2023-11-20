import React from 'react'

const Register = () => {
    return (
        <div className='container border rounded my-5 p-2'>
            <h4 className='fw-bold text-center'>REGISTRAR</h4>
            <hr />
            <form action="/register">
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label fw-bold">
                        Nome:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Seu nome"
                        name="name"
                        maxLength={70}
                    />
                </div>
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
                <div className="mb-3">
                    <label htmlFor="address" className="form-label fw-bold">Endereço:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Rua dos bobos, 0"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address2" className="form-label fw-bold">Endereço 2 (Opcional):</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Rua da Amargura, 100"
                    />
                </div>
                <div className="row mb-3">
                    <div className="form-group col">
                        <label htmlFor="city" className='fw-bold'>Cidade:</label>
                        <input type="text" className="form-control" id="city" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="state" className='fw-bold'>Estado:</label>
                        <select id="state" className="form-control">
                            <option selected="">Escolha</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="zip" className='fw-bold'>Código postal:</label>
                        <input type="text" className="form-control" id="zip" />
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <button type="submit" className="btn btn-primary w-50">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register