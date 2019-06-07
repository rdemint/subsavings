function calculateProgress() {

	var savings = totalSavings();
	console.log(savings);
	var goals = goalAmounts();
	updateProgressBars(goals, savings);


	function totalSavings() {
		return document.getElementById("totalSavings").value;
	}

	function goalAmounts() {
		var goalLength = 3;
		var goals = [];

		for (let i = 1; i < goalLength + 1; i++) {
			let goalId = "goal" + i;
			let goalValue = Number(document.getElementById(goalId).value);
			goals.push({'goalId':goalId, 'value': goalValue, 'id': i});
		}
		goals = goals.sort((a,b)=> a.value - b.value);
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
		return goals
	}
}
	
function updateProgressBars(goals, totalSavings) {
	var savings = totalSavings;
	for (let i=0; i< goals.length; i++) {
		if(goals[i].value < totalSavings) {
			setProgressBar(goals[i].id, 100);
			savings = savings - goals[i].value;
		}

		else {
			let percentContrib = (totalSavings / goals[i].value)*100;
			setProgressBar(goals[i].id, percentContrib);
			savings = 0;
		}

	function resetProgressBar(goals) {
		for (let i =0; i< goals.length; i++) {
			setProgressBar(goals[i].id, 0)
		}
	}

	function setProgressBar(id, value) {
		let progressBarVal = String(value) + "%";
		let progressBarId = 'progressBar' + String(id);
		document.getElementById(progressBarId).style.width = progressBarVal;
	}

	}
}




