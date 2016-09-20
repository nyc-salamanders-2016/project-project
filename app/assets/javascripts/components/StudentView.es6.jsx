class StudentView extends React.Component {

// <pre><code>
// 		{JSON.stringify(this.props, null, 4)}
// </code></pre>	
	render() {
		return (
			<div> 
				<p><a href="round1">Round 1</a></p>
				<p><a href="/rankings/new">Round 2</a></p>
				<AllPitches pitches={this.props.pitches} admin={this.props.admin}/>
			</div>
		)
	}
}