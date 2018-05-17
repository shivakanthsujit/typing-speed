var input = document.getElementById("testing");
var inputValue = document.getElementById("testing").value;

var para = document.querySelector("p");
var count = document.querySelector("h6");
var linebreak = document.createElement("br");

var txt = "welcome to type testing. test your typing speed today";
var expectedValue = document.getElementById("sampleText").value;
var isStart = 0;
var t0;
var eWords = txt.split(" ");
var wordCount ;
input.addEventListener("keyup", function() 
{	
	if(isStart == 0)
		{
			t0 = performance.now();
			wordCount = 1;
			isStart++;
		}
	inputValue = document.getElementById("testing").value;
	var len = inputValue.length ;
	var lastChar = inputValue.slice(-1);
	
  	var t=document.createTextNode(txt.slice(0,len));
  	var t2 = document.createTextNode(expectedValue);
  	
  	para.textContent = inputValue;

  	
  	var word = eWords[wordCount - 1].slice(0,len); 
  	if(word == inputValue)
	{
		count.textContent = "yes " + len + " " + word + " " + inputValue + " " + wordCount;
		input.classList.add("correct");
		input.style.borderColor = "#33CC00";
	}
	else
	{
		count.textContent = "no " + len + " " + word + " " + inputValue + " " + wordCount;
		input.classList.add("wrong");
		input.style.borderColor = "#FF0000";
	}
	count.appendChild(linebreak);
	
	var words = inputValue.split(" ");
		
  	if(lastChar == " ")
		{
			var temp = inputValue.slice(0,-1);
			if(temp == eWords[wordCount - 1])
			{
				wordCount++;
				input.value = "";
				input.style.borderColor = "black";
			}
		}
	var t1 =  performance.now() ;
	var tt = (t1 - t0)/1000;
	var wpm;
	if(wordCount > 0)
		wpm = wordCount/tt*60;
	else
		wpm = 0;
	wpm = Math.round(wpm);

	var wcTN = document.createTextNode(wordCount + " " + tt + " " + wpm);
	count.appendChild(wcTN);

	if( eWords.length == wordCount && eWords[wordCount - 1] == inputValue)
		{
			setTimeout(function(){ input.value = "Done";
			input.disabled = true; }, 1500);
			
			var message = "Your typing speed is " + wpm + " wpm.";
			setTimeout(function(){ alert(message); }, 2000);
		}
  
  
});