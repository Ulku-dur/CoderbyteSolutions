function CountingMinutes(str) {
    // Split the start and end times from the input string
    const [startTime, endTime] = str.split("-");
  
    // Convert the start and end times to minutes from midnight
    const startMinutes = getMinutesFromMidnight(startTime);
    const endMinutes = getMinutesFromMidnight(endTime);
  
    // Calculate the time difference, ensuring that it's a positive value
    const timeDiff = (endMinutes - startMinutes + 1440) % 1440;
  
    // Return the time difference in minutes
    return timeDiff;
  }
  
  function getMinutesFromMidnight(timeStr) {
    // Split the hours and minutes from the time string
    const [hourStr, minuteStr] = timeStr.slice(0, -2).split(":");
  
    // Convert the hours and minutes to integers
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
  
    // Determine if the time is in the PM
    const isPM = timeStr.slice(-2) === "pm";
  
    // Convert the time to minutes from midnight
    const totalMinutes = hour * 60 + minute;
    return isPM ? totalMinutes + 720 : totalMinutes;
  }
     
  // keep this function call here 
  console.log(CountingMinutes(readline()));