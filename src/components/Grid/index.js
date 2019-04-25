import React, { Component } from "react";
class Grid extends Component {
  constructor(props) {
    super(props);
    let repos = props.data || null;
    this.state = {
      repos,
      loading: repos ? false : true
    };
    this.fetchRepos = this.fetchRepos.bind(this);
  }

  componentDidMount() {
    console.log("here");
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id);
    }
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id)
    }
  }
  fetchRepos(lang) {
    this.setState(() => ({
      loading: true
    }));

    this.props.fetchInitialData(lang).then(response =>{
      this.setState(() => ({
        repos: response && response.data && response.data.items ? response.data.items : [],
        loading: false
      }))
    }
    );
  }
  componentDidUpdate (prevProps, prevState) {
  if (prevProps.match.params.id !== this.props.match.params.id) {
    this.fetchRepos(this.props.match.params.id)
  }
}
  render() {
    const { repos, loading } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    return (
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li>
                <a href={html_url}>{name}</a>
              </li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Grid;
