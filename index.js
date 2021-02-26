function scuberGreetingForFeet(feet){
  // Write your code here!
  let greetingForFeet = '';
  if (feet <= 400) {
    greetingForFeet = 'This one is on me!';
  }
  else if (feet > 2000 && feet <= 2500) {
    greetingForFeet = 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    greetingForFeet = 'No can do.'
  }
  return greetingForFeet;
}

function ternaryCheckCity(city){
  // Write your code here!
  const isNYC = (city === 'NYC') ? true:false
  let cityCheck = ''
  if (isNYC === true) {
    cityCheck = 'Ok, sounds good.'
  }
  else {
    cityCheck = 'No go.'
  }
  return cityCheck;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message = '';
  switch (tip) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.'
      break;
    default: 
      message = 'Bye.'
      break;
  }
  return message;
}