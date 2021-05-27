import React, { Component, ReactNode } from "react";
import { InputBase, withStyles, WithStyles } from "@material-ui/core";
import { styles } from "./styles";

interface InputFieldProps extends WithStyles<typeof styles> {
  placeholder: string;
  type: string;
  textarea?: boolean;
}

interface InputFieldState {
  value: string;
}

export const InputField = withStyles(styles)(
  class extends Component<InputFieldProps, InputFieldState> {
    constructor(props: InputFieldProps) {
      super(props);
      this.state = {
        value: "",
      };
    }

    handleChange = (value: string): void => {
      //   console.log(value);
      this.setState({
        value: value,
      });
    };

    render(): ReactNode {
      const { classes, placeholder, type, textarea } = this.props;
      const { value } = this.state;
      return (
        <InputBase
          fullWidth
          multiline={textarea}
          rows={5}
          rowsMax={5}
          placeholder={placeholder}
          type={type}
          required
          className={classes.root}
          value={value}
          onChange={(e) => this.handleChange(e.target.value)}
        />
      );
    }
  }
);
