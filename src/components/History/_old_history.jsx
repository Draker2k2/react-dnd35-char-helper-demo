import React, { Component } from 'react';
import { Grid, Col, Row, Panel, FormGroup, Form, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '(yyyymmdd)',
      tittle: 'Title',
      description: 'Write here what happened...',
    };
    this.handleHistoryInput = this.handleHistoryInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleTittleInput = this.handleTittleInput.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
  }
  componentDidMount() {
    this.props.getData();
  }
  handleDateInput(e) {
    this.setState({ date: e.target.value });
  }
  handleTittleInput(e) {
    this.setState({ tittle: e.target.value });
  }
  handleHistoryInput(e) {
    this.setState({ description: e.target.value });
  }
  handleSubmitMessage() {
    const data = {
      tittle: this.state.tittle,
      date: this.state.date,
      description: this.state.description,
    };
    this.props.addItem(data.date, data.tittle, data.description);
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        <div>
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={8} md={8}>
                <Panel header="History so far..." bsStyle="info" defaultExpanded="true">
                  { history.map(tale => (<div className="display-linebreak"><strong>{tale.tittle} {tale.date}
                    {tale.description.split(' ').map(word =>
                      (word.includes('\\n') ? <span><br /></span> : word.includes('\\t') ? <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> : <span>{ word }&nbsp;</span>))};
                    <br /></strong></div>))}
                </Panel>
              </Col>
              <Col xs={4} md={4}>
                <Panel header="Tell me new chapters!!" bsStyle="info" defaultExpanded="true">
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
                        <FormControl componentClass="textarea" rows="10" placeholder={this.state.history} onChange={this.handleHistoryInput} />
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
};

export default History;
