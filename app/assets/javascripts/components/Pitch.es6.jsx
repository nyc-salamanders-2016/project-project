class Pitch extends React.Component {
	constructor() {
		super()

		this.showForm = this.showForm.bind(this)
		this.calculateScoreMethod = this.calculateScoreMethod.bind(this)
		this.showRankings = this.showRankings.bind(this)
	}

	showForm() {
		if (this.props.rank && !this.props.admin){
			return (<NewRank pitch={this.props.data} rankID={this.props.rankID}/>)
		}
		else {
			null
		}
	}

	calculateScoreMethod() {
		return (this.props.rankings.reduce((sum, ranking) => {
			return (sum + ranking.rank);
		}, 0))
	}

	showRankings() {
		if (this.props.rankings && this.props.admin){
			return (<p>Score: {this.calculateScoreMethod()}</p>)
		}
		else {
			null
		}
	}

	render() {
		return(
			
			<div id="pitch-container"> 
				<h3> {this.props.data.title}</h3>
				<p> Pitch ID: {this.props.data.id}</p>
				<p>Description: {this.props.data.body} </p>
				<p>Pitched by-{this.props.data.creator.username}</p>
				{this.showForm()}
				{this.showRankings()}
			</div>
		)
	}
}