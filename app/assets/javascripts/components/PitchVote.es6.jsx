class PitchVote extends React.Component {
	constructor () {
		super ()
		this.state = {
			voted: false
		}
		this.createVote = this.createVote.bind(this);
	}

	createVote(event) {
		event.preventDefault();
		var button = this.refs.votebutton
		var pitch_id = this.props.data.id;
		$.ajax({
			url: '/votes',
			method: 'POST',
			data:  {
				vote: {
					pitch_id: pitch_id
				}
			}
		}).done((response) => {
			this.setState({
				voted: response
			})
		})
	}
	displayButton(){
		if (this.state.voted) {
			return (<p>You voted for this pitch already!</p>)
		} else {
			return(
				<form onSubmit={this.createVote.bind(this)}>
    			<input ref="votebutton" type="submit" value="vote" />
    		</form>
    		)
		}
	}



  render () {
  	var pitches = this.props.data;
    return(
    	<div>
    		<p>{pitches.title}</p>
    		<p>{pitches.body}</p>
    		<p>{pitches.creator.username}</p>
    		{this.displayButton()}
    		<br></br>
    	</div>
    )
  }
}

