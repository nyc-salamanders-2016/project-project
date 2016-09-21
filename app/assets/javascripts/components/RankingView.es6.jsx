class RankingView extends React.Component {
	constructor() {
		super()
		this.showUserContainer = this.showUserContainer.bind(this)
	}

	showUserContainer() {
		if (this.props.admin) {
			return(<UserContainer admin={this.props.admin} users={this.props.users} />)
		}
	}

// <pre><code>
// 		{JSON.stringify(this.props.users, null, 4)}
// </code></pre>	
	render() {
		return (
			<div> 
				<OrderedPitches pitches={this.props.pitches} admin={this.props.admin}/>
				{this.showUserContainer()}
			</div>
		)
	}
}