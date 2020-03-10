import React from "react";
import "./Detail.css";

// function Detail(props) {
//   console.log(props);
//   return <span>Hello</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const { state } = location;
    if (location.state) {
      return (
        <div className="detail">
          <img
            className="detail__image"
            src={state.poster}
            title={state.title}
            alt={state.title}
          />
          <div className="detail__data">
            <h3 className="detail__title">{state.title}</h3>
            <h5 className="detail__year">{state.year}</h5>
            <ul className="detail__genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="detail__summary">{state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
