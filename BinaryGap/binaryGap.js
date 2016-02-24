// Author: Charlene Chen
// Find longest sequence of zeros in binary representation of an integer.

function solution(N) {
    
    var binaryGap = 0;
    var binaryRepresentation = [];
    binaryRepresentation = N.toString(2);
    
    // the most intuitive solution
    var firstFlag = 0
    for(var i in binaryRepresentation) {
        if(binaryRepresentation[i] == 0){
            continue;
        }else {
            if(i - firstFlag > 0){
                var tmp = i - firstFlag - 1;
                binaryGap = tmp > binaryGap? tmp : binaryGap;
                firstFlag = i;
            }
            
        }
    }
    return binaryGap;
}