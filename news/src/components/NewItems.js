import React, { Component } from 'react';

export class NewItems extends Component {
  render() {
    let { title, description, ImageUrl, newurl } = this.props;
    let fallbackImage = "https://via.placeholder.com/150";

    return (
      <div className='my-3'>
        <div className="card" style={{ width: '18rem' }}>
          <a rel="noreferrer" href={newurl} target='_blank'>
            <img 
              src={ImageUrl ? ImageUrl : fallbackImage}
              className="card-img-top" 
              alt={title}
              onError={(e) => e.target.src = fallbackImage}
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newurl} target='_blank' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItems;
