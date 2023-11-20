import React from 'react'
import { useParams } from 'react-router-dom';
import Tobuy from '../components/Tobuy';
import PayForm from '../components/PayForm1';
import CaroProduct from '../components/CaroProduct';

const Produtos = () => {
    let { id } = useParams();
    if (id == 1) {
        return (
            <div >
                <div className='container-fluid row my-4'>
                    <div className='col-sm-8'>
                        <CaroProduct src='/produtos/1' qt='1' />
                        <div className="accordion my-3" id="accordionPanelsStayOpenExample">
                            <PayForm />
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        Descrição
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                    <div className="accordion-body text-muted">
                                        <p>Estou vendendo ou trocando minha bicicleta em excelente estado. Ela tem sido uma companheira fiel nas minhas aventuras diárias, mas agora é hora de encontrar um novo lar para ela.</p>
                                        <p><strong>Características:</strong></p>
                                        <ul>
                                            <li>Marca: Viking</li>
                                            <li>Modelo: Mountain bike</li>
                                            <li>Cor: Preto</li>
                                            <li>Tamanho do quadro: 13.5 cm</li>
                                            <li>Número de marchas: 21</li>
                                        </ul>
                                        <p>A bicicleta foi bem cuidada e regularmente mantida. Os pneus estão em ótimo estado e os freios
                                            funcionam perfeitamente. Ela é ideal para passeios pela cidade ou trilhas leves.
                                        </p>
                                        <p>
                                            Estou aberto a ofertas de venda ou troca. Se você estiver interessado, por favor, entre em contato
                                            para mais detalhes ou para agendar uma visualização. Vamos garantir que essa bicicleta encontre um
                                            novo lar onde será tão apreciada quanto foi comigo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tobuy name='Mountain bike VikingX Tuff' price='1.599,50' />
                </div>

            </div>
        )
    }
    else if (id == 2) {
        return (
            <div >
                <div className='container-fluid row my-4'>
                    <div className='col-sm-8'>
                        <CaroProduct src='/produtos/2' qt='6' />

                        <div className="accordion my-3" id="accordionPanelsStayOpenExample">
                            <PayForm />
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        Descrição
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                    <div className="accordion-body text-muted">
                                        <p>Estou vendendo ou trocando meu ventilador em excelente estado. Ele tem sido um aliado fiel nos dias quentes, mas agora é hora de encontrar um novo lar para ele.</p>
                                        <p><strong>Características:</strong></p>
                                        <ul>
                                            <li>Marca: Mondial </li>
                                            <li>Modelo: Vtx-40-8p</li>
                                            <li>Cor: Preto</li>
                                            <li>Número de velocidades: 3</li>
                                            <li>Tipo: De mesa</li>
                                        </ul>
                                        <p>O ventilador foi bem cuidado e regularmente limpo. Ele funciona perfeitamente, fornecendo uma brisa agradável em todas as suas velocidades. Ele é ideal para manter o ambiente fresco em dias quentes.</p>
                                        <p>
                                            Estou aberto a ofertas de venda ou troca. Se você estiver interessado, por favor, entre em contato para mais detalhes ou para agendar uma visualização.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tobuy name='Ventilador De Mesa Turbo' price='189,90' />
                </div>

            </div>
        )
    }
    else if (id == 3) {
        return (
            <div >
                <div className='container-fluid row my-4'>
                    <div className='col-sm-8'>
                        <CaroProduct src='/produtos/3' qt='5' />

                        <div className="accordion my-3" id="accordionPanelsStayOpenExample">
                            <PayForm />
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        Descrição
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                    <div className="accordion-body text-muted">
                                        <p>Estou vendendo ou trocando meu Acer Nitro 5 em excelente estado. Ele tem sido um companheiro fiel nas minhas aventuras de jogos, mas agora é hora de encontrar um novo lar para ele.</p>
                                        <p><strong>Características:</strong></p>
                                        <ul>
                                            <li>Marca: Acer</li>
                                            <li>Modelo: Nitro 5</li>
                                            <li>Processador: AMD Ryzen 7</li>
                                            <li>Memória RAM:  8GB</li>
                                            <li>Armazenamento: 512 GB SSD M.2 2280 PCIe 3.0 NVMe x4</li>
                                            <li>Placa de vídeo: NVIDIA® GeForce® GTX 1650 com 4 GB de memória dedicada GDDR6 (TGP de 50W) Suporte às tecnologias: NVIDIA® Geforce Experience, NVIDIA® GPU Boost™, Game Ready Drivers, Microsoft® DirectX® 12 e OpenGL® 4/5. AMD Radeon ® Graphics com memória compartilhada com a memória RAM.</li>
                                            <li>Sistema Operacional: Windows 11</li>
                                        </ul>
                                        <p>O laptop foi bem cuidado e regularmente mantido. Ele é ideal para jogos pesados e tarefas que exigem alto desempenho.</p>

                                        <p>
                                            Estou aberto a ofertas de venda ou troca. Se você estiver interessado, por favor, entre em contato para mais detalhes ou para agendar uma visualização. Vamos garantir que esse laptop encontre um novo lar onde será tão apreciado quanto foi comigo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tobuy name='Notebook Gamer Acer Nitro 5' price='3999,90' />
                </div>
            </div>
        )
    }
    else if (id == 4) {
        return (
            <div >
                <div className='container-fluid row my-4'>
                    <div className='col-sm-8'>
                        <CaroProduct src='/produtos/4' qt='7' />

                        <div className="accordion my-3" id="accordionPanelsStayOpenExample">
                            <PayForm />
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        Descrição
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                    <div className="accordion-body text-muted">
                                        <p>Estou vendendo ou trocando meu Fusca em excelente estado. Ele tem sido um companheiro fiel nas minhas aventuras diárias, mas agora é hora de encontrar um novo lar para ele.</p>
                                        <p><strong>Características:</strong></p>
                                        <ul>
                                            <li>Marca: Volkswagen</li>
                                            <li>Modelo: Fusca</li>
                                            <li>Ano: 1973</li>
                                            <li>Quilometragem: 27000 km</li>
                                            <li>Cor: Azul</li>
                                            <li>Combustível: Gasolina</li>
                                            <li>Câmbio: Manual</li>
                                        </ul>
                                        <p>O Fusca foi bem cuidado e regularmente mantido. Ele é ideal para passeios pela cidade e viagens curtas.</p>

                                        <p>
                                            Estou aberto a ofertas de venda ou troca. Se você estiver interessado, por favor, entre em contato para mais detalhes ou para agendar uma visualização. Vamos garantir que esse Fusca encontre um novo lar onde será tão apreciado quanto foi comigo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tobuy name='Volkswagen Fusca 1500' price='49.990,00' />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1 className='d-flex align-items-center justify-content-center' style={{height: '70vh'}}>Produto não encontrado</h1>
            </div>
        )
    }
}

export default Produtos