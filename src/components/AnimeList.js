import React from 'react'
import "../styles/styles.css"

export default function AnimeList({ animeList }) {
  return (
    <>
      {
        animeList ? (
          animeList.map((anime, index) => {
            return (
              <div className='card'>
                <img src={anime.images.jpg.large_image_url} alt="animeImg" />
                <div className='anime-info'>
                  <h4>{anime.title}</h4>
                </div>
              </div>
            )
          })
        ) : "Not Found"
    }

    </>
  )
}
