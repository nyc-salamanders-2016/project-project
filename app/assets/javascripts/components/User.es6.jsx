class User extends React.Component {
	constructor() {
		super()
		this.showRankedPitches = this.showRankedPitches.bind(this)
	}

	showRankedPitches() {
		if (this.props.rankedPitches.length > 0) {
			return (this.props.rankedPitches.map((pitch, i) =>{
					return <Pitch data={pitch} key={i} userRankings={pitch.rankings} admin={this.props.admin}currentUser={this.props.data.id}/>
				})
			)
		} else {
			return(<p>This user has not completed round 2</p>)
		}
	}
	
	render() {
		let rankedPitches = this.props.rankedPitches.map((pitch, i) =>{
				return (<Pitch data={pitch} key={i} userRankings={pitch.rankings} admin={this.props.admin}currentUser={this.props.data.id}/>)
			})
		return(
			<div> 
				<h4> {this.props.data.username}</h4>
				{this.showRankedPitches()}
			</div>
		)
	}
}