class TeamsView extends React.Component {
	constructor () {
		super ()
		this.state = {
			pitches: [],
			members: []
		}
		this.createTeam = this.createTeam.bind(this);
		this.componentWillMount = this.componentWillMount.bind(this);
	}
	componentWillMount(){
		var pitch = this.props.ordered;
		var memb = JSON.parse(this.props.users);
		this.setState({
			pitches: pitch,
			members: memb
		})

	}
	createTeam(event) {
		event.preventDefault()
		var member1 = this.refs.one.value
		var member2 = this.refs.two.value
		var member3 = this.refs.three.value
		var member4 = this.refs.four.value
		var member5 = this.refs.five.value
		var pitch_id = this.refs.pitch.value

		$.ajax({
				url: '/memberships',
				method: 'POST',
				data: {
					membership: {
						members: [member1, member2, member3, member4, member5],
						pitch_id: pitch_id
					}
				}
		}).done((response) => {
			newMembers = JSON.parse(response[0])
			this.setState({
				pitches: response[1],
				members: newMembers
			})		
		})
	}

	user(input) { return (
			<select ref={input}>
			<option value=""></option> 
				{
	    	  this.state.members.map((user,i) => {
	          return (
	           <option key={i}  value={user.id}>{user.username}</option>
	          )
	        })
	    	}
				</select>
			)}

	makeTeam() {
		return (
			<div>
				<form onSubmit={this.createTeam.bind(this)} id="pitch-container">
					<select ref="pitch">
					{
		    	  this.state.pitches.map((pitch,i) => {
		          return (
		           <option key={i} value={pitch.id}>{pitch.title}</option>
		          )
		        })
		    	}
		    	</select>
					<p>Member1</p>
					{this.user("one")}
					<p>Member2</p>
					{this.user("two")}
					<p>Member3</p>
					{this.user("three")}
					<p>Member4</p>
					{this.user("four")}
					<p>Member5</p>
					{this.user("five")}
					<br></br>
					<input type="submit" value="Make team"/>
				</form>
			</div>
			)
	}

	render () {

		return (

			<div>
			<NewTeam/>
				<h2>Make a team!</h2>
					{this.makeTeam()}
			</div>
		)
	}
}