export function has31DaysUsingIfElse(month) {
  if (month === "Jan") return true;
  else if (month === "Mar") return true;
  else if (month === "May") return true;
  else if (month === "Jul") return true;
  else if (month === "Aug") return true;
  else if (month === "Oct") return true;
  else if (month === "Dec") return true;
  else return false;
}

export function has31DaysUsingSwitch(month) {
  switch (month) {
    case "Jan":
    case "Mar":
    case "May":
    case "Jul":
    case "Aug":
    case "Oct":
    case "Dec":
      return true;
    default:
      return false;
  }
}
