import React, { Component } from 'react';
import NewItems from './NewItems';
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Initialize articles as an empty array
      loading: false,
      page: 1,
      pageSize: 6,
      error: null, // Add an error state to handle API issues
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    this.setState({ loading: true, error: null }); // Reset error before fetching
    let url = `https://newsapi.org/v2/everything?q=tesla&apiKey=70360bb11e3b4f66a55a4dac4ffdfa7c&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      let passedData = await data.json();
      this.setState({
        articles: passedData.articles || [], // Safely set the articles (default to an empty array)
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.setState({ loading: false, error: 'Failed to load articles' });
    }
  }

  handlePreviousPage = () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1, loading: true }),
      this.fetchArticles
    );
  }

  handleNextPage = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1, loading: true }),
      this.fetchArticles
    );
  }

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div className='container my-3'>
        <h1 className="text-center">Top Headlines</h1>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <div className="row justify-content-center">
            {articles.length > 0 ? (
              articles.map((element) => (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewItems
                    title={element.title || "No title available"}
                    description={element.description || "No description available"}
                    ImageUrl={element.urlToImage}
                    newurl={element.url}
                  />
                </div>
              ))
            ) : (
              <p>No articles available</p>
            )}
          </div>
        )}
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePreviousPage}
          >
            &larr; Previous
          </button>
          <button
            disabled={articles.length < this.state.pageSize}
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
