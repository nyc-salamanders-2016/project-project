class NewPitch extends React.Component {
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
			<form onSubmit={this.handleSubmit} action="/pitches" method="post">
				<input ref="title" type="text" name="title" placeholder="Title" /><br></br><br></br>
				<textarea ref="body" name="body" placeholder="Description"></textarea><br></br>
				<input type="submit" value="Create!"/><br></br>
			</form>
		)
	}

}