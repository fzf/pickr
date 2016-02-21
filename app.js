angular
.module('pickrApp', ['gajus.swing'])
.controller('cardsController', function ($scope) {
  $scope.cards = [
    {
      "id": 132002,
      "omdb_id": 137523,
      "imdb_id": "tt0137523",
      "title": "Fight Club",
      "year": 1999,
      "rating": "R",
      "runtime": "139 min",
      "genre": "Drama",
      "released": "1999-10-15",
      "director": "David Fincher",
      "writer": "Chuck Palahniuk (novel), Jim Uhls (screenplay)",
      "cast": "Edward Norton, Brad Pitt, Helena Bonham Carter, Meat Loaf",
      "metacritic": 66,
      "imdbRating": "8.8",
      "imdbVotes": 1254308,
      "poster": "http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX300.jpg",
      "plot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...",
      "fullPlot": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "language": "English",
      "country": "USA, Germany",
      "awards": "Nominated for 1 Oscar. Another 8 wins & 27 nominations.",
      "lastUpdated": "2016-01-04T21:52:29.143Z",
      "kind": "movie",
      "created_at": "2016-01-21T09:34:36.882Z",
      "updated_at": "2016-01-21T09:34:36.882Z"
    }
  ];


  $scope.throwout = function (eventName, eventObject) {
  };

  $scope.throwoutleft = function (eventName, eventObject) {
  };

  $scope.throwoutright = function (eventName, eventObject) {
  };

  $scope.throwin = function (eventName, eventObject) {
  };

  $scope.dragstart = function (eventName, eventObject) {
  };

  $scope.dragmove = function (eventName, eventObject) {
  };

  $scope.dragend = function (eventName, eventObject) {
  };

  $scope.options = {
    throwOutConfidence: function (offset, elementWidth) {
      console.log('throwOutConfidence', offset, elementWidth);
      return Math.min(Math.abs(offset) / elementWidth, 1);
    },
    isThrowOut: function (offset, elementWidth, throwOutConfidence) {
      console.log('isThrowOut', offset, elementWidth, throwOutConfidence);
      return throwOutConfidence === 1;
    }
  };
});
