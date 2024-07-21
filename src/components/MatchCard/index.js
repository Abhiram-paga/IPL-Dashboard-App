import './index.css'

const MatchCard = props => {
  const {eachMatchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} =
    eachMatchDetails
  let matchStatusClassName
  if (matchStatus === 'Lost') {
    matchStatusClassName = 'lost'
  } else {
    matchStatusClassName = 'win '
  }
  return (
    <li className="match-card-list-item-container">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competingTeamLogo-image"
      />
      <p className="competing-Team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
