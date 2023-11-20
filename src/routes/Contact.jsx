import React from 'react'
import ListContactI from '../components/ListContactI'

const Contact = () => {
  return (
    <div className='d-flex flex-column container my-3 w-50'>
      <div className='mb-4'>
        <h3 className='text-muted'>Com o que podemos ajudar?</h3>
        <form action="" className='row'>
          <div className="col">
            <input type="text" className='form-control p-2' placeholder='Buscar em contato' />
          </div>
          <div class="col-auto">
            <button type="submit" className="btn btn-primary p-2">Buscar</button>
          </div>
        </form>
      </div>
      <div className='mb-4'>
        <h3 className='text-muted'>Compras</h3>
        <ul className="list-group">
          <ListContactI ico="bi bi-bag-fill fs-2" name="Administrar e cancelar compras" info="Pagar, rastrear envios, alterar, reclamar ou cancelar compras."/>
          <ListContactI ico="bi bi-arrow-clockwise fs-2" name="Devoluções e reembolsos" info="Devolver um produto ou consultar por estorno de compra."/>
          <ListContactI ico="bi bi-question-circle fs-2" name="Perguntas frequentes sobre compras"/>
        </ul>
      </div>
      <div className='mb-4'>
        <h3 className='text-muted'>Vendas</h3>
        <ul className="list-group">
          <ListContactI ico="bi bi-tags-fill fs-2" name="Reputação, vendas e envios" info="Perguntar sobre sua reputação, envio, pagamento ou devolução."/>
          <ListContactI ico="bi bi-badge-ad-fill fs-2" name="Gerenciar anúncios" info="Melhorar a qualidade, alterar, excluir ou resolver problemas."/>
          <ListContactI ico="bi bi-question-circle fs-2" name="Perguntas frequentes sobre vendas"/>
        </ul>
      </div>
      <div className='mb-4'>
        <h3 className='text-muted'>Ajuda com sua conta</h3>
        <ul className="list-group">
          <ListContactI ico="bi bi-person-circle fs-2" name="Configuração da minha conta"/>
          <ListContactI ico="bi bi-shield-fill-check fs-2" name="Segurança"/> 
        </ul>
      </div>
    </div>
  )
}

export default Contact