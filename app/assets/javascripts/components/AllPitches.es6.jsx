class AllPitches extends React.Component {

	render() {
		let pitches = this.props.pitches.map((pitch, i) =>{
				return <Pitch data={pitch} key={i}/>
			})
		return (
			<div> 
				<NewPitch />
				{pitches}
			</div>
		)
	}
}