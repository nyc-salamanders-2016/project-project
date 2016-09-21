class UserContainer extends React.Component {

	render() {
		let users = this.props.users.map((user, i) =>{
				return <User data={user} key={i} rankedPitches={user.ranked_pitches} admin={this.props.admin}/>
			})
		return (
			<div> 
			<h3>All users</h3>
				{users}
			</div>
		)
	}
}