class Voting extends React.Component {
  render () {
  	let pitches = this.props.pitches
    return(
    	<div>
	    	{
	    	 pitches.map((pitch,i) => {
	         return (
	           <PitchVote key={i} data={pitch} />
	         )
	       })
	    	}
    	</div>
    )
  }
}

