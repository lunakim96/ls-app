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
        if(data!== '') {
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
    }
    render(){
        const previewStyle = {
          height: 300,
          width: 300,
        }
     
        return(
          <div>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              facing={'rear'}
              />
            <h3>{this.state.scanResult}</h3>
          </div>
        )
    }
}

export default QPScan;