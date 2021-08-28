module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    console.log(`current = ${current}`);


    if (IsOpenBracket(current, bracketsConfig)) {
      if (!AreBracketsEquals(current, bracketsConfig)) {
        console.log('Current is open bracket');
        stack.push(current);
        console.log(stack);
      }
      else if (stack.length === 0) {
        stack.push(current);
      }
      else if (stack[stack.length - 1] === current) {
        stack.pop();
      }
    }
    else if (stack.length === 0) {
      console.log('Current is not open bracket and stack length = 0');
      return false;
    }
    else {
      console.log('Current is not open bracket and stack != 0');
      let bracket = GetOpenBracket(current, bracketsConfig);
      console.log(`Open bracket for ${current} - ${bracket}`);
      if (bracket === -1) return false;
      
      if (bracket === stack[stack.length - 1]) {
        console.log('Stack before popping');
        console.log(stack);
        stack.pop();
        console.log('Stack after popping');
        console.log(stack);
      }
      else return false;
    }
  }
  console.log(`stack length = ${stack.length}`);
  console.log(`stack length === 0 ? ${stack.length === 0}`);
  return stack.length === 0;
}

function IsOpenBracket(bracket, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0].includes(bracket)) {
      console.log(`bracket = ${bracket}`);
      console.log(`bracketsConfig[${i}][0] = ${bracketsConfig[i][0]}`);
      console.log(`bracketsConfig[${i}][0] includes ${bracket}`);
      console.log('bracket is open bracket');
      return true;
    }
  }

  return false;
}

function AreBracketsEquals(bracket, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    let firstBracket = bracketsConfig[i][0];
    let secondBracket = bracketsConfig[i][1];
    if (firstBracket.includes(bracket) && bracket === secondBracket) return true;
  }

  return false;
}

function GetOpenBracket(closeBracket, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    let index = bracketsConfig[i].indexOf(closeBracket);
    if (index != -1) return bracketsConfig[i][0];
  }

  return -1;
}

// let str = '||';
// let ar = [['|', '|']];
// console.log(check(str, ar));