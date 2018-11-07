import React from 'react';

class QPView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        
    }
    
    render(){
        const previewStyle = {
          height: 300,
          width: 300,
        }
     
        return(
          <div>
            <center>
                <button onClick={this.props.logout}>Logout</button>
            </center>
            
            <center><h1>Logged in as LSQR2</h1></center>
          </div>
        )
    }
}

export default QPView;