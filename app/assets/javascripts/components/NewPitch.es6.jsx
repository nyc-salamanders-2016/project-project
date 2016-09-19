class NewPitch extends React.Component {

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