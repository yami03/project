import React, { Component } from 'react'; 
import { Button, Icon, Input, Header, Segment, Grid } from 'semantic-ui-react'
import './style.scss';
// import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  render() {
    return (
      <Segment>
        <Header>
          <Header.Content>React Tree Project</Header.Content>
          <Header.Subheader textAlign="right">
            <Input placehelder="검색" /><Button content="검색" />
          </Header.Subheader>
        </Header>
        <Grid>
          <Grid.Column width={6}>
            <div className="tree-wrapper">
              <ul>
                <li className="tree-node tree-node-parent tree-node-expanded">
                  <div className="tree-text">
                    <div className="tree-func tree-collapse">
                      <Button
                        className="tree-collapse-btn"
                        icon="caret down"
                      />
                    </div>
                    <div className="tree-bare-label">
                      <Icon name="folder" />
                      <div>트리구조</div>
                    </div>
                  </div>
                  <ul>
                    <li className="tree-node tree-node-parent tree-node-expanded">
                      <div className="tree-text">
                        <div className="tree-func tree-collapse">
                          <Button
                            className="tree-collapse-btn"
                            icon="caret down"
                          />
                        </div>
                        <div className="tree-bare-label tree-node-selected">
                          <Icon name="folder" />
                          <div>트리구조</div>
                        </div>
                      </div>
                      <ul>
                        <li className="tree-node rct-node-leaf">
                          <div className="tree-text">
                            <div className="tree-func tree-collapse">
                              <Button
                                className="tree-collapse-btn"
                                icon="caret down"
                              />
                            </div>
                            <div className="tree-bare-label">
                              <Icon name="folder" />
                              <div>트리구조</div>
                            </div>
                          </div>
                        </li>
                        <li className="tree-node rct-node-leaf">
                          <div className="tree-text">
                            <div className="tree-func tree-collapse">
                              <Button
                                className="tree-collapse-btn"
                                icon="caret down"
                              />
                            </div>
                            <div className="tree-bare-label">
                              <Icon name="folder" />
                              <div>
                                <Input />
                                <Button basic>확인 </Button>
                                <Button basic>취소 </Button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="tree-node tree-node-parent tree-node-collapsed">
                      <div className="tree-text">
                        <div className="tree-func tree-collapse">
                          <Button
                            className="tree-collapse-btn"
                            icon="caret right"
                          />
                        </div>
                        <div className="tree-bare-label">
                          <Icon name="folder" />
                          <div>
                            <Input />
                            <Button basic>확인 </Button>
                            <Button basic>취소 </Button>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li className="tree-node rct-node-leaf">
                          <div className="tree-text">
                            <div className="tree-func tree-collapse">
                              <Button
                                className="tree-collapse-btn"
                                icon="caret down"
                              />
                            </div>
                            <div className="tree-bare-label">
                              <Icon name="folder" />
                              <div>트리구조</div>
                            </div>
                          </div>
                        </li>
                        <li className="tree-node rct-node-leaf">
                          <div className="tree-text">
                            <div className="tree-func tree-collapse">
                              <Button
                                className="tree-collapse-btn"
                                icon="caret down"
                              />
                            </div>
                            <div className="tree-bare-label">
                              <Icon name="folder" />
                              <div>
                                <Input />
                                <Button basic>확인 </Button>
                                <Button basic>취소 </Button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="tree-node rct-node-leaf">
                  <div className="tree-text">
                    <div className="tree-func tree-collapse">
                      <Button
                        className="tree-collapse-btn"
                        icon="caret down"
                      />
                    </div>
                    <div className="tree-bare-label">
                      <Icon name="folder" />
                      <div>
                        <Input />
                        <Button basic>확인 </Button>
                        <Button basic>취소 </Button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Grid.Column>
          <Grid.Column width={10}>
            <div className="page-list">
              <ul>
                <li className="item">
                  <Icon name="desktop" />text text text text texttext text texttext text
                  <Button className="closed" />
                </li>
              </ul>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;
