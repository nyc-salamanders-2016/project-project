class RankingView extends React.Component {

// <pre><code>
// 		{JSON.stringify(this.props.users, null, 4)}
// </code></pre>	
	render() {
		return (
			<div> 
				<OrderedPitches pitches={this.props.pitches} admin={this.props.admin}/>
				<UserContainer users={this.props.users} />
			</div>
		)
	}
}