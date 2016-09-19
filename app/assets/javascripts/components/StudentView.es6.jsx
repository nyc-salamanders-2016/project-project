class StudentView extends React.Component {

// <pre><code>
// 		{JSON.stringify(this.props, null, 4)}
// </code></pre>	
	render() {
		return (
			<div> 
				
				<p><a href="round1">Round1</a></p>
				<p><a href="round2">Round2</a></p>
				<AllPitches pitches={this.props.pitches} admin={this.props.admin}/>
			</div>
		)
	}
}