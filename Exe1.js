const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// accepting values from user
//console.log("Please enter first value");

var string2, string1;
rl.question('Please enter the first string : ', (answer) => {
    string1 = answer;
    rl.question('Please enter the second string : ', (answer2) => {
        string2 = answer2;
        rl.close();
        //console.log("event as", string1, string2);
        getLCS(string1, string2); // now we itterate over the string to find the common sequence
    });
});

function getLCS(str1, str2) {
    var result;
    
    var temp1 = new String(  );
    var secondIndex;//index to be saved for second array
    var strLen = str1.length;// length of first string
    var itteration=0;
    while (strLen > 0) {
        for (var i = itteration; i < str1.length; i++) {

            console.log("i,str1.length",i,str1.length);
            //console.log("itteration and values outer most loop",i,str1.charAt(i));
            // //console.log(str1.charAt(i));
            console.log("temp1",temp1);
            if (temp1=="") {// first usage

                for (var j = 0; j < str2.length; j++) {
                    //console.log("first nested check",i,j,str1.charAt(i) == str2.charAt(j),str1.charAt(i) , str2.charAt(j));
                    console.log("i,j,ch1,ch2",i,j,str1.charAt(i),str2.charAt(j));
                    if (str1.charAt(i) == str2.charAt(j)) {
                        //console.log("character matched",str1.charAt(i),i,str2.charAt(j));
                        if(temp1==""){
                            temp1=str2.charAt(j);
                            
                        secondIndex = j;
                        //console.log("value pushed in temp  and from index in second",temp1,secondIndex);
                        console.log("1--->secondIndex,temp1,str2.(charAt(j))",secondIndex,temp1,str2.charAt(j));
                        break;
                        }
                        else{
                            temp1.concat(temp1, str2.charAt(j));
                        secondIndex = j;
                            temp1=str2.charAt(j);
                            //console.log("value obtained in empty temp and at index",temp1,j);
                            console.log("2--->secondIndex,temp1,str2.(charAt(j))",secondIndex,temp1,str2.charAt(j));
                            break;
                        }
                        
                    }
                }
                
            }
            else {// when temp has value and we are looking for secon sub sequence character
                
                for (var j = secondIndex + 1; j < str2.length; j++) {
                    console.log("2--->i,j,ch1,ch2",i,j,str1.charAt(i),str2.charAt(j));
                   
                    if (str1.charAt(i) == str2.charAt(j)) {
                        console.log("temp-->ka panga",temp1.concat(str2.charAt(j)));
                        temp1=temp1.concat( str2.charAt(j));
                        secondIndex = j;
                        console.log("temp on second match",temp1);
                        break;
                    }
                }
            }
        }// outer loop
        console.log("one itteration done",result,temp1);
        if (result == null ||result==undefined|| result == "" || result < temp1) {
            result = temp1;
            temp1 = null;
        }
        else {
            temp = null;
        }
        //console.log("strLen and Itteration",strLen,itteration);
        strLen--;
        itteration++;
        //console.log("A--->",strLen,itteration);
    }
    console.log("Hopefully we got the solution--->",result);
}