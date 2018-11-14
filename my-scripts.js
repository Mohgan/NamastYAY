// Set Count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)
}

// Update Count
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

// Add 1 to count
function plusOne(){
	localStorage.setItem("count",Number(localStorage.getItem("count")) + 1)
	update()
}

// Reset count
function reset(){
	if(confirm("Are you sure?")){
		localStorage.setItem("count",0)
		update()
	}
}