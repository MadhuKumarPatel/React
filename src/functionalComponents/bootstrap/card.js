import Card from 'react-bootstrap/Card';

function BootstrapCard({header,title}) {
  return (
    <>
      {[
        // 'Primary',
        // 'Secondary',
        'Success',
        // 'Danger',
        // 'Warning',
        // 'Info',
        // 'Light',
        // 'Dark',
      ].map((variant) => (
        <Card
        //   bg={variant.toLowerCase()}
        //   key={variant}
        //   text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        //   style={{ width: '18rem' }}
        //   className="mb-2"
          bg="danger"
          key="success"
          text={"success" === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Title> {title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

<Card
        //   bg={variant.toLowerCase()}
        //   key={variant}
        //   text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        //   style={{ width: '18rem' }}
        //   className="mb-2"
          bg="success"
          key="success"
          text={"success" === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Title> {title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  );
}

export default BootstrapCard;