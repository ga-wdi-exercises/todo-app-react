// var CommentForm = React.createClass({
//   getInitialState: function() {
//     return {author: '', text: ''};
//   },
//   handleAuthorChange: function(e) {
//     this.setState({author: e.target.value});
//   },
//   handleTextChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var text = this.state.text.trim();
//     if (!text || !author) {
//       return;
//     }
//     // TODO: send request to the server
//     this.setState({author: '', text: ''});
//   },
//   render: function() {
//     return (
//       <form className="commentForm" onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add a task"
//           value={this.state.text}
//           onChange={this.handleTextChange}
//         />
//         <input type="submit" value="Post" />
//       </form>
//     );
//   }
