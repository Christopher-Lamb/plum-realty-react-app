import React from "react";
import CSS from "./HomeHeader.module.css";

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.firstElementChild.scrollTop;
    // console.log(scrollTop);
    if (scrollTop > 100) return;
    this.setState({
      height: scrollTop,
    });
  }

  render() {
    return (
      <div className={CSS.container}>
        <div className={CSS.textWrapper}>
          <h1 className={CSS.text}>{this.props.children}</h1>
        </div>
        <div className={CSS.imgWrapper + " w-full"}>
          <img className={CSS.img} alt={this.props.alt} src={this.props.src} />
        </div>
      </div>
    );
  }
}
