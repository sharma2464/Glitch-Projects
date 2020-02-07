// Functional Component

const React = require("react");
// const useState = require("react").useState();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "Sample ID",
      content: "Sample Content",
      author: "Author Name"
    };
    this.newQuote = this.newQuote.bind(this);
  }

  // const [state, setState] = useState({
  //   id: "Sample ID",
  //   content: "Sample Content",
  //   author: "Author Name"
  // });

  newQuote() {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        this.setState({
          id: data._id,
          content: data.content,
          author: data.author
        });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div className="container" id="quote-box">
        <div className="card">
          <div className="card-header">
            {this.state.id !== "" ? (
              <code className="col-sm-3 light">{this.state.id}</code>
            ) : null}
          </div>
          <div className="card-body">
            <h3 id="text">{this.state.content}</h3>
            <br />
            <blockquote id="author">{this.state.author}</blockquote>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-outline-info"
              id="new-quote"
              onClick={this.newQuote}
            >
              New Quote
            </button>
            <a
              className="btn btn-primary"
              id="tweet-quote"
              href="www.twitter.com/intent/tweet"
              type="button"
            >
              <i className="fab fa-twitter"></i> Tweet
            </a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
