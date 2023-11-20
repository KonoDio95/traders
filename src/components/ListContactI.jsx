import React from 'react';

const ListContactI = (props) => {
    let ico = props.ico;
    let name = props.name;
    let info = props.info;
    return (
        <li className="list-group-item p-2">
            <a className='d-flex align-items-center text-black' href="#" style={{ textDecoration: 'none' }}>
                <div className='w-10 mx-3'>
                    <i class={`${ico}`}></i>
                </div>
                <div>
                    <h6>{name}</h6>
                    <p className='m-0 text-body-secondary'>{info}</p>
                </div>
            </a>
        </li>
    )
}
export default ListContactI