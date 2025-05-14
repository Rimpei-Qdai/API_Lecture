import React, { useState, useRef, useLayoutEffect  } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade, EffectCards, EffectCube, EffectFlip } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import './Slider.css'

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])

const GenshinSlider = () => {

  const elementRef = useRef(null);

    const slideSpeed = 1500
    const slideDelay = 2000
    const [ activeSlide, setActiveSlide ] = useState("")
    const [ activeSlide2, setActiveSlide2  ] = useState("")


  return (
    <>
        <div className="character-slider genshin">
            <Swiper
                  autoplay={{
                    delay:slideDelay
                  }}
                  speed={slideSpeed}
                  loop={true}
                  slidesPerView={3}
                  className='swiper-container genshin'
                  centeredSlides={true}
                  onSlideChangeTransitionStart={(el) => {
                    let slides = document.querySelectorAll(".swiper-slide.genshin")
                    slides.forEach((slide) => {
                        slide.style.transform = 'scale(1)'
                    })
                    setActiveSlide(document.querySelector(".swiper-slide-active.genshin"))
                    console.log(activeSlide)
                  }}
                  onSlideChangeTransitionEnd={(el) => {
                    activeSlide.style.transform='scale(1.2)'
                  }}
                  
                  >
                <SwiperSlide className='swiper-slider genshin'>
                    <img className='swiper-img genshin' src="src/assets/img/アルレッキーノ.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slider genshin'>
                    <img className='swiper-img genshin' src="src/assets/img/クロリンデ.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slider genshin'>
                    <img className='swiper-img genshin' src="src/assets/img/雷電.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slider genshin'>
                    <img className='swiper-img genshin' src="src/assets/img/フリーナ.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slider genshin'>
                    <img className='swiper-img genshin' src="src/assets/img/キャンディス.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slider genshin'>
                    <img className='swiper-img genshin' src="src/assets/img/なひーだ.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slider genshin'>
                    <img className='swiper-img genshin' src="src/assets/img/マーヴィカ.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>

        <div className="character-slider2">
          <Swiper
          autoplay={{
            delay:slideDelay
          }}
          speed={slideSpeed}
          loop={true}
          slidesPerView={3}
          className='swiper-container genshin'
          centeredSlides={true}
          onSlideChangeTransitionStart={ function(){
            setActiveSlide2( document.querySelector(".character-slider2 .swiper-slide-active") )
            console.log(activeSlide2)
          
            console.log("始まったよ！")
          } }
          onSlideChangeTransitionEnd={ function(){
            console.log("終わったよ！")
            activeSlide2.style.transform = "scale(1.2)"
          } }
          >
            <SwiperSlide>
              <img src="src/assets/img/コクセイ.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/img/コクセイ.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/img/コクセイ.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="src/assets/img/コクセイ.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default GenshinSlider