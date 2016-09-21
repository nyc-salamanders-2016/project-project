class Pitch extends React.Component {
	constructor() {
		super()

		this.showForm = this.showForm.bind(this)
		this.calculateScoreMethod = this.calculateScoreMethod.bind(this)
		this.showRankings = this.showRankings.bind(this)
		this.showDetails = this.showDetails.bind(this)
		this.showUserRankings = this.showUserRankings.bind(this)
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
			return (<p>Score: {116 - this.calculateScoreMethod()}</p>)
		}
		else {
			null
		}
	}

	showUserRankings() {
		if (this.props.userRankings && this.props.admin) {
			return (this.props.userRankings.map((ranking, i) =>{
				if (ranking.user_id === this.props.data.id) {
					var rankings = ranking.rank

				}
			}))
		}
	}

		showDetails() {
		if (this.props.data.creator && !(this.props.data.id === "") && !(this.props.data.body.length === "")){
			return (
				<div>
				<p>Pitched by-{this.props.data.creator.username}</p>
				<p>Pitch ID: {this.props.data.id}</p>
				<p>Description: {this.props.data.body} </p>
				</div>
			)
		}
		else {
			null
		}
	}

	render() {

		return(
			
			<div id="pitch-container"> 
				<h3> {this.props.data.title}</h3>
				{this.showDetails()}

				{this.showForm()}
				{this.showRankings()}
				{this.showUserRankings()}
			</div>
		)
	}
}