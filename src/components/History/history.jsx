import React, { Component } from 'react';
import { Grid, Col, Tab, Nav, NavItem, Row, Panel, FormGroup, Form, FormControl, ControlLabel, Button, Modal, Glyphicon, Label } from 'react-bootstrap';
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '(yyyymmdd)',
      tittle: 'Title',
      description: 'Write here what happened...',
      showModal: false,
      value: RichTextEditor.createEmptyValue(),
    };
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleTittleInput = this.handleTittleInput.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.textOnChange = this.textOnChange.bind(this);
  }
  componentDidMount() {
    this.props.getData();
  }
  textOnChange = (value) => {
    this.setState({ value });
    if (this.props.textOnChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.textOnChange(
        value.toString('html'),
      );
    }
  };
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  handleDateInput(e) {
    this.setState({ date: e.target.value });
  }
  handleTittleInput(e) {
    this.setState({ tittle: e.target.value });
  }
  handleSubmitMessage() {
    const data = {
      tittle: this.state.tittle,
      date: this.state.date,
      description: this.state.value.toString('html'),
    };
    this.props.addItem(data.date, data.tittle, data.description);
  }
  render() {
    const { history } = this.props;
    const tittleH1ini = '<strong>';
    const tittleH1fin = '</strong><br/>';
    const separacion = '&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;';
    return (
      <div>
        <div>
          <Grid>
            <Row className="show-grid">
              <Col>
                <Button bsStyle="primary" onClick={this.open}>
                  <Glyphicon glyph="book" /> &nbsp; Add a new Tale about your jorney, Frederic.
                </Button>
                <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
                  <Modal.Header closeButton>
                    <Modal.Title>Tell me everything about your tale, Frederic.</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form horizontal onSubmit={this.handleSubmitMessage}>
                      <FormGroup controlId="formHorizontalDate">
                        <Col componentClass={ControlLabel} sm={2}>
                          Date
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" placeholder={this.state.date} onChange={this.handleDateInput} />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalDate">
                        <Col componentClass={ControlLabel} sm={2}>
                          Title
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" placeholder={this.state.tittle} onChange={this.handleTittleInput} />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalDate">
                        <Col componentClass={ControlLabel} sm={2} />
                        <Col sm={10}>
                          <RichTextEditor
                            placeholder={this.state.description}
                            value={this.state.value}
                            onChange={this.textOnChange}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalDate">
                        <Col smOffset={2} sm={10}>
                          <Button type="submit">
                            Submit
                          </Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col>
                <br />
                <Panel header="History so far..." bsStyle="info" defaultExpanded="true">
                  <Tab.Container id="misions-tabs" defaultActiveKey="first">
                    <Grid fluid>
                      <Row className="clearfix">
                        <Col sm={3}>
                          <Nav bsStyle="pills" stacked>
                            {history.length > 0 && history.map(hist => (
                              <NavItem eventKey={hist.tittle}>
                                <Label bsSize="xsmall" bsStyle="info">{hist.date}</Label><br />
                                {hist.tittle}
                              </NavItem>
                            ))}
                          </Nav>
                        </Col>
                        <Col sm={8}>
                          <Tab.Content animation>
                            {history.length > 0 && history.map(tale => (
                              <Tab.Pane eventKey={tale.tittle}>
                                <RichTextEditor
                                  readOnly="true"
                                  value={RichTextEditor.createValueFromString(tale.description, 'html')}
                                />
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Grid>
                  </Tab.Container>
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    tittle: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  getData: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  textOnChange: PropTypes.func.isRequired,
};

export default History;
