import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrapper from './wrapper';
import Title from '../../components/Title';
import { Tabs, Tab, Panel, PanelGroup, Grid, Col, Row } from 'react-bootstrap';
import AbilitiesContainer from '../../containers/AbilitiesContainer';
import DefensesContainer from '../../containers/DefensesContainer';
import ItemsContainer from '../../containers/ItemsContainer';
import ItemsFiltradosContainer from '../../containers/ItemsFiltradosContainer';
import SkillsContainer from '../../containers/SkillsContainer';
import HitContainer from '../../containers/HitContainer';
import DamageContainer from '../../containers/DamageContainer';
import BuffContainer from '../../containers/BuffContainer';
import ClassFeaturesContainer from '../../containers/ClassFeaturesContainer';
import FeatsContainer from '../../containers/FeatsContainer';
import HistoryContainer from '../../containers/HistoryContainer';

const AppGFT = () => (
  <BrowserRouter>
    <Wrapper>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <Title name="GFT React App" />
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Overview"><br />
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={3} md={3}>
                <Switch>
                  <Route path="/">
                    <div className="content4">
                      <PanelGroup>
                        <Panel collapsible header="HIT" bsStyle="info" defaultExpanded="true">
                          <HitContainer />
                        </Panel>
                        <Panel collapsible header="DMG" bsStyle="info" defaultExpanded="true">
                          <DamageContainer />
                        </Panel>
                        <Panel collapsible header="Skills" bsStyle="info" defaultExpanded="true">
                          <SkillsContainer />
                        </Panel>
                      </PanelGroup>
                    </div>
                  </Route>
                </Switch>
              </Col>
              <Col xs={3} md={3}>
                <Switch>
                  <Route path="/">
                    <div className="content3">
                      <Panel collapsible header="Defenses" bsStyle="info" defaultExpanded="true">
                        <DefensesContainer />
                      </Panel>
                      <Panel collapsible header="Abilities" bsStyle="info" defaultExpanded="true">
                        <AbilitiesContainer />
                      </Panel>
                    </div>
                  </Route>
                </Switch>
              </Col>
              <Col xs={2} md={2}>
                <Switch>
                  <Route path="/">
                    <div className="content5">
                      <PanelGroup>
                        <Panel collapsible header="Buffs" bsStyle="info" defaultExpanded="true">
                          <BuffContainer />
                        </Panel>
                        <Panel collapsible header="Feats" bsStyle="info" defaultExpanded="true">
                          <FeatsContainer />
                        </Panel>
                        <Panel collapsible header="Class Features" bsStyle="info" defaultExpanded="true">
                          <ClassFeaturesContainer />
                        </Panel>
                      </PanelGroup>
                    </div>
                  </Route>
                </Switch>
              </Col>
              <Col xs={4} md={4} >
                <Panel collapsible header="Equiped Gear" bsStyle="info" eventKey="2" className="img">
                  <table>
                    <tr>
                      <td>
                        <Grid>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><ItemsFiltradosContainer slotToFilter={'head'} /></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'throath'} /></Col><Col xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'face'} /></Col>
                          </Row>
                          <Row className="show-grid">
                            <Col xs={1} md={2} /><Col xs={1} md={2} /><Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'shoulders'} /></Col>
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'body'} /></Col><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'torso'} /></Col>
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'arms'} /></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'ring'} /></Col><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'waist'} /></Col><Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'ring'} /></Col>
                          </Row>
                          <Row className="show-grid">
                            <Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'weapon'} /></Col><Col xs={1} md={2} /><Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'weapon'} /></Col>
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'feet'} /></Col><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'wondrous'} /></Col>
                          </Row>
                          <Row className="show-grid">
                            <Col xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                          </Row>
                        </Grid>
                      </td>
                    </tr>
                  </table>
                </Panel>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={14} md={14}>
                <Switch>
                  <Route path="/">
                    <div className="content2">
                      <Panel collapsible header="Items" bsStyle="info" defaultExpanded="true">
                        <ItemsContainer />
                      </Panel>
                    </div>
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Grid>
        </Tab>
        <Tab eventKey={2} title="History"><br />
          <HistoryContainer />
        </Tab>
      </Tabs>
    </Wrapper>
  </BrowserRouter>
);

export default AppGFT;
