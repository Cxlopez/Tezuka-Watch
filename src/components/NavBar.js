/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function NavBar({ animeList }) {
  return (
    <>
      {
        animeList ? (
          animeList.map((anime, index) => {
            return (
              <div>
                <h3>Top anime</h3>
                <nav>
                  <a href='#' target="_blank" rel="noreferrer">
                    {anime.episodes}
                  </a>
                  <a href='#' target="_blank" rel="noreferrer">
                    One Piece
                  </a>
                </nav>
              </div>
            )
          })
        ) : "No Data"
      }
    </>


  )
}

export default NavBar