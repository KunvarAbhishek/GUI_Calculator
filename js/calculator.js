 const display = document.getElementById('answer');
 const buttons = document.querySelectorAll('button');

 let string = '';
 

 const allButtons = Array.from(buttons);

allButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "AC") {
        	updateHistory(e.target.innerHTML);
            string = '';
            display.value = string;
        } 

        else if (e.target.innerHTML == "DEL") {
        	updateHistory(string+" "+e.target.innerHTML);
            string = string.substring(0, string.length - 1);
            display.value = string;
            updateHistory(string);
        } 

        else if (e.target.innerHTML == '=') {
        	temp=string
            try {
                string = eval(string).toString();
            } catch {
                string = "Error";
            }
            display.value = string;
            updateHistory(temp+e.target.innerHTML+" "+string)

        }

    	else {
	        string += e.target.innerHTML;
	        display.value = string;
	        if (["+", "-", "/", "%", "*"].includes(e.target.innerHTML)) {
    			updateHistory(string);
			}

        }
         
    });
});

function updateHistory(result) {
    const newOperation = document.createElement('li');
    newOperation.textContent = result;
    const operations = document.querySelector('#operation');
    operations.appendChild(newOperation);

    const val = operations.querySelectorAll('li');
    if (val.length > 25) {
        while (operations.querySelectorAll('li').length > 25) {
            operations.querySelector('li').remove();
        }
    }
}

