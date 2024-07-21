import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamDetails: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }
    this.setState({isLoading: false, teamDetails: updatedData})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let grdientClassName
    if (id === 'RCB') {
      grdientClassName = 'rcb'
    } else if (id === 'KKR') {
      grdientClassName = 'kkr'
    } else if (id === 'KXP') {
      grdientClassName = 'kxp'
    } else if (id === 'CSK') {
      grdientClassName = 'csk'
    } else if (id === 'SH') {
      grdientClassName = 'sh'
    } else if (id === 'DC') {
      grdientClassName = 'dc'
    } else if (id === 'RR') {
      grdientClassName = 'rr'
    } else if (id === 'MI') {
      grdientClassName = 'mi'
    }
    const {isLoading, teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails

    return (
      <div className={`team-matches-whole-container ${grdientClassName}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="img-recent-matches-con">
            <img src={teamBannerUrl} alt="team banner" />
            <p className="latest-match-para">Latest Matches</p>
            <LatestMatch matchDetails={latestMatchDetails} />
            <ul className="recent-matches-list-container">
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
