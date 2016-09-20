class Voting extends React.Component {
  findVote(pitchID)  {
  	let votes = JSON.parse(this.props.votes)
  		for (i = 0; i < votes.length; i++) {
  			if (pitchID === votes[i].pitch_id) {
  				return "true"
  			}
  		}
  		return "false"
  	}


  render () {
  	let pitches = this.props.pitches
  	let votes = JSON.parse(this.props.votes)
  	
  	
    return(
    	<div>
	    	{
	    	  pitches.map((pitch,i) => {
	          return (
	            <PitchVote votes= {this.findVote(pitch.id)} key={i} data={pitch} />
	          )
	        })
	    	}
    	</div>
    )
  }
}

