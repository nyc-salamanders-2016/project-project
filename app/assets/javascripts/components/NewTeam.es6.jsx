class NewTeam extends React.Component {

	render(){
		let data = this.props.updateTeam
    return (
      <div>
      <h2>Teams!</h2>
      {
	    	data.map((pitch,i) => {
	        return (
	          <div id="pitch-container" key={i}>
	          <p><strong>{pitch.title}</strong></p>
	        	{
	           	pitch.members.map((member,i) => {
	           		return (
	           			<p key={i}>{member.username}</p>
	              )
	           	})
	          }
	          </div>
	        )
	      })
	    }
      </div>
    )
  }
}
	  
