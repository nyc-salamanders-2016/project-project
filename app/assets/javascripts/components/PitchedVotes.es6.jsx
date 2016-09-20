class PitchedVotes extends React.Component {
	constructor () {
		super ()
		this.state = {
			deleted: false
		}
		this.deletePitch = this.deletePitch.bind(this);
	}

	deletePitch(event) {
		event.preventDefault();
		var button = this.refs.deleteButton
		var pitch_id = this.props.data.id;
		$.ajax({
			url: `/pitches/${pitch_id}`,
			method: 'DELETE',
		}).done((response) => {
			this.setState({
				deleted: response
			})
		})
	}

	displayPitch(){
		if (this.state.deleted===false) {
			return (<div id="pitch-container"> 
				<h3> {this.props.data.title}</h3>
				<p> Pitch ID: {this.props.data.id}</p>
				<p>Description: {this.props.data.body} </p>
				<p>Pitched by-{this.props.data.creator.username}</p>
				<p>Total Votes-{this.props.votesCount}</p>
				<form onSubmit={this.deletePitch.bind(this)}>
    			<input ref="deleteButton" type="submit" value="delete" />
    		</form>
			</div>)
		}
	}

  render () {
  	let data = this.props.data
    return(
    	<div>
	    	{this.displayPitch()}
    	</div>
    )
  }
}

