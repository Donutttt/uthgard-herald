import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      guilds: [],
      players: [],
    };

    this.addPlayerSearchResults = this.addPlayerSearchResults.bind(this);
    this.addGuildSearchResults = this.addGuildSearchResults.bind(this);
    this.submitSearchResult = this.submitSearchResult.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  addPlayerSearchResults(results) {
    this.setState({
      players: results,
    });
  }

  addGuildSearchResults(results) {
    this.setState({
      guilds: results,
    });
  }

  submitSearchResult() {
    this.props.api.getPlayerSearchResults(this.state.inputValue)
      .then(data => this.addPlayerSearchResults(data.data));

    this.props.api.getGuildSearchResults(this.state.inputValue)
      .then(data => this.addGuildSearchResults(data.data));
  }

  handleKeyPress(e) {
    this.setState({
      inputValue: e.target.value,
    });

    // enter is pressed
    if (e.keyCode === 13) {
      this.submitSearchResult();
    }
  }

  renderPlayerResults() {
    return (
      <div>
        {this.state.players.map(player => <p key={player}>{player}</p>)};
      </div>
    )
  }

  renderGuildResults() {
    return (
      <div>
        {this.state.guilds.map(guild => <p key={guild}>{guild}</p>)};
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row input-row">
          <div className="col-sm-10 col-md-2 col-sm-offset-1 col-md-offset-5 center">
            <input
              onKeyUp={this.handleKeyPress}
            />
            <button onClick={this.submitSearchResult}>Search</button>
          </div>
        </div>
        <div className="row results-row">
          <div className="col-xs-12 col-sm-6">
            {this.renderPlayerResults()}
          </div>
          <div className="col-xs-12 col-sm-6">
            {this.renderGuildResults()}
          </div>
        </div>
      </div>
    );
  }
};

export default Index;
