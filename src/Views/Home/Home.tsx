import React, { Component, ReactNode } from "react";
import { SvgButton } from "../../Components/SvgButton";
import { ReactComponent as email } from "../../assets/svg/email.svg";

export default class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <SvgButton svg={email} />
      </div>
    );
  }
}
