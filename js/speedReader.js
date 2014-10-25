var listOfWords = new Array("Lorem", "ipsum", "dolor", "sit");
var currentWord = 0;
var wordsPerMinuteValue = 250;


var metrics = { 
		FIRST_VOWEL: "Use first vowel", 
		LEFT_MIDDLE_VOWEL: "Use the vowel left from the middle",
		RIGHT_MIDDLE_VOWEL: "Use the vowel right from the middle"
	}

var speed_metrics = { 
		ALL_SAME: "All length are equals", 
		DURATION_BY_WORDLENGTH: "Duration is calculated by length of the words",
		RANDOM_DIFF: "Duration +- 10 % for testing"
	}

var typeOfMarkingValue = metrics.FIRST_VOWEL;
var typeOfSpeedMetricValue = speed_metrics.ALL_SAME;

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
	var timeValue = null;
	
	
	if( speed_metrics == speed_metrics.ALL_SAME )
	{
		timeValue = 60 / wordsPerMinuteValue;
	}
	else if( speed_metrics == speed_metrics.DURATION_BY_WORDLENGTH )
	{
		timeValue = 60 / wordsPerMinuteValue;
		//TODO NOT FINISHED
	}
	else if( speed_metrics == speed_metrics.RANDOM_DIFF )
	{
		timeValue = 60 / wordsPerMinuteValue;
		var num = Math.random();
		num = num + 0.5;
		timeValue = timeValue * num;
	}
	
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
	if( typeOfMarkingValue == metrics.FIRST_VOWEL )
	{
		retNumber = wordToMark.search(/[aeiouAEIOU]/);
	}
	else if( typeOfMarkingValue == metrics.LEFT_MIDDLE_VOWEL )
	{
		var split = wordToMark.substr( 0, (wordToMark.length) / 2).split("");
		retNumber = split.length - split.reverse().join("").search(/[aeiouAEIOU]/) -1;
	}
	else if( typeOfMarkingValue == metrics.RIGHT_MIDDLE_VOWEL )
	{
		var split = wordToMark.substr( (wordToMark.length + 1) / 2);
		retNumber = ((wordToMark.length + 1) / 2) + split.search(/[aeiouAEIOU]/);
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

function test()
{
	alert("AJGKHBGJJB");
}