import React, { useEffect, useState } from 'react';
import { Autoplay, Pagination, Navigation,Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Speaker } from '../universal/Speaker'
import '../../assets/css/css-montagem/BoxMontagem.css';
import ImgFixaMontagem from '../../assets/img/img-fixa-montagem.png';
import ImgMontagemA from '../../assets/img/img-furadeira-A.png';
import ImgMontagemB from '../../assets/img/img-furadeira-B.png';
import ImgMontagemC from '../../assets/img/img-furadeira-C.png';
import ImgMontagemD from '../../assets/img/img-furadeira-D.png';
import ImgMontagemE from '../../assets/img/img-furadeira-E.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ButtonMontagem } from './ButtonMontagem';


export const BoxMontagem = () => {

    const [imagemMaximizada, setImagemMaximizada] = useState(ImgFixaMontagem)
    const { innerWidth: width, innerHeight: height } = window;
    const [classd,setClassd] = useState('direction-div')
    const [slip, setSlip] = useState(3)
    const [swip, setSwip] = useState(1)
    console.log(innerHeight)


    useEffect(() => {
        if (innerHeight < 800){
            setSlip(2)
        }
        if (innerHeight == 820 ){
            setSwip(3)
        }
        if(innerWidth == 768){
            setClassd('direction-div-iped')
            setSwip(3)
        }
        if (innerWidth == 600){
            setSwip(1)
        }
    })

    return (

        <div className="BoxMontagem-div" >
            <div className='montagem-components'>
                <div className='img-principal-div'>
                    <ButtonMontagem/>
                </div>
                <div className='img-fixa-montagem-div'>
                    <img className='img-fixa-montagem' src={imagemMaximizada} />
                </div>
                <div className={classd}>
                    <div className='box-imgs-montagem-div'>
                        <div className='div-imgs-montagem' >
                            <div className='swiper-web'>
                                <Swiper
                            
                                    direction={'vertical'}
                                    spaceBetween={15}
                                    slidesPerView={slip}
                                    loop={false}
                                    loopFillGroupWithBlank={true}
                                    navigation={true}
                                    modules={[Autoplay,Pagination, Navigation, A11y]}
                                    className="swiper-montagem"
                                   
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}

                                >
                                    <SwiperSlide><span className='montagem-span'><img className='imgs-montagem' src={ImgFixaMontagem} onClick={() => setImagemMaximizada(ImgFixaMontagem)} /></span></SwiperSlide>
                                    <SwiperSlide><span className='montagem-span'><img className='imgs-montagem' src={ImgMontagemA} onClick={() => setImagemMaximizada(ImgMontagemA)} /></span></SwiperSlide>
                                    <SwiperSlide><span className='montagem-span'><img className='imgs-montagem' src={ImgMontagemB} onClick={() => setImagemMaximizada(ImgMontagemB)} /></span></SwiperSlide>
                                    <SwiperSlide><span className='montagem-span'><img className='imgs-montagem' src={ImgMontagemC} onClick={() => setImagemMaximizada(ImgMontagemC)} /></span></SwiperSlide>
                                    <SwiperSlide><span className='montagem-span'><img className='imgs-montagem' src={ImgMontagemD} onClick={() => setImagemMaximizada(ImgMontagemD)} /></span></SwiperSlide>
                                    <SwiperSlide><span className='montagem-span'><img className='imgs-montagem' src={ImgMontagemE} onClick={() => setImagemMaximizada(ImgMontagemE)} /></span></SwiperSlide>
                                </Swiper>
                            </div>


                            <div className='swiper-mobile'>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={0}
                                    slidesPerView={swip}
                                    navigation={true}

                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >
                                    {/* <SwiperSlide><img className='imgs-montagem' src={ImgFixaMontagem} onClick={() => setImagemMaximizada(ImgFixaMontagem)} /></SwiperSlide> */}
                                    <SwiperSlide><img className='imgs-montagem' src={ImgFixaMontagem} onClick={() => setImagemMaximizada(ImgFixaMontagem)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemA} onClick={() => setImagemMaximizada(ImgMontagemA)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemB} onClick={() => setImagemMaximizada(ImgMontagemB)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemC} onClick={() => setImagemMaximizada(ImgMontagemC)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemD} onClick={() => setImagemMaximizada(ImgMontagemD)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemE} onClick={() => setImagemMaximizada(ImgMontagemE)} /></SwiperSlide>
                                </Swiper>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

