var app = angular.module('myApp', []);
 
app.controller('myCtrl', function($scope) {
 
 var word = '';
 var decWord = '';
 
$scope.convert = function() {
 
        $scope.amt = $scope.amount;
 
$scope.int = $scope.myInt;
 
 
 
if($scope.amt === undefined  || $scope.int === undefined ){
 
alert("Enter amount or conversion");
 
 
 
}else{
	
	var numberCheck = $scope.amt;
	var myNum = numberCheck.replace(",","");
	var myNum = myNum.replace(".","");
	
	if(isNaN(myNum)){
		alert("Not a munber");
	}else{
		var curr ='';
		var tempArr='';
		var number ='';
		var decimal ='';
		var amount = $scope.amt;
		if($scope.int == 'euro'){
		 curr=' euro';
		  myNum = amount.replace(".","#");
		  myNum = myNum.replace(",",".");
		  myNum = myNum.replace("#",",");
		 tempArr = myNum.split(".");
		  number = tempArr[0].split(",").join("");
		  
		  
		  decimal = tempArr[1];
		  
		}else{
		curr=' dollar';
		tempArr = amount.split(".");
			number = tempArr[0].split(",").join("");
			decimal = tempArr[1];
		}
		 
		wordConvert((number/1000000000)," Hundred");
		wordConvert((number/10000000)%100," crore");
		wordConvert(((number/100000)%100)," lakh");
		wordConvert(((number/1000)%100)," thousand");
		wordConvert(((number/100)%10)," hundred");
		wordConvert((number%100)," ");
		 word = word + curr;
		 
		 if(decimal != ''){
			decimal = decimal.slice(0,2);
			wordConvert((decimal/1000000000)," Hundred");
			wordConvert((decimal/10000000)%100," crore");
			wordConvert(((decimal/100000)%100)," lakh");
			wordConvert(((decimal/1000)%100)," thousand");
			wordConvert(((decimal/100)%10)," hundred");
			wordConvert((decimal%100)," ");
			word = word +   " cents"  ; 
		
		 }
		alert(word);
		word=''; 
	}
}
 
 
}
 
 
function wordConvert(m,ch){
var m = Math.trunc(m);
var one =[" "," one"," two"," three"," four"," five"," six"," seven"," eight"," Nine"," ten"," eleven"," twelve"," thirteen"," fourteen","fifteen"," sixteen"," seventeen"," eighteen"," nineteen"];
 
    var ten =[" "," "," twenty"," thirty"," forty"," fifty"," sixty","seventy"," eighty"," ninety"];
    if(m > 19) 
{ 
word = word + ten[Math.trunc(m/10)]+" "+one[m%10];
} 
else 
{ word = word +one[m];}
 
    if(m > 0)word = word + ch;
}
 
 
  
 
});
