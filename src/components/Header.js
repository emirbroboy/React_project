import React from "react";

class Header extends React.Component {
    render() {
        return (
           <div>
             <header className="header">
                <div className="header_wrap">
                <p className="header_user">
                {this.props.title}
                    </p>
            
            </div>
             </header>
           </div>
        )
    }
}

export default Header;