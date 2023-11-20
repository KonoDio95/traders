import React from 'react';
import parse from 'html-react-parser';

const CaroProduct = (props) => {
    let img_src = props.src;
    let qt_imgs = props.qt;
    let indicators = [];
    let imgs = [];
    for (let i = 0; i < qt_imgs; i++) {
        if (!i) {
            indicators[i] = `
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to=${i} className="active" aria-current="true" aria-label="Slide ${i + 1}" />
            `;
            imgs[i] = `
                <div className="carousel-item active">
                    <img src="${img_src}/${i}.webp" className="d-block h-25 m-auto" alt="Imagem ${i}" />
                </div>
            `;
        } else {
            indicators[i] = `
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to=${i} aria-label="Slide ${i + 1}"/>
            `;
            imgs[i] = `
                <div className="carousel-item">
                    <img src="${img_src}/${i}.webp" className="d-block h-25 m-auto" alt="Imagem ${i}" />
                </div>
            `;
        }
    }
    indicators = indicators.join('');
    imgs = imgs.join('');
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade bg-black rounded">
            <div className="carousel-indicators">
                {parse(indicators)}
            </div>
            <div className="carousel-inner">
                {parse(imgs)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default CaroProduct