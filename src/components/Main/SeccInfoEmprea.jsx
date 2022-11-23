import CarouselInfo from "../componentes/CarouselInfo";
import CarouselMobile from "../componentes/CarouselMobile";



const SeccInfoEmpresa = () => {
    return (
        <div className="divCarousel">
            <div className="carrusel">
            <CarouselInfo/>
            </div> 
            <div className="carrusel2">
            <CarouselMobile/>
            </div>
            <div className="infoCarousel">
                <h2>
                    Sobre Nosotros
                </h2> 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum quam sequi explicabo expedita qui? Architecto adipisci eaque repellendus nemo, quos explicabo sit, maxime reiciendis assumenda nulla consectetur. Eum, accusantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nisi maiores pariatur voluptas repellendus labore praesentium, nostrum aliquam, reiciendis incidunt saepe? Est repellendus molestiae alias reprehenderit quod ex laborum suscipit?
                </p>
            </div>
        </div>
    )
}

export default SeccInfoEmpresa;