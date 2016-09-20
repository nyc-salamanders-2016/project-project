class Pitch extends React.Component {
	constructor() {
		super()

		this.showForm = this.showForm.bind(this)
	}

	showForm() {
		debugger
		if (this.props.rank) {
			return (<NewRank pitch={this.props.data}/>)
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
			</div>
		)
	}
}