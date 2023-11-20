import React from 'react'

const PayForm = () => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                >
                    Meios de pagamento
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
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
    )
}
export default PayForm