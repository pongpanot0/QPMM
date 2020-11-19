import React, { Component } from 'react'
import { Button, Jumbotron  ,Card,  CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
import Slides from './Slides';
import { darkblue, red } from 'color-name';

export default class Home extends Component {
    render() {
        return (
            <div>
             
              <h1 align = 'center'>    <div class="city"> <Slides/> </div> </h1>
              <br></br><br></br>
               <h1 align = 'center'> 
                 <img src = "./images/el.png"/> </h1> 
                 <br></br><br></br>
                 <h1 align = 'center'>     <h1 class="display-1">หลักสูตร</h1> </h1>
               <br></br>
               <hr width="1200" color = "white" size="270" />
               <br></br>   <br></br>
                <div class="container-fluid">
                
    <CardGroup>
    <Card className = "bg-secondary text-white">
      <float-right> <CardImg width="495" height="257" src="./images/ac.png" alt="Card image cap" /></float-right>
        <CardBody>
          <CardTitle>บัญชี</CardTitle>
          <CardText>เรียนรู้วิธีการรับเงินสด/เช็ค/เงินโอน การออกใบเสร็จรับเงินโดย QM-Soft และ QOS</CardText>
          <Button color="light"href="/Ac">เข้าสู่หลักสูตร</Button>
        </CardBody>
      </Card>
      <Card className = "bg-secondary text-white">
        <CardImg width="495" height="257" src="./images/en.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>วิศวกรรม</CardTitle>
          <CardText>หลักสูตรสำหรับช่างใหม่ และหลากหลายคำถามระบบการทำงานที่มี</CardText>
          <Button color="light"href="/En">เข้าสู่หลักสูตร</Button>
        </CardBody>
      </Card>
      <Card className = "bg-secondary text-white">
        <CardImg width="495" height="257" src="./images/lw.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>กฎหมาย</CardTitle>
          <CardText>หลักสูตรที่ผู้จัดการบ้านพลาดไม่ได้สำหรับข้อกฎหมายอาคารชุด/พรบ.จัดสรรที่ดิน</CardText>
          <Button color="light"href="/Lw">เข้าสู่หลักสูตร</Button>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
    
            </div>
        )
    }
}
