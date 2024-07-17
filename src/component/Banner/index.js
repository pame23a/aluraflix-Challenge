import { useAPI } from 'Context/Api';
import styled from '@emotion/styled';
import Button from '../Button';
import './Banner.css'
import ReactPlayer from 'react-player';

const BannerContainer = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;

  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    height: 100%;
    gap: 4rem;
    padding-top: 5rem;
  }
`

const Banner = () => {
  const { banner } = useAPI()

  return (
    <BannerContainer img={banner.img} >
      <Overlay className='container'>
        <div className='bannerInfo'>
          <Button texto={banner.categoria} tipo='bannerBtn' />
          <h1>Curso React: Conexión con API a través de React</h1>
          <p>'En este vídeo aprenderás todo sobre la función JavaScript Fetch API. Con ella podrás realizar solicitudes asíncronas a las API de forma nativa, sin bibliotecas jQuery o Axios. Hacer que su proyecto tenga mucho más rendimiento, ya que utiliza un recurso lingüístico.'</p>
        </div>

        <div className='player'>
          <ReactPlayer url={banner.url} controls />
        </div>
      </Overlay>
    </BannerContainer>
  )
}

export default Banner;