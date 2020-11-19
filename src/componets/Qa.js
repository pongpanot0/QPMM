import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
        <br></br>
      <Jumbotron className = "bg-secondary text-white">
        <Container fluid>
          <h1 className="display-3" >ผู้เรียนต้องมีคุณสมบัติอย่างไร</h1>
          <p className="lead">&nbsp;&nbsp;&nbsp;&nbsp; ไม่มีข้อกําหนดคุณสมบัติผู้เรียน เพียงแค่ท่านสนใจอยากเรียนรู้เกี่ยวกับการลงทุน และมีทักษะการใช้คอมพิวเตอร์บ้างเล็กน้อยก็สามารถเรียนได้</p>
        </Container>
      </Jumbotron>
      <hr width="1200" color = "white" size="270" />
      <Jumbotron className = "bg-secondary text-white">
        <Container fluid>
          <h1 className="display-3">จะรับวุฒิบัตรต้องทำอย่างไร ??</h1>
          <p className="lead">&nbsp;&nbsp;&nbsp;&nbsp;ท่านต้องเข้าเรียนตามเนื้อหาที่กําหนดและผ่านการทดสอบ โดยจะถือเกณฑ์ผ่านที่ร้อยละ 70 ซึ่งท่านสามารถตรวจสอบได้จาก หน้าแสดงรายละเอียดหลักสูตรของท่าน หลังจากที่เข้าเรียนและผ่านการทดสอบเรียบร้อยแล้วท่านจะสามารถขอรับวุฒิบัตรได้</p>
        </Container>
      </Jumbotron>
      <hr width="1200" color = "white" size="270" />
    </div>
  );
};

export default Example;