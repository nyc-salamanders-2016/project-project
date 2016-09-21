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
			return (<p>Thank you for voting!</p>)
		} else if (this.props.votes === "true") {
			return (<p>Thank you for voting!</p>)
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
  	var votes = this.props.votes;
    return(
    	<div id="pitch-container">
    		<p>{pitches.title}</p>
    		<p>{pitches.body}</p>
    		<p>{pitches.creator.username}</p>
    		{this.displayButton()}
    	</div>
    )
  }
}

