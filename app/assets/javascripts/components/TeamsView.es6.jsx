class TeamsView extends React.Component {
	constructor() {
		super()
		this.state = { teams: [] }

		this.newTeam = this.newTeam.bind(this)
	}

	componentDidMount() {
		this.setState({teams: this.props.teams})
	}	

	newTeam(response) {
		newTeamVar = response.team 
		this.setState({ teams: this.state.teams.concat(newTeamVar) })
	}

	render() {
		let teams = this.state.teams.map((team, i) =>{
				return <Team data={team} key={i}/>
			})
		return (
			<div> 
				<NewTeam onUpdate={this.newTeam}/>
				{teams}
			</div>
		)
	}
}