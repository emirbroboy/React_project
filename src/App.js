import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import Form from "./components/Form";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    "id": 1,
                    "firstname": "Alice",
                    "lastname": "Johnson",
                    "bio": "Loves painting and reading mystery novels.",
                    "age": 24,
                    "isHappy": true
                },
                {
                    "id": 2,
                    "firstname": "Ethan",
                    "lastname": "Williams",
                    "bio": "Enjoys hiking in the mountains and building model airplanes.",
                    "age": 29,
                    "isHappy": false
                }
            ]


        }
        this.AddUser = this.AddUser.bind(this)
        this.EditUser = this.EditUser.bind(this)
        this.DeleteUser = this.DeleteUser.bind(this)
    }
    render() {
        return (
            <div>
                <Header title="Users:" />
                <main className="user_main">
                    <Users users={this.state.users || []} Delete={this.DeleteUser} Edit={this.EditUser} />
                </main>
                <aside className="sidebar">
                    <Form AddUser={this.AddUser} />
                </aside>
            </div>
        )
    }
    DeleteUser(id) {
        this.setState({
            users: this.state.users.filter((user) => user.id !== id)
        })


    }

    AddUser(user) {
        const id = this.state.users.length + 1
        this.setState({
            users: [...this.state.users, { id, ...user }]
        })
    }
    EditUser(user) {
        let allUSers = this.state.users
        allUSers[user.id - 1] = user

        this.setState({ users: {} }, () => {
            this.setState({ users: [...allUSers] })
        })

    }
    
    
}

export default App;
