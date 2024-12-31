import { useState } from 'react';
import './app.css'
function App() {
  // ****************************************** estados *****************************************
const [modal,setModal] = useState(false);
  // *****************************************  funciones ********************************
const openModal = ()=>{
  setModal(!modal)
}
  return (
    < div className='app'>
    <div className="btn-titulo">
      <div className='contenedor-btn-redes'>  
<button onClick={openModal} class="shadow__btn">
    Redes
</button>
{modal && (
  <div className='contenedor-redes'>
   <i class='bx bxl-whatsapp bx-tada bx-flip-vertical' ></i>
    <i class='bx bxl-github bx-tada bx-flip-vertical' ></i>
    <i class='bx bxl-twitter bx-tada bx-flip-vertical' ></i>
  </div>
)

}
</div>
<h1>Imagenes 3D Giratorias</h1>
    </div>
<div className="padre-contenedor">


    <div className="container">
     
      <span style={{ "--i": 0 }}>
      <a href="" target='_blank'>
        <img
          src="https://www.clarin.com/2022/01/06/tj49ZwaCn_2000x1500__1.jpg"
          alt=""
          /></a>
      </span>
      <span style={{ "--i": 1 }}>
        <img
          src="https://4kwallpapers.com/images/wallpapers/the-simpsons-3840x2160-9426.jpg"
          alt=""
          />
      </span>
      <span style={{ "--i": 2 }}>
        <img
          src="https://rukminim2.flixcart.com/image/750/900/ksru0sw0/poster/n/j/m/medium-tom-and-jerry-beautiful-poster-asstore-tomk1-original-imag69xjvgz5mqqz.jpeg?q=20&crop=false "
          alt=""
          />
      </span>
      <span style={{ "--i": 3 }}>
        <img
          src="https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.hdgoku.wallpaperhd/688411ce-ca6a-11e8-8e77-3fbb267a7f69/640"
          alt=""
          />
      </span>
      <span style={{ "--i": 4 }}>
        <img
          src="https://64.media.tumblr.com/638bf5b0a530e0b31df4519cf62267b3/3989d09e01d754de-27/s1280x1920/74040c3c4dc88586e525c5b080656ae1837464b0.jpg"
          alt=""
          />
      </span>
      <span style={{ "--i": 5 }}>
        <img
          src="https://i.pinimg.com/originals/61/cf/1f/61cf1f6dd5a2f3b504c31bb566d7c10a.jpg"
          alt=""
          />
      </span>
      <span style={{ "--i": 6 }}>
        <img src="https://i.pinimg.com/originals/06/2a/af/062aafe161ce0c66ac8e161d22e128e6.jpg" alt="" />
      </span>
      <span style={{ "--i": 7}}>
        <img
          src="https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F77466-1.jpg&w=640&q=75"
          alt=""
          />
      </span>
    </div>
    </div>
          </div>
  );
}

export default App;
