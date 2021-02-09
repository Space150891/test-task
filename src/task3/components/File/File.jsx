import React, { Component } from "react";

export default class File extends Component {
  render() {
    return (
      <div className="file">
        <img
          src="https://raw.githubusercontent.com/redbooth/free-file-icons/master/32px/_blank.png"
          alt="doc"
        />
        <p>{this.props.data.name}</p>
      </div>
    );
  }
}
