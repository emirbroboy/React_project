import React from "react";


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.userAdd = {}
        this.state = {
            firstname: " ",
            lastname: " ",
            bio: " ",
            age: 0,
            isHappy: false

        }
    }
    render() {
        return (
           <form ref={(form)=> this.newForm = form}>
            <div className="formwrap">
                <input
                    type="text"
                    id="firstname"
                    required
                    className="floating_input"
                    placeholder=" "
                    onChange={(event)  => this.setState({firstname: event.target.value})}
                />
                <label htmlFor="firstname" className="floating_label">Firstname</label>
                </div>
                <div className="formwrap">
                    <input
                        type="text"
                        id="lastname"
                        required
                        className="floating_input"
                        placeholder=" "
                        onChange={(event) => this.setState({ lastname: event.target.value })}
                    />
                    <label htmlFor="lastname" className="floating_label">Lastname</label>
                </div>
                <div className="formwrap">
                    <textarea type="text"
                     id="bio"
                     required
                     className="floating_input"
                     placeholder=" "
                        onChange={(event) => this.setState({ bio: event.target.value })}></textarea> 
                    <label htmlFor="bio" className="floating_label">Biography</label>
                </div>
                <div className="formwrap">
                    <input
                        type="text"
                        id="age"
                        required
                        className="floating_input"
                        placeholder=" "
                        onChange={(event) => this.setState({ age: event.target.value })}
                    />
                    <label htmlFor="age" className="floating_label">Age</label>
                </div>
                <div className="happy_wrap">
            <label className="form_happy" htmlFor="isHappy">Happy?</label>
                <input className="form_happy check" type="checkbox" id="isHappy" onChange={(event) => this.setState({ isHappy: event.target.checked })} />
                </div>
            <button className="form_element form_btn" type="button" onClick={() => {
                    
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                    }

            this.props.AddUser(
                this.userAdd
                 )
                    this.newForm.reset()
                    this.setState({
                        firstname: " ",
                        lastname: " ",
                        bio: " ",
                        age: 0,
                        isHappy: false
                    })
                  
}
                }>Submit</button>
           </form>
        )
    }
}

export default Form;