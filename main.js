$("body").on("click", ".tile", function (e) {
	e.preventDefault();

	const click_face = e.target; // #identifies the div we want as clickface.
	const target = $(click_face).data("target"); // "gets data attribute #(variablename) from click face."
	console.log(target) //prints out "#jackma"

	$(".output.active").removeClass("active"); //hide any text that was showing from a prior billionaire
	$(target).addClass("active"); //add active class, aka display:block, to this text
});