(function btcent() {
	$.ajax({
		type: 'get',
		url: 'https://api.coindesk.com/v1/bpi/currentprice/USD.json',
		dataType: 'json', 
		success: function(data) {
			var value = `${(0.5 / data.bpi.USD.rate_float).toFixed(8)} BTC`;
			var time = data.time.updated
			$('.value').html(value);
			document.getElementById('time').title = `Updated: ` + time;
		},
		error : function(data){
			$('.value').html('ERROR!');
			document.getElementById('time').title = null;
		},
		complete: function() {
				setTimeout(btcent, 60000);
		}
	});
})();