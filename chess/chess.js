// let pieces=[
//     ["B"," ","K"," "," ","P"," ","P"],
//     [" "," "," ","P"," "," "," ","P"],
//     ["B"," ","K"," "," ","K"," ","P"],
//     [" "," ","B"," ","B"," "," ","P"],
//     ["K"," "," ","B"," "," "," ","P"],
//     ["K"," "," ","B"," "," "," ","P"],
//     ["K"," "," ","B"," "," "," ","P"],
//     ["K"," "," ","P"," "," "," ","P"]
// ];

// for (let i = 0; i < 8; i++) {
//     console.log("\n---------------------------------");
//     process.stdout.write("| ");
//     for (let j = 0; j < 8; j++) {
//         process.stdout.write(pieces[i][j]+" | ");
//     }

// fs.writeFile("pieces.json", JSON.stringify(data), () =>
//   console.log("file has been written")
// );

    
// }
// process.stdout.write("\n---------------------------------\n");
function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}
(function($){
	$.fn.chess = function(){
		return this.each(function(){
			var elem = randomString();
			$(this).addClass(elem);
			var elem = "." + elem;
			var blackPieces = [
				"&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"
			];
			var whitePieces = [
				"&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"
			];
			$('<style>'+ elem +' table {margin:.5em auto 0;border:solid indianred;border-width:0 1em}'+ elem +' td {text-align: center;width:1.04em;height:1.04em;overflow:hidden;font:4em/1 "MS Gothic","Segoe UI Symbol","DejaVu Sans";cursor:pointer;background:#f0d9b5;}'+ elem +' td[lang="0"] {outline:thin solid #a00;color:#800}'+ elem +' tr:nth-child(odd) td:nth-child(even), '+ elem +' tr:nth-child(even) td:nth-child(odd) {background:tan}</style>').appendTo("body");
			var board = "<table class='chessBoard'><tbody>";
				for (i = 1; i < 9; i++){
					board += "<tr>";
						for(p = 0; p < 8; p++){
							var block = ( (i * 10) + 11 ) + p;
							if( i == 1 || i == 8 ){
								piece = i == 1 ? blackPieces[p] : whitePieces[p];
							}else if( i == 2 || i == 7){
								piece = i == 2 ? "&#9823;" : "&#9817;";
							}else{
								piece = "";
							}
							board += "<td data-id='"+ block +"' id='c"+ block +"'>"+ $("<span></span>").html(piece).html() +"</td>";
						}
					board += "</tr>";
				}
			board += "</tbody></table>";
			$(this).html(board);
			
			/* Add event listeners */
			$(document).on("click", elem + " .chessBoard td", function(){
				id = $(this).data("id");
				I[b = id] & 8 ? F(B=b) : F(0, y, 1, 0);
			});
		});
	};
})(jQuery);