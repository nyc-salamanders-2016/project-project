class RegisterErrors extends React.Component {
  render () {
  	var error = this.props.data;
    return (
    	<div>
    	<p>{error}</p>
    	</div>
    	)
  }
}

