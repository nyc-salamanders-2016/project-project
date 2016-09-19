class AllPitches extends React.Component {
	constructor() {
		super()
		this.state = { pitches: [] }

		this.newPitch = this.newPitch.bind(this)
	}

	componentDidMount() {
		this.setState({pitches: this.props.pitches})
	}	

	newPitch(response) {
		newPitchVar = response.pitch 
		this.setState({ pitches: this.state.pitches.concat(newPitchVar) })
	}

	render() {
		let pitches = this.state.pitches.map((pitch, i) =>{
				return <Pitch data={pitch} key={i}/>
			})
		return (
			<div> 
				<NewPitch onUpdate={this.newPitch}/>
				{pitches}
			</div>
		)
	}
}