class NewTeam extends React.Component {
	constructor(){
    super()
    this.state = {
     	pitches: [],
    }
  }

	componentDidMount(){
	    link= "/memberships.json"
	    $.ajax({
	      method: 'get',
	      url: link
	    }).done(function(response){
	    this.setState({
        pitches: response
      })}.bind(this))
	  }
	render(){
    return (
      <div>
      <h2>Teams!</h2>
      {
	    	  this.state.pitches.map((pitch,i) => {
	          return (
	          	<div key={i}>
	           <p>{pitch.title}</p>
	           <p>members go here</p>
	           </div>
	          )
	        })
	    	}
      </div>
      )
  }
	  
}