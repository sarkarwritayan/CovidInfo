import React from 'react'
import {dateAndTime} from '../../Helper/DateHelper'
import { Card,Row,Col,Typography } from 'antd';

const { Text } = Typography;


export default function Info(props) {
    const{report}=props;
  return (
    <Card
    hoverable
    className='cardSize'
    style={{ border:"5px solid black", padding:"6px", background:"rgba(7, 242, 175, 0.8)" }}
    cover={report.data.country&&<Row>
        <Col span={8} offset={8}>
    <img alt="example" className="flagWidth" src={`${report.data.countryInfo?.flag}`} style={{ border:"2px solid white",height:"100px"}}/>
    </Col>
    </Row>
}
  >   
    {report.data.country?<div className='card-content'>
      <div className='country'>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Country   :</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.country}</b></pre>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Population:</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.population}</b></pre>
      </div>

      <div className='info'>

        <div className='left-info'>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Total Cases  :</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.cases}</b></pre>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Today's Cases:</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.todayCases}</b></pre>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Total Deaths:</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.deaths}</b></pre>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Today Deaths :</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.todayDeaths}</b></pre>
        </div>
        <div className='right-info'>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Total Recovery:</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.recovered}</b></pre>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Today Recovery:</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.todayRecovered}</b></pre>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Active Cases  :</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.active}</b></pre>
            <pre> <b style={{color:"red", fontSize:"120%"}}>Critical Cases:</b><b style={{color:"blue", fontSize:"130%"}}>{report.data.critical}</b></pre>
        </div>

      </div>

      <div className='update'>
            <pre><b style={{color:"red", fontSize:"120%"}}>Last Updated:</b><b style={{color:"blue", fontSize:"130%"}}>{dateAndTime(report.data.updated)}</b></pre> 
      </div>
      
         
    </div>:<div style={{width:"100%",height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Text type={"success"} style={{fontSize:"150%",fontWeight:"bolder"}}>Sorry No data Found.</Text>
    </div>
    }


  </Card>
  )
}
