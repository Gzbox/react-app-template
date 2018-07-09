import React from 'react'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
let players = [
  { number: 1, name: "Ben Blocker", position: "G" },
  { number: 2, name: "Dave Defender", position: "D" },
  { number: 3, name: "Sam Sweeper", position: "D" },
  { number: 4, name: "Matt Midfielder", position: "M" },
  { number: 5, name: "William Winger", position: "M" },
  { number: 6, name: "Fillipe Forward", position: "F" }
]

const FullRoster = () => (
  <div>
    <ul>
      {
        players.map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster
