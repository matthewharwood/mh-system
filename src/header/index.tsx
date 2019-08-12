import { Component, h } from "preact";
import { styles } from '../base/styles';

import { Client } from "styletron-engine-atomic";
const instance = new Client();
const red = instance.renderStyle({
  color: "red",
  fontSize: "12px"
});

export default class Header extends Component {
  render() {
    console.log(styles);
    return (
      <h1 className={red}>hello world</h1>
    )
  }
}