import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    venue,
    date,
  } = matchDetails
  return (
    <div className="recent-match-container">
      <div className="result-container">
        <h1 className="competingTeam-para">{competingTeam}</h1>
        <p className="date-para">{date}</p>
        <p className="venue-para">{venue}</p>
        <p className="result-para">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competingTeam-logo"
      />
      <div className="firstInnings-secondInnings-container">
        <p className="headings">First Innings</p>
        <p className="values">{firstInnings}</p>
        <p className="headings">Second Innings</p>
        <p className="values">{secondInnings}</p>
        <p className="headings">Man Of The Match</p>
        <p className="values">{manOfTheMatch}</p>
        <p className="headings">Umpires</p>
        <p className="values">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
