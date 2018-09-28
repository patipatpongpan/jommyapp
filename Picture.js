import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Picture extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>รีวิว</ListGroupItem>
        <ListGroupItem>จองสถานที่</ListGroupItem>
        <ListGroupItem>โปรโมชั่น</ListGroupItem>
        <ListGroupItem>ติดต่อเรา</ListGroupItem>
        <ListGroupItem>คำถามที่พบบ่อย</ListGroupItem>
      </ListGroup>
    );
  }
}