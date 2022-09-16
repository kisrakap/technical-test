import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tabledata from '../components/tabledata'

function Home() {
  const dataSet = [
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"]
  ]

  const mystyle = {
    marginLeft : "100px",
  }
  return (
  
    <div className='bg-light' style={mystyle}>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className=""
    >
      <Tab eventKey="home" title="Home">
        
        <Tabledata data={dataSet}> </Tabledata>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div> <Tabledata data={dataSet}> </Tabledata></div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <div> <Tabledata data={dataSet}> </Tabledata></div>

      </Tab>
    </Tabs>
    </div>

  );
}

export default Home;
