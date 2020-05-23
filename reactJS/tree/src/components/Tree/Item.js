import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
} from 'semantic-ui-react';

class Item extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array]),
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      treeOpen: false,
    };
  }

  treeOpenClick = e => {
    e.preventDefault();

    this.setState(preState => ({
      treeOpen: !preState.treeOpen,
    }));
  };

  render() {
    const { treeOpen } = this.state;
    const { children, title } = this.props;
    const treeOpenClass = `tree-node-parent ${!treeOpen ? 'tree-node-collapsed' : 'tree-node-expanded'}`;
    // console.log(children);
    return (
      <React.Fragment>
            <li className={`tree-node ${children ? treeOpenClass : 'rct-node-leaf'}`}>
              <div className="tree-text">
                <div className="tree-func tree-collapse">
                  <Button
                    className="tree-collapse-btn"
                    icon={`caret ${!treeOpen ? 'right' :  'down'}`}
                    onClick={this.treeOpenClick}
                  />
                </div>
                <div className="tree-bare-label">
                  <Icon name="folder" />
                  <span>{title}</span>
                </div>
              </div>
              {children ? <ul>{children}</ul> : ''}
            </li>
      </React.Fragment>
    );
  }
}

export default Item;
