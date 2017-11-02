import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Wrapper from './wrapper';
import Title from '../../components/Title';
import { Tabs, Tab, Panel, PanelGroup, Grid, Col, Row, Button } from 'react-bootstrap';
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

var AppGFT = "";
function activate() {
  // --- ABILITY LEVEL INCREMENT ACTIVATION
  const event_2 = new Event('change', { bubbles: true });
  const level4 = document.getElementById('AbilitiesIncrementLevel__4');
  level4.options[2].selected = true;
  level4.dispatchEvent(event_2);

  const level8 = document.getElementById('AbilitiesIncrementLevel__8');
  level8.options[4].selected = true;
  level8.dispatchEvent(event_2);

  // --- FEATS & CLASS FEATURES SLOTS ACTIVATION
  document.getElementById('SwashbucklerGrace').click();
  document.getElementById('SwordsageWeaponFocus').click();
  document.getElementById('ShadowHandStance').click();
  document.getElementById('ShadowHandDisciplineEnchantment').click();
  
  // --- GEAR SLOTS ACTIVATION
  const event = new Event('change', { bubbles: true });

  const face = document.getElementById('face');
  face.options[1].selected = true;
  face.dispatchEvent(event);
    
  const shoulders = document.getElementById('shoulders');
  shoulders.options[1].selected = true;
  shoulders.dispatchEvent(event);  

  const weapon = document.getElementById('weapon');
  weapon.options[1].selected = true;
  weapon.dispatchEvent(event); 
  
  const ring = document.getElementById('ring');
  ring.options[3].selected = true;
  ring.dispatchEvent(event); 

  const torso = document.getElementById('torso');
  torso.options[1].selected = true;
  torso.dispatchEvent(event); 

  const body = document.getElementById('body');
  body.options[1].selected = true;
  body.dispatchEvent(event);

  const arms = document.getElementById('arms');
  arms.options[1].selected = true;
  arms.dispatchEvent(event);

  const hands = document.getElementById('hands');
  hands.options[1].selected = true;
  hands.dispatchEvent(event);

  const feet = document.getElementById('feet');
  feet.options[1].selected = true;
  feet.dispatchEvent(event);

  const wondrous = document.getElementById('wondrous');
  wondrous.options[1].selected = true;
  wondrous.dispatchEvent(event);

  const waist = document.getElementById('waist');
  waist.options[1].selected = true;
  waist.dispatchEvent(event);

  const throath = document.getElementById('throath');
  throath.options[1].selected = true;
  throath.dispatchEvent(event);

  // --------------------------
}


if(window.innerWidth < 1000){
  AppGFT = () => (
    <BrowserRouter>
      <Wrapper>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Title name="Manus & Dragons - Frederic Character Helper" />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Overview"><br />
            <Button onClick={activate()}>
              Predefined State
            </Button>
            <Grid fluid>
              <Row className="show-grid">
                <Col>
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
                          <Panel collapsible header="Defenses" bsStyle="info" defaultExpanded="true">
                            <DefensesContainer />
                          </Panel>
                        </PanelGroup>
                      </div>
                    </Route>
                  </Switch>
                </Col>
              </Row>
            </Grid>
          </Tab>
          <Tab eventKey={2} title="Buffs, Feats & Class Features">
            <center>
            <Row className="show-grid">
              <Col>
                <div className="content3">
                  <Panel collapsible header="Buffs" bsStyle="info" defaultExpanded="true">
                    <BuffContainer />
                  </Panel>
                  <Panel collapsible header="Feats" bsStyle="info" defaultExpanded="true">
                    <FeatsContainer />
                  </Panel>
                  <Panel collapsible header="Class Features" bsStyle="info" defaultExpanded="true">
                    <ClassFeaturesContainer />
                  </Panel>
                </div>
              </Col>
            </Row>
            </center>
          </Tab>
          <Tab eventKey={3} title="Abilities">
            <center>
            <Row className="show-grid">
              <Col>
                <Panel collapsible header="Abilities" bsStyle="info" defaultExpanded="true">
                  <AbilitiesContainer />
                </Panel>
              </Col>
            </Row>
            </center>
          </Tab>
          <Tab eventKey={4} title="Skills">
            <Row className="show-grid">
              <Col mdOffset={1} xsOffset={1}>
                <Panel collapsible header="Skills" bsStyle="info" defaultExpanded="true">
                  <SkillsContainer />
                </Panel>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={5} title="Equiped Gear"><br />
            <Panel collapsible header="Equiped Gear" bsStyle="info" eventKey="2" className="img" defaultExpanded="true">
              <table>
                <tr>
                  <td>
                    <Grid>
                      <Row className="show-grid">
                        <Col>Head:<ItemsFiltradosContainer slotToFilter={'head'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Throath:<ItemsFiltradosContainer slotToFilter={'throath'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Face:<ItemsFiltradosContainer slotToFilter={'face'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Shoulders:<ItemsFiltradosContainer slotToFilter={'shoulders'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Body:<ItemsFiltradosContainer slotToFilter={'body'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Torso:<ItemsFiltradosContainer slotToFilter={'torso'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Arms:<ItemsFiltradosContainer slotToFilter={'arms'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Arms:<ItemsFiltradosContainer slotToFilter={'hands'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Ring(1):<ItemsFiltradosContainer slotToFilter={'ring'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Ring(2):<ItemsFiltradosContainer slotToFilter={'ring'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Waist:<ItemsFiltradosContainer slotToFilter={'waist'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Weapon(1):<ItemsFiltradosContainer slotToFilter={'weapon'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Weapon(2):<ItemsFiltradosContainer slotToFilter={'weapon'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Feet:<ItemsFiltradosContainer slotToFilter={'feet'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col>Wondrous:<ItemsFiltradosContainer slotToFilter={'wondrous'} /></Col>
                      </Row>
                    </Grid>
                  </td>
                </tr>
              </table>
            </Panel>
          </Tab>
          <Tab eventKey={6} title="Item List">
            <Panel collapsible header="Items" bsStyle="info" defaultExpanded="true">
              <ItemsContainer />
            </Panel>
          </Tab>
          <Tab eventKey={7} title="History"><br />
            <HistoryContainer />
          </Tab>
        </Tabs>
      </Wrapper>
    </BrowserRouter>
  );
}else if(window.innerWidth< 1850){
  AppGFT = () => (
    <BrowserRouter>
      <Wrapper>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Title name="Manus & Dragons - Frederic Character Helper" />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Overview"><br />
            <Button onClick={activate}>
              Predefined State
            </Button>
            <Grid fluid>
              <Row className="show-grid">
                <Col xs={5} md={6}>
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
                          <Panel collapsible header="Defenses" bsStyle="info" defaultExpanded="true">
                            <DefensesContainer />
                          </Panel>
                        </PanelGroup>
                      </div>
                    </Route>
                  </Switch>
                </Col>
                <Col xs={4} md={5}>
                  <Switch>
                    <Route path="/">
                      <div className="content3">
                        <Panel collapsible header="Buffs" bsStyle="info" defaultExpanded="true">
                          <BuffContainer />
                        </Panel>
                        <Panel collapsible header="Feats" bsStyle="info" defaultExpanded="true">
                          <FeatsContainer />
                        </Panel>
                        <Panel collapsible header="Class Features" bsStyle="info" defaultExpanded="true">
                          <ClassFeaturesContainer />
                        </Panel>
                      </div>
                    </Route>
                  </Switch>
                </Col>
              </Row>
            </Grid>
          </Tab>
          <Tab eventKey={2} title="Abilities & Skills">
            <br/>
            <Row className="show-grid">
              <Col xs={4} md={4}>
                <Panel collapsible header="Abilities" bsStyle="info" defaultExpanded="true">
                  <AbilitiesContainer />
                </Panel>
              </Col>
              <Col xs={5} md={5}>
                <Panel collapsible header="Skills" bsStyle="info" defaultExpanded="true">
                  <SkillsContainer />
                </Panel>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={3} title="Equiped Gear"><br />
            <Panel collapsible header="Equiped Gear" bsStyle="info" eventKey="2" className="img" defaultExpanded="true">
              <table>
                <tr>
                  <td>
                    <Grid>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><ItemsFiltradosContainer slotToFilter={'head'} /></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'throath'} /></Col><Col xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'face'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={1} md={2} /><Col xs={1} md={2} /><Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'shoulders'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'body'} /></Col><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'torso'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'arms'} /></Col><Col xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'hands'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'ring'} /></Col><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'waist'} /></Col><Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'ring'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'weapon'} /></Col><Col xs={1} md={2} /><Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'weapon'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'feet'} /></Col><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'wondrous'} /></Col>
                      </Row>
                      <Row className="show-grid">
                        <Col xsOffset={2} mdOffset={3} xs={2} md={2} ><p>&nbsp;</p></Col><Col xs={2} md={2} /><Col xs={2} md={2} />
                      </Row>
                    </Grid>
                  </td>
                </tr>
              </table>
            </Panel>
          </Tab>
          <Tab eventKey={4} title="Item List">
            <Panel collapsible header="Items" bsStyle="info" defaultExpanded="true">
              <ItemsContainer />
            </Panel>
          </Tab>
          <Tab eventKey={5} title="History"><br />
            <HistoryContainer />
          </Tab>
        </Tabs>
      </Wrapper>
    </BrowserRouter>
  );
}else{
  AppGFT = () => (
    <BrowserRouter>
      <Wrapper>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Title name="Manus & Dragons - Frederic Character Helper" />
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
                              <Col xs={1} md={2}><ItemsFiltradosContainer slotToFilter={'arms'} /></Col><Col xs={2} md={2} /><Col xs={2} md={2}><ItemsFiltradosContainer slotToFilter={'hands'} /></Col>
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
}

export default AppGFT;
