class VotingView extends React.Component {
	voteCount(pitchID)  {
  	let votes = this.props.votes
  	let totalVotes = 0
  		for (i = 0; i < votes.length; i++) {
  			if (pitchID === votes[i].pitch_id) {
  				totalVotes++
  			}
  		}
  		return totalVotes
  	}

  render () {
  	let ordered = this.props.ordered
    return(
    	<div>
    		{ordered.map((pitch, i) => {
					return <PitchedVotes votesCount = {this.voteCount(pitch.id)} data={pitch} key={i} />
				})}
    	</div>
    )
  }
}

