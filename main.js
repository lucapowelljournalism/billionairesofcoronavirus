$("body").on("click", function (e) {
	e.preventDefault();

	this_tile = e.target.id //returns string with ID
	console.log(this_tile) //

	if (this_tile == "jackma") {
		$(".jackmaoutput").addClass("active")
		$(".billgatesoutput").removeClass("active")
		$(".jeffbezosoutput").removeClass("active");;
	} else if (this_tile == "billgates") {
		$(".jackmaoutput").removeClass("active")
		$(".billgatesoutput").addClass("active")
		$(".jeffbezosoutput").removeClass("active");;
	} else if (this_tile == "jeffbezos") {
		$(".jackmaoutput").removeClass("active")
		$(".billgatesoutput").removeClass("active")
		$(".jeffbezosoutput").addClass("active");
	} else if (this_tile == "clear") {
		$(".jackmaoutput").removeClass("active")
		$(".billgatesoutput").removeClass("active")
		$(".jeffbezosoutput").removeClass("active");
	}

});