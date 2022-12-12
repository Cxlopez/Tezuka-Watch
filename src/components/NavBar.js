/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function NavBar(props) {
  return (
    <div>
      <h3>Top anime</h3>
      <nav>
        <a href='#' target="_blank" rel="noreferrer">
          {props.animeList}
        </a>
        <a href='#' target="_blank" rel="noreferrer">
          One Piece
        </a>
      </nav>
    </div>
  )
}

export default NavBar