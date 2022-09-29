'use strict';

angular.module('MGL_Task1_app').controller('GameController',
		[ 'GameService', function(gameService) {
			var self = this;
			self.game = {};
			self.games = [];

			self.fetchAllGames = function(){
				gameService.fetchAllGames().then(function(data) {
					self.games = data;
				});
			}

			self.addGame = function(){
				return gameService.createGame(self.game).then( function() {
				self.fetchAllGames();
				});
			}

			self.fetchAllGames();
		} ]);
