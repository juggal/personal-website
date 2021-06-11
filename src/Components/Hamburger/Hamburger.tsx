import React, { Component, createRef, ReactNode } from "react";
import {
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { styles } from "./styles";
import { NavButton } from "@components/NavButton";
import { Link } from "react-scroll";

interface HamburgerProps extends WithStyles<typeof styles> {}
interface NavbarState {
  curIndex: number;
  anchor: boolean;
}

export const Hamburger = withStyles(styles)(
  class extends Component<HamburgerProps, NavbarState> {
    constructor(props: WithStyles<typeof styles>) {
      super(props);
      this.state = {
        curIndex: 0,
        anchor: false,
      };
    }

    componentDidMount() {
      document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    }

    changeColor = (index: number): boolean => {
      return index === this.state.curIndex;
    };

    handleClick = (index: number): void => {
      this.setState({
        curIndex: index,
      });
    };

    myRef = createRef<HTMLDivElement>();

    handleClickOutside = (event: any): void => {
      if (
        this.myRef &&
        !this.myRef.current?.contains(event.target) &&
        this.state.anchor
      ) {
        this.setState({
          anchor: false,
        });
      }
    };

    render(): ReactNode {
      const { classes } = this.props;
      const { anchor } = this.state;
      return (
        <div ref={this.myRef}>
          <CssBaseline />
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className={classes.bar}
          >
            <Grid item xs={12}>
              <IconButton
                onClick={() =>
                  this.setState((prevState) => ({ anchor: !prevState.anchor }))
                }
              >
                <Menu />
              </IconButton>
            </Grid>
          </Grid>
          <Drawer
            anchor="left"
            open={anchor}
            onClose={() => this.setState({ anchor: false })}
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
            variant="persistent"
          >
            <div className={classes.drawerContainer}>
              <List>
                <ListItem>
                  <Link
                    to="home"
                    activeClass="activeClass"
                    spy={true}
                    smooth={true}
                    offset={-50}
                  >
                    <NavButton
                      text="Home"
                      color={this.changeColor(0) ? "primary" : "default"}
                      onClick={() => this.handleClick(0)}
                    />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="services"
                    activeClass="activeClass"
                    spy={true}
                    smooth={true}
                    offset={-50}
                  >
                    <NavButton
                      text="Services"
                      color={this.changeColor(1) ? "primary" : "default"}
                      onClick={() => this.handleClick(1)}
                    />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="about"
                    activeClass="activeClass"
                    spy={true}
                    smooth={true}
                    offset={-50}
                  >
                    <NavButton
                      text="About"
                      color={this.changeColor(2) ? "primary" : "default"}
                      onClick={() => this.handleClick(2)}
                    />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="skills"
                    activeClass="activeClass"
                    spy={true}
                    smooth={true}
                    offset={-50}
                  >
                    <NavButton
                      text="Skills"
                      color={this.changeColor(3) ? "primary" : "default"}
                      onClick={() => this.handleClick(3)}
                    />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    to="contact"
                    activeClass="activeClass"
                    spy={true}
                    smooth={true}
                    offset={-50}
                  >
                    <NavButton
                      text="Contact"
                      color={this.changeColor(4) ? "primary" : "default"}
                      onClick={() => this.handleClick(4)}
                    />
                  </Link>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </div>
      );
    }
  }
);
