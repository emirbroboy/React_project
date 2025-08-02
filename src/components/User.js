import React from "react";
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import Form from "./Form";


class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Edit: false,
            Deleting: false

        }
    }
    user = this.props.user
    handleDelete = () => {
        this.setState({ Deleting: true})
        setTimeout(() => {
        this.props.Delete(this.user.id)}, 500)
    }
    render() {
        return (
           
           <div>
                <div className={`invidual ${this.state.Deleting ? "deleting" : ""}`}>
                    <VscTrash onClick={this.handleDelete} className="delete_icon" />
                    <VscEdit onClick={() => {
                        this.setState(
                            {Edit: !this.state.Edit}
                        )
                    }} className="edit_icon" />
                   

                    <h2>{this.user.firstname} {this.user.lastname}</h2>
                    <p>bio : {this.user.bio}</p>
                    <b>{this.user.isHappy ? "Happy" : "Sad"}</b>
                    <div className={`edit_form ${this.state.Edit ? "open" : "closed"}`}>
                        <Form user={this.user} AddUser={this.props.Edit} />
                </div>
                </div>
           </div>
        )
    }
}

export default User;