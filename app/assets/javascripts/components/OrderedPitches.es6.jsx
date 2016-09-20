class OrderedPitches extends React.Component {
	constructor() {
		super()
		this.headerView = this.headerView.bind(this)
	}

	headerView() {
		if (!this.props.admin) {
			return(
				<h2>Rank your choices</h2>
			)
		}
	}
	
	render() {
		let pitches = this.props.pitches.map((pitch, i) =>{
				return <Pitch data={pitch} key={i} rank={true} rankID ={i} admin={this.props.admin} rankings={pitch.rankings}/>
			})
		return (
			<div> 
				{this.headerView}
				<h4>*These pitches are in order from most-voted-on to least-voted-on*</h4>
				{pitches}
			</div>
		)
	}
}