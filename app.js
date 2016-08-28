$(document).ready( function() {

	var letter = ""

	var findWinner = function(){
		
		
		if (($('.topleft').text() == ('X')) && ($('.topcenter').text() == ('X')) && ($('.topright').text() == ('X'))) {
			letter = 'X'
			gameOver();
		}

		if (($('.midleft').text() == ('X')) && ($('.midcenter').text() == ('X')) && ($('.midright').text() == ('X'))) {
			letter = 'X'
			gameOver();
		}
		

		if (($('.bottomleft').text() == ('X')) && ($('.bottomcenter').text() == ('X')) && ($('.bottomright').text() == ('X'))) {
			letter = 'X'
			gameOver();
		}
		if (($('.topleft').text() == ('O')) && ($('.topcenter').text() == ('O')) && ($('.topright').text() == ('O'))) {
			letter = 'O'
			gameOver();
		}
		if (($('.midleft').text() == ('O')) && ($('.midcenter').text() == ('O')) && ($('.midright').text() == ('O'))) {
			letter = 'O'
			gameOver();
		}
		if (($('.bottomleft').text() == ('O')) && ($('.bottomcenter').text() == ('O')) && ($('.bottomright').text() == ('O'))) {
			letter = 'O'
			gameOver();
		}
		if (($('.topleft').text() == ('X')) && ($('.midleft').text() == ('X')) && ($('.bottomleft').text() == ('X'))) {
			letter = 'X'
			gameOver();
		}
		
		if (($('.topcenter').text() == ('X')) && ($('.midcenter').text() == ('X')) && ($('.bottomcenter').text() == ('X'))) {
			letter = 'X'
			gameOver();
		}
		if (($('.topright').text() == ('X')) && ($('.midright').text() == ('X')) && ($('.bottomright').text() == ('X'))) {
			letter = 'X'
			gameOver();
		}
		if (($('.topleft').text() == ('O')) && ($('.midleft').text() == ('O')) && ($('.bottomleft').text() == ('O'))) {
			letter = 'O'
			gameOver();
		}
		if (($('.topcenter').text() == ('O')) && ($('.midcenter').text() == ('O')) && ($('.bottomcenter').text() == ('O'))) {
			letter = 'O'
			gameOver();
		}
		if (($('.topright').text() == ('O')) && ($('.midright').text() == ('O')) && ($('.bottomright').text() == ('O'))) {
			letter = 'O'
			gameOver();
		}
	}

	var gameOver = function(){
		$('.winnerbox').html('Game over! '+letter+' wins!');
		$('#gameboard').hide();
		$('.pandapanda').append('<img src=happypanda.jpg>');
	}

	var newGame = function(){
		$('#gameboard').show();
		$('.winnerbox').html("");
		$('td').html("").css('background-color','white');
		$('.pandapanda img').remove();


	}

	
	turn = 0
	$("td").click(function(){
		if ($(this).children('span').length>0){
			console.log("occupied");
		}
				else {
			turn++
			if (turn%2 == 0){
			$(this).html("<span class='x'>X</span>").css('background-color','#1ad1ff');
			}
			else {
			$(this).html("<span class='o'>O</span>").css('background-color','#ff66cc');
			}
			findWinner();
		}
	$('#newGameButton').click(function(){
		newGame();
	})
	})
	






});