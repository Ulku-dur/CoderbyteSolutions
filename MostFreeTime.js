function MostFreeTime(strArr) { 
    // create an empty array to store the minutes of each event
    var minArr = []
    // create a variable to keep track of the longest free time
    var longest = 0
    
    // function to convert a time string to minutes
    function timeCalc(time) {
        var min = 0
        // add 12 hours (720 minutes) for pm times
        if(time.match(/pm/i)) {
            min += 720
        }
        // add the hours converted to minutes
        if(time.split(':')[0] !== '12') {
           min += time.split(':')[0] * 60
        } 
        // add the minutes
        min += Number(time.split(':')[1].match(/[0-9][0-9]/)[0])
        return min
    }
    
    // loop through the array of events and convert each time to minutes
    for(var i = 0; i < strArr.length; i++) {
        var time1 = strArr[i].split('-')[0]
        var time2 = strArr[i].split('-')[1]
        minArr.push([timeCalc(time1), timeCalc(time2)])
    }    
    
    // sort the array of minutes in ascending order
    minArr.sort(function(a, b) {
        return a[0] - b[0]
    })
    
    // loop through the sorted array and find the longest free time
    for(var j = 0; j < minArr.length - 1; j++) {
        if(longest < minArr[j + 1][0] - minArr[j][1]) {
            longest = minArr[j + 1][0] - minArr[j][1]
        }
    }
    
    // convert the longest free time to hours and minutes
    var hours = 0
    while(longest >= 60) {
        longest -= 60;
        hours ++
    }
    
    // add a leading zero if necessary for single-digit minutes and hours
    if(hours.toString().length === 1) {
        hours = "0" + hours
    }
    if(longest.toString().length === 1) {
        return hours + ":0" + longest
    } else {
        return hours + ":" + longest
    }
}

   
// keep this function call here 
console.log(MostFreeTime(readline()));