import React, { Component } from 'react';
import { Grid, Tab, Row, Col, Nav, NavItem, Panel, FormGroup, Form, FormControl, ControlLabel, Button, Modal, Glyphicon } from 'react-bootstrap';
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';

class Misions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name of the mision',
      objectives: RichTextEditor.createEmptyValue(),
      information: RichTextEditor.createEmptyValue(),
      completed: false,
      showModal: false,
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.objectivesOnChange = this.objectivesOnChange.bind(this);
    this.informationOnChange = this.informationOnChange.bind(this);
  }
  componentDidMount() {
    this.props.getData();
  }
  objectivesOnChange = (objectives) => {
    this.setState({ objectives });
    if (this.props.objectivesOnChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.objectivesOnChange(
        objectives.toString('html'),
      );
    }
  };
  informationOnChange = (information) => {
    this.setState({ information });
    if (this.props.informationOnChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.informationOnChange(
        information.toString('html'),
      );
    }
  };
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }
  handleSubmitMessage() {
    const data = {
      name: this.state.name,
      objectives: this.state.objectives.toString('html'),
      information: this.state.information.toString('html'),
      completed: false,
    };
    this.props.addItem(data.name, data.objectives, data.information, data.completed);
  }
  render() {
    const { misions } = this.props;
    const separacion = '&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;';
    return (
      <div>
        <div>
          <Grid>
            <Row className="show-grid">
              <Col>
                <Button bsStyle="warning" onClick={this.open}>
                  <Glyphicon glyph="book" /> &nbsp; Add a new Mision, Frederic.
                </Button>
                <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
                  <Modal.Header closeButton>
                    <Modal.Title>Explain the details of the mision, Frederic.</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form horizontal onSubmit={this.handleSubmitMessage}>
                      <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                          Name
                        </Col>
                        <Col sm={10}>
                          <FormControl type="text" placeholder={this.state.name} onChange={this.handleNameInput} />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalObjectives">
                        <Col componentClass={ControlLabel} sm={2}>
                          Objectives
                        </Col>
                        <Col sm={10}>
                          <RichTextEditor
                            placeholder='Describe the objectives...'
                            value={this.state.objectives}
                            onChange={this.objectivesOnChange}
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup controlId="formHorizontalInformation">
                        <Col componentClass={ControlLabel} sm={2} />
                        <Col sm={10}>
                          <RichTextEditor
                            placeholder='This is the information gathered...'
                            value={this.state.information}
                            onChange={this.informationOnChange}
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
                <Panel collapsible header="Misions of the Travelers." bsStyle="warning" defaultExpanded="true">
                  <Tab.Container id="misions-tabs" defaultActiveKey="first">
                    <Grid fluid>
                      <Row className="clearfix">
                        <Col sm={3}>
                          <Nav bsStyle="pills" stacked>
                            {misions.length > 0 && misions.map(mision => (
                              <NavItem eventKey={mision.name}>
                                {mision.name}
                              </NavItem>
                            ))}
                          </Nav>
                        </Col>
                        <Col sm={8}>
                          <Tab.Content animation>
                            {misions.length > 0 && misions.map(mision => (
                              <Tab.Pane eventKey={mision.name}>
                                <RichTextEditor
                                  readOnly="true"
                                  value={RichTextEditor.createValueFromString(mision.objectives + mision.information, 'html')}
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

Misions.propTypes = {
  Misions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    objectives: PropTypes.string,
    information: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  getData: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  objectivesOnChange: PropTypes.func.isRequired,
  informationOnChange: PropTypes.func.isRequired,
};

export default Misions;
