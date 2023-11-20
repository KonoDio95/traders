import React from 'react'

const Tobuy = (props) => {
    let name = props.name;
    let price = props.price;
    return (
        <div className="d-flex flex-column col">
            <div className='buttons sticky-top w-100' style={{ height: 'fit-content' }}>
                <div>
                    <h2 className='text-center'>{name}</h2>
                </div>
                <hr />
                <div>
                    <h4 className='fw-bold text-center'>R$ {price}</h4>
                    <button className='btn btn-success w-100'>COMPRAR</button>
                </div>
                <p className='my-2 text-center'>OU</p>
                <div>
                    <button className='btn btn-primary w-100'>TROCA - CONTATO</button>
                </div>
                <div className="accordion my-3" id="accordion2">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Meios de pagamento
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <div>
                                    <h6>Cartões de crédito</h6>
                                    <div>
                                        <img className='m-1' src="\produtos\pagamentos\credito\1.svg" alt="Visa" />
                                        <img className='m-1' src="\produtos\pagamentos\credito\2.svg" alt="Mastercard" />
                                        <img className='m-1' src="\produtos\pagamentos\credito\3.svg" alt="Hipercard" />
                                        <img className='m-1' src="\produtos\pagamentos\credito\4.svg" alt="Elo" />
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h6>Cartões de débito</h6>
                                    <div>
                                        <img className='m-1' src="\produtos\pagamentos\debito\1.svg" alt="Santander" />
                                        <img className='m-1' src="\produtos\pagamentos\debito\2.svg" alt="Caixa" />
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h6>Boleto bancário</h6>
                                    <div>
                                        <img className='m-1' src="\produtos\pagamentos\boleto.svg" alt="Boleto bancário" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tobuy