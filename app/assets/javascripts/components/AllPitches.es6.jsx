class AllPitches extends React.Component {
	constructor() {
		super()
		this.state = { pitches: [] }

		this.newPitch = this.newPitch.bind(this)
		this.showForm = this.showForm.bind(this)
	}

	componentDidMount() {
		this.setState({pitches: this.props.pitches})
	}	

	newPitch(response) {
		newPitchVar = response.pitch 
		this.setState({ pitches: this.state.pitches.concat(newPitchVar) })
	}

	showForm() {
		if (!this.props.admin) {
			return (<NewPitch onUpdate={this.newPitch}/>)
		}
		else {
			null
		}
	}

	render() {
		let pitches = this.state.pitches.map((pitch, i) =>{
				return <Pitch data={pitch} key={i}/>
			})
		return (
			<div> 
			<h3>All pitches</h3>
				{this.showForm()}
				{pitches}
			</div>
		)
	}
}