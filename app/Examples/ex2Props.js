import React from 'react';
import ReactDOM from 'react-dom';

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.commentText}
      </div>
    );
  }
});

class ex2Props extends React.Component{
    render(){
        return(
            <Comment author={this.props.author} commentText={this.props.commentText}/>
        )
    } 
}

module.exports = ex2Props;