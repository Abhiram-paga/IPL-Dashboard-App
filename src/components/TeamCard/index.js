import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-list-item-container">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name-head">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
