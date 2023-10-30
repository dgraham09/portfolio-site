import { useEffect } from "react";

import Glide from '@glidejs/glide'


const CarouselContainer = (props) => {

  useEffect(() => {
    
  let slider = new Glide('.glide', {
    perView: 1,
})

  slider.mount()
  }, [])
  

  return (
    <div class="glide">
      <div data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<<">Start</button>
      </div>
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
        {props.project.Images.map((image) => {
          return (
            <li class="glide__slide">
              <img src={image} alt="image1">

              </img>

            </li>
          )})}
        </ul>
        </div>
        <div data-glide-el="controls">
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">>">End</button>
        </div>
    </div>
  )
}
           
  export default CarouselContainer