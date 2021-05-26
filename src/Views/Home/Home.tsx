import React, { Component, ReactNode } from "react";
import { SvgButton } from "@components/SvgButton";
import { ReactComponent as email } from "@svg/down-arrow.svg";

export default class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <SvgButton svg={email} />
      </div>
    );
  }
}
