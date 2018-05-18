var input = document.getElementById("testing");
var inputValue = document.getElementById("testing").value;

var para = document.querySelector("p");

var txt = [	"Nothing is more painful to the human mind than, after the feelings have been worked up by a quick succession of events, the dead calmness of inaction and certainty which follows and deprives the soul both of hope and fear. Justine died, she rested, and I was alive.",
			"To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.",
			"Suddenly she came upon a little three-legged table, all made of solid glass; there was nothing on it except a tiny golden key, and Alice's first thought was that it might belong to one of the doors of the hall; but, alas! either the locks were too large, or the key was too small, but at any rate it would not open any of them." ];
var txtNo = ( Math.floor((Math.random() * 10) + 1) ) % 3 ;
var isStart = 0;
var t0;
var eWords = txt[txtNo].split(" ");
var wordCount ;
para.textContent = txt[txtNo];
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
	
  	var word = eWords[wordCount - 1].slice(0,len); 
  	if(word == inputValue)
	{
		input.classList.add("correct");
		input.style.borderColor = "#33CC00";
	}
	else
	{
		input.classList.add("wrong");
		input.style.borderColor = "#FF0000";
	}
	
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
	input.placeholder = eWords[wordCount-1];
	
	var t1 =  performance.now() ;
	var tt = (t1 - t0)/1000;
	var wpm;
	if(wordCount > 0)
		wpm = wordCount/tt*60;
	else
		wpm = 0;
	wpm = Math.round(wpm);

	
	if( eWords.length == wordCount && eWords[wordCount - 1] == inputValue)
		{
			input.placeholder = " ";
			setTimeout(function(){ input.value = "Done";
			input.disabled = true; }, 1500);
			
			var message = "Your typing speed is " + wpm + " wpm.";
			setTimeout(function(){ alert(message); }, 2000);
		}
  
  
});