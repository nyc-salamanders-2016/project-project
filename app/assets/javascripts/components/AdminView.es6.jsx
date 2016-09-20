class AdminView extends React.Component {

	render() {
		return (
			<div> 
				<p><a href="round1">Round1Results</a></p>
				<p><a href="round2">Round2Results</a></p>
				<TeamsView teams={this.props.teams}/>
				<AllPitches pitches={this.props.pitches} admin={this.props.admin}/>
			</div>
		)
	}
}