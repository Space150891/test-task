import React, { Component } from "react";
import { typeMapper } from "../../utils/utils";

export default class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.data.open };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  componentWillReceiveProps() {
    if (this.state.open !== this.props.data.open) {
      this.setState({ open: this.props.data.open });
    }
  }

  render() {
    return (
      <div className="folder">
        <div className="folder__name" onDoubleClick={this.toggleOpen}>
          {this.state.open ? (
            <img
              src="https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/32/Folder-Open-icon.png"
              alt="doc"
            />
          ) : (
            <img
              src="https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/32/Folder-icon.png"
              alt="doc"
            />
          )}
          <p>{this.props.data.name}</p>
        </div>
        {this.state.open ? (
          <div className="folder__expanded">
            <div className="folder__children">
              {this.props.data.children.map(typeMapper)}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
