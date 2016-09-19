class Pitch extends React.Component {
	render() {
		return(
			
			<div> 
				<p> {this.props.data.title} </p>
				<p> {this.props.data.body} </p>
			</div>
		)
	}
}