import React from 'react';
var Footer1 = require('Footer1');
var Footer2 = require('Footer2');
var Footer3 = require('Footer3');
var FooterBar = require('FooterBar');
class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <div className="container-fluid">
            <div className="row">
                <Footer1/>
                <Footer2/>
                <Footer3/>
            </div>
        </div>
        <FooterBar/>
    </div>
    )
  }
}

module.exports = Footer;
