class Register extends React.Component {
	constructor() {
        super()
        this.state = {
        	errors: []
        }
        this.createUser = this.createUser.bind(this);
    }
	
	createUser(event) {
		event.preventDefault();
		var username = this.refs.username.value;
		var email = this.refs.email.value;
		var password = this.refs.password.value;
		if (this.refs.student.checked) {
            var admin = "false";
        } else if(this.refs.instructor.checked) {
            var admin = "true";
        }
		$.ajax({
			url: '/users',
			method: 'POST',
			data: {
				user: {
					username: username,
					email: email,
					password: password,
					admin: admin
				}
			}
		}).done((response) => {
			this.setState({
				errors: response
			})
		});
	}

  render () {
    return (
    	<div>
    	{
    		this.state.errors.map((error, index) => {
    			return <RegisterErrors key={index} data={error}/>
    		})
    	}
    		<h2>Register</h2>
    		<form onSubmit={this.createUser.bind(this)}>
        	<input ref="username" type="text" placeholder="username" name= "user[username]" /><br></br>
        	<input ref="email" type="email" placeholder="email" name="user[email]" /><br></br>
        	<input ref="password" type="password" placeholder="password" name="user[password]" />
          <br></br>
         	<input ref="student" type="checkbox" name="user[admin]" value="false" />Student<br></br>
         	<input ref="instructor" type="checkbox" name="user[admin]" value="true" />Instructor<br></br>
          <input type="submit" value="Register"/>
    		</form>
    	</div>
    )
  }
}

