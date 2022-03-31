import { Accordion } from 'react-bootstrap';
import LiveToast from './LiveToast';
import { Data } from '../data/Data';
import { useState } from 'react';

export default function QAcards() {
  const [show, setShow] = useState(false);

  const copy = (item) => {
    navigator.clipboard.writeText(item.sol);
    setShow(!show);
  };
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      {Data.map((item) => {
        return (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>
              {`${item.id + 1} ${item.question}`}
              <span className='badge bg-info position-absolute'>
                {item.topic}
              </span>
              <a
                className='position-absolute link'
                href={item.link}
                target='_blank'
              >
                <i className='fa-solid fa-arrow-up-right-from-square'></i>
              </a>
            </Accordion.Header>
            <Accordion.Body>
              <div className='position-relative '>
                <code className='text-success'>
                  <pre>{item.sol}</pre>
                </code>
                <button
                  className='hide btn position-absolute top-0 end-0 z-100 '
                  onClick={() => copy(item)}
                  data-bs-toggle='tooltip'
                  data-bs-placement='top'
                  title='click to copy'
                >
                  copy
                </button>
                <LiveToast show={show} setShow={setShow} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
