function Result(setfristNumumber, fristNumumber, operators, SecondNumber) {
  switch (operators) {
    case "+":
      setfristNumumber(parseInt(SecondNumber) + parseInt(fristNumumber));
      break;
    case "-":
      setfristNumumber(parseInt(SecondNumber) - parseInt(fristNumumber));
      break;
    case "*":
      setfristNumumber(parseInt(SecondNumber) * parseInt(fristNumumber));
      break;
    default:
      setfristNumumber(parseInt(SecondNumber) / parseInt(fristNumumber));
      break;
  }
  return setfristNumumber;
}
export default Result;
