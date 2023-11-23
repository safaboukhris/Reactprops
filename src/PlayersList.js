import React from 'react'
import Player from './Player'
import players from './players'

const PlayersList = () => {

  {/*settig attribute className(container and row) for the grid card */}
  return (
    <div  className="container">
      <div className="row">
      {/*mapping through the players and pass in the props to the Player component */}
        {players.map((player, index) => (
        <Player key={index} {...player} />
        ))}
      </div>
    </div>
    )
}

export default PlayersList
