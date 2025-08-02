import React from "react";
import User from "./User";


class Users extends React.Component {
    render() {
        if(this.props.users.length > 0)
        return (
           <div>
            <div className="invidual">{this.props.users.length === 1 ? `${this.props.users.length} user` : `${this.props.users.length} users`}</div>
            <div className="users_container">
             {this.props.users.map((user) => (
                 <User Edit={this.props.Edit} Delete={this.props.Delete} key={user.id} user={user}/>
             )
            )}
            </div>
           </div>
        )
        else 
        return (
           <div className="invidual">
            No users
           </div>
        )
    }
}

export default Users;