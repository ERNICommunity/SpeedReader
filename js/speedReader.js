var listOfWords = new Array("Lorem", "ipsum", "dolor", "sit");
var currentWord = 0;
var wordsPerMinuteValue = 250;
var typeOfMarkingValue = 1;

var firstVowel = 1;
var middleVowel = 2;

function configure( wordsPerMinute )
{
	wordsPerMinuteValue = wordsPerMinute;
}

function configure( wordsPerMinute, typeOfMarking )
{
	wordsPerMinuteValue = wordsPerMinute;
	typeOfMarkingValue = typeOfMarkingValue;
}

function init( totalString )
{
	//TODO
	var tmp = totalString; // "adfkujghasldkf alskdflklk";
	listOfWords = tmp.split(/\s+/);
}

function next( )
{
	if( listOfWords.length <= currentWord)
	{
		return null;
	}
	
	currentWord++;
	var nextWord = listOfWords[ currentWord ];
	var number = getMark( nextWord );
	var timeValue = 60 / wordsPerMinuteValue;
	
	return { value:nextWord, mark:number, time:timeValue};
}

function previous()
{
	if( listOfWords.length >= currentWord)
	{
		return null;
	}
	
	currentWord--;
	var nextWord = listOfWords[currentWord];
	var number = getMark( nextWord );
	var timeValue = 60 / wordsPerMinuteValue;
	
	return { value:nextWord, mark:number, time:timeValue};
}

function getMark( wordToMark )
{
	var retNumber = 0;
	if( typeOfMarkingValue == firstVowel )
	{
		retNumber = wordToMark.search(/[aeiouAEIOU]/);
	}
	else if( typeOfMarkingValue == firstVowel )
	{
		//TODO
	}
	
	if( retNumber == undefined || retNumber == null || undefined < 1 )
	{
		return 1;
	}
	
	return retNumber;
}

function exec()
{
	var tmp = next();
	document.getElementById('field').text = tmp.value + " " + tmp.mark + " " + tmp.time ;
	alert( document.getElementById('field').text );
}