function printSeasonByMonth(month) {
    switch (month) {
      case "DECEMBER":
      case "JANUARY":
      case "FEBRUARY":
        console.log("winter");
        break;
      case "MARCH":
      case "APRIL":
      case "MAY":
        console.log("spring");
        break;
      case "JUNE":
      case "JULY":
      case "AUGUST":
        console.log("summer");
        break;
      case "SEPTEMBER":
      case "OCTOBER":
      case "NOVEMBER":
        console.log("autumn");
        break;
      default:
        console.log("Invalid month");
    }
  }
  
  printSeasonByMonth("SEPTEMBER"); // autumn
  printSeasonByMonth("NOVEMBER");  // autumn
  printSeasonByMonth("JULY");      // summer
  printSeasonByMonth("APRIL");     // spring
  printSeasonByMonth("AMY");     // Invalid month