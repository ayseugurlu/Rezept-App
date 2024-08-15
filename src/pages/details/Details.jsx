import React from 'react'
import { DetailsContainer, NutrUl } from './style'

const Details = () => {
  return (
    <DetailsContainer>
    <div>
        <h1>Yemek Adi</h1>

        <img src="https://cdn.pixabay.com/photo/2016/03/26/22/58/food-1281742_1280.jpg" alt="" />
        <p>
        <h3>icindekiler</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vitae!
        </p>

        <ul>
        <h3>Nutrients</h3>
          <li>degerler</li>
          <li>degerler</li>
          <li>degerler</li>
          <li>degerler</li>
          <li>degerler</li>
        </ul>

</div>
    </DetailsContainer>
  )
}

export default Details