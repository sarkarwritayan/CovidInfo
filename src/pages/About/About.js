import React from 'react'
import { Typography,Card  } from 'antd';

export default function About() {
    const { Title } = Typography;
  return (
    <div className='about'>
        <Title style={{color:"red"}}> About Us</Title>
        <Card className="about-card" style={{border:"4px solid green",background:"rgba(195, 39, 15, 0.8)"}}>
            <div className="about-card-content">
                <p style={{fontSize:"120%", fontWeight:"bold", color:"rgba(237, 243, 198, 1)"}}>Covid Info is the website, where one gets all the correct information about the covid status and conditions from all over the world.Covid Info will be helpfull for the travellers to track the condition of the countries they are traveling to. Covid Info also helps the citizens of a country to track the condition of their respective countries. </p>
            </div>
        </Card>
        
     
    </div>
  )
}
