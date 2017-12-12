var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "Film o czarodzieju",
    image: '<img src="https://pbs.twimg.com/profile_images/876137969777823745/BE-fu86q_400x400.jpg">'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: '<img src="http://1.fwcdn.pl/ph/68/78/6878/213976.2.jpg">'
  },
  {
    id: 3,
    title: 'Gra o Tron',
    desc: 'Serial o tronie z mieczy',
    image: '<img src="http://ecsmedia.pl/c/piesn-lodu-i-ognia-tom-1-gra-o-tron-b-iext38002957.jpg">'
  },
  {
    id: 4,
    title: 'Marsjanin',
    desc: 'Film o człowieku na marsie',
    image: '<img src="https://i.wpimg.pl/O/392x330/d.wpimg.pl/804421186-1722836407/matt-damon-marsjanin.jpg">'
  },
  {
    id: 5,
    title: 'Batman',
    desc: 'Film o człowieku nietoperzu',
    image: '<img src="https://www.sideshowtoy.com/photo_902663_thumb.jpg">'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id}, 
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
  );
});

var element =
  React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
  );



ReactDOM.render(element, document.getElementById('app'));