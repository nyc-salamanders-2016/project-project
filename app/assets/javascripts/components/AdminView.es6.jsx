class AdminView extends React.Component {

	render() {
		return (

			<div>
				<h2>This is the admin view</h2> 
				<p><a href="/votes">Round 1 Results</a></p>
				<p><a href="/rankings">Round 2 Results</a></p>
				<p><a href="/memberships/new">Make The Teams</a></p>

				<AllPitches pitches={this.props.pitches} admin={this.props.admin}/>
			</div>
		)
	}
}