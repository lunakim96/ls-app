import QrReader from 'react-qr-scanner';
import React from 'react';

class QPScan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 1000,
            scanResult: 'scanner ready',
        }
        this.handleScan = this.handleScan.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    handleScan(data) {
        if(data!== null) {
            this.setState({
                scanResult: data
            })
        } else {
            this.setState({
                scanResult: 'next scan'
            })
        }
        
    }
    handleError(err) {
        console.error(err)
        alert(err);
    }
    render(){
        const previewStyle = {
          width: 400,
          height: 400,
          objectFit: 'fill'
        }
     
        return(
          <div>
            <center>
                <button onClick={this.props.logout}>Logout</button>
                <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                facingMode={'rear'}
                />   
            </center>
            
            <center><h3>{this.state.scanResult}</h3></center>
          </div>
        )
    }
}

export default QPScan;