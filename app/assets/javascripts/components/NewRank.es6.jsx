class NewRank extends React.Component {
	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		$.ajax({
			url: event.target.action,
			method: event.target.method,
			data: $(event.target).serialize()
		}).done((response) => {
			this.props.onUpdate(response)
			this.refs.title.value = ""
			this.refs.body.value = ""
		})
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit} action="/rankings" method="post">
			  <input type="hidden" name="pitch_id" value={this.props.pitch.id} />
			  <select name="rank">
			    <option value="1">1</option>
			    <option value="2">2</option>
			    <option value="3">3</option>
			    <option value="4">4</option>
			    <option value="5">5</option>
			    <option value="6">6</option>
			    <option value="7">7</option>
			  </select>
			  <input type="submit" value="Submit" />
			</form>
		)
	}

}