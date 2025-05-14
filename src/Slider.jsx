import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade, EffectCards, EffectCube, EffectFlip } from 'swiper/modules'
import SwiperCore from 'swiper'
import 'swiper/css'
import './Slider.css'

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])


const Slider = ({ pokemons, detailPokemonData }) => {
  const slideSpeed = 1500
  const slideDelay = 2000
  const [ activeSlide, setActiveSlide ] = useState('')

  useEffect(() => {
    setActiveSlide(document.querySelector('.swiper-slide-active.above'))
    // console.log(activeSlide)
    document.querySelector('.swiper-slide-active.above').style.transform='scale(1)'
  //  activeSlide.style.transform='scale(1)'
    let array = [ 1, 2, 3, 4, 5 ]
    array.map(function (a) {
      console.log(a)
      console.log("こんにちは")
    })

  }, [ ])

  return (
    <>
    { 
      
    }
    <div className='character-slider'>
        <Swiper
        autoplay={{
          delay:slideDelay
        }}
        speed={slideSpeed}
        loop={true}
        slidesPerView={3}
        className='swiper-container'
        centeredSlides={true}
        
        >
          {
            pokemons.map((pokemon, i) => {
              return <SwiperSlide key={i} className='swiper-slider' >
                <img className='swiper-img' src={pokemon.sprites.back_default} />
              </SwiperSlide>
            })

          }
        </Swiper>

        <Swiper
        autoplay={{
          delay:slideDelay
        }}
        speed={slideSpeed}
        loop={ true }
        slidesPerView={1}
        className='swiper-above'
        onSlideChangeTransitionStart={(el) => {
          
          setActiveSlide(document.querySelector('.swiper-slide-active.above'))
          console.log(detailPokemonData[el.activeIndex].color.name)
          const swiperAbove = document.querySelector('.swiper-above')

          let color = detailPokemonData[el.activeIndex].color.name
          swiperAbove.style=`border: ${color} solid 4px;`
          // swiperAbove.style=`background: ${color};`
        }}
        onSlideChangeTransitionEnd={(el) => {
          activeSlide.style.transform='scale(1)'

        }}
        >
          {
            pokemons.map((pokemon, i) => {
              return <SwiperSlide key={i} className='swiper-slider above' >
                <img className='swiper-img above' src={pokemon.sprites.front_default} />
              </SwiperSlide>
            })
          }
        </Swiper>
        
    </div>

    </>
  )
}

export default Slider