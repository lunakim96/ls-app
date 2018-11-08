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
                scanResult: data,
                delay: 2000,
            })
        } else {
            this.setState({
                scanResult: 'next scan',
                delay: 1000,
            })
        }
        
    }
    handleError(err) {
        console.error(err)
        alert('Reload the page at https://ls-pickup.herokuapp.com');
    }
    render(){
        const previewStyle = {
          width: 400,
          height: 400,
          objectFit: 'fill'
        }
        let resultView;
        if (this.state.scanResult !== 'next scan' && this.state.scanResult !== 'scanner ready') {
            resultView = (
            <div>
                <h3 className='scanresult'>{this.state.scanResult}</h3>
            </div>
            )
        } else {
            resultView = (
            <div>
                <h3>{this.state.scanResult}</h3>
            </div>
            )
        }
        return(
          <div>
            <center>
                <button onClick={this.props.logout}>Logout</button>
                <hr />
                <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                facingMode={'rear'}
                />   
            </center>
            <center>{resultView}</center>
          </div>
        )
    }
}

export default QPScan;