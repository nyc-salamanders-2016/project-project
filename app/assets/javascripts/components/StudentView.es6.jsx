class StudentView extends React.Component {

	render() {
		return (
			<div> 
				<pre><code>
					{JSON.stringify(this.props, null, 4)}
				</code></pre>	
				<p><a href="round1">Round1</a></p>
				<p><a href="round2">Round2</a></p>
				<AllPitches pitches={this.props.pitches}/>
			</div>
		)
	}
}