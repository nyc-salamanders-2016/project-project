class User extends React.Component {
	
	render() {
		let rankedPitches = this.props.rankedPitches.map((pitch, i) =>{
				return <Pitch data={pitch} key={i} userRankings={pitch.rankings}/>
			})
		return(
			<div> 
				<h4> {this.props.data.username}</h4>
				{rankedPitches}
			</div>
		)
	}
}