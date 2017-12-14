var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "Film o czarodzieju",
    image: 'https://pbs.twimg.com/profile_images/876137969777823745/BE-fu86q_400x400.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://1.fwcdn.pl/ph/68/78/6878/213976.2.jpg'
  },
  {
    id: 3,
    title: 'Gra o Tron',
    desc: 'Serial o tronie z mieczy',
    image: 'http://ecsmedia.pl/c/piesn-lodu-i-ognia-tom-1-gra-o-tron-b-iext38002957.jpg'
  },
  {
    id: 4,
    title: 'Marsjanin',
    desc: 'Film o człowieku na marsie',
    image: 'https://i.wpimg.pl/O/392x330/d.wpimg.pl/804421186-1722836407/matt-damon-marsjanin.jpg'
  },
  {
    id: 5,
    title: 'Batman',
    desc: 'Film o człowieku nietoperzu',
    image: 'https://www.sideshowtoy.com/photo_902663_thumb.jpg'
  }
];
/*var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id}, 
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.image})  
  );
});*/

/*var element =
  React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
  );*/

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('li', {}, 
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieImg, {image: this.props.movie.image})  
      )
    );
  }
});
                          
var MovieTitle = React.createClass ({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    );  
  }
});

var MovieDescription = React.createClass ({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    );
  }
});

var MoviesList = React.createClass({
  propTypes: {
    moviesElements: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, 
          this.props.moviesElements.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
          })                   
        ))
    );
  }
});

var MovieImg = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      React.createElement('img', {src: this.props.image})
    );
  }
});




var element = React.createElement(MoviesList, {moviesElements: movies});
ReactDOM.render(element, document.getElementById('app'));



































