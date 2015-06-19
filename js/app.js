var number_of_conditions = 5;

function show_answer(option){
 
	var answer;

	switch(option){
		case 0:
			answer = "I like coding";
			break;
		case 1:
			answer = "I like Toronto";
			break;
		case 3:
			answer = "I am here for 10 weeks";
			break;
		case 4:
			answer = "I live at my sisters";
			break;
		case 5:
			answer = "this course is well run";
	}


	display_answer(answer);
}