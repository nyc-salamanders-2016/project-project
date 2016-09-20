class Pitch extends React.Component {
	render() {
		return(
			
			<div id="pitch-container"> 
				<h3> {this.props.data.title}</h3>
				<p> Pitch ID: {this.props.data.id}</p>
				<p>Description: {this.props.data.body} </p>
				<p>Pitched by-{this.props.data.user.username}</p>
			</div>
		)
	}
}