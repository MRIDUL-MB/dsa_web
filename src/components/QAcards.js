import { Accordion } from 'react-bootstrap';

export default function QAcards() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Question #1</Accordion.Header>
        <Accordion.Body>Solution 1</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Question #2</Accordion.Header>
        <Accordion.Body>Solution 2</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
