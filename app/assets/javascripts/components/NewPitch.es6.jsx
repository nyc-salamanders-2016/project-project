class NewPitch extends React.Component {
	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		$.ajax({
			url:
		})
	}

	render() {
		return(
			<form action="/pitches" method="post">
				<input type="text" name="title" />
				<textarea name="body"></textarea>
				<input type="submit" value="Create!"/>
			</form>
		)
	}

}