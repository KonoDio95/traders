import React from 'react'
import CardProduct_1 from '../components/CardProduct_1'

const Home = () => {
  return (
    <div className="container-fluid my-3">
      <div className='mb-4'>
        <h3 className='text-center mb-3'><em>Conectando compradores e vendedores, criando oportunidades infinitas.</em></h3>
        <form action="" className='row w-50 m-auto'>
          <div className="col">
            <input type="text" className='form-control p-2' placeholder='Buscar...' />
          </div>
          <div class="col-auto">
            <button type="submit" className="btn btn-success p-2">Buscar</button>
          </div>
        </form>
      </div>
      <h5 className='border-bottom mx-3'>Produtos:</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="col">
          <CardProduct_1 id='1' src='\produtos\1\0.webp' name='Mountain bike VikingX Tuff' price='1.599,50' />
        </div>
        <div className="col">
          <CardProduct_1 id='2' src='\produtos\2\0.webp' name='Ventilador De Mesa Turbo' price='189,90' />
        </div>
        <div className="col">
          <CardProduct_1 id='3' src='\produtos\3\0.webp' name='Notebook Gamer Acer Nitro 5' price='3999,90' />
        </div>
        <div className="col">
          <CardProduct_1 id='4' src='\produtos\4\0.webp' name='Volkswagen Fusca 1500' price='49.990,00' />
        </div>
      </div>
    </div>
  )
}

export default Home