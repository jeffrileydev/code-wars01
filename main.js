//Description:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter((v) => typeof v == 'number')
}
//Return the quarter of the year by the month given only integers

const quarterOf = (month) => {
  if (month > 0 && month <= 3) {
    return 1
  } else if (month > 3 && month <= 6) {
    return 2
  } else if (month > 6 && month <= 9) {
    return 3
  } else if (month > 9 && month <= 12) {
    return 4
  }
}

//Give a grade based on the average of 3 scores

function getGrade(s1, s2, s3) {
  let check = (s1 + s2 + s3) / 3

  if (check >= 90 && check <= 100) {
    return 'A'
  } else if (check >= 80 && check < 90) {
    return 'B'
  } else if (check >= 70 && check < 80) {
    return 'C'
  } else if (check >= 60 && check < 70) {
    return 'D'
  } else if (check >= 0 && check < 60) {
    return 'F'
  }
}

// Refactor'd
function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3
  if (avg < 60) return 'F'
  else if (avg < 70) return 'D'
  else if (avg < 80) return 'C'
  else if (avg < 90) return 'B'
  else return 'A'
}

//return  character given ASCII number
function getChar(c) {
  return String.fromCharCode(c)
}

//return the neg or pos opposite of the value in the array
function invert(array) {
  return array.map((i) => 0 - i)
}

// 1/27 code wars

// find cuboid volume difference given two 3-item arrays, a & b
function findDifference(a, b) {
  return Math.abs(
    a.reduce((previous, current) => previous * current, 1) -
      b.reduce((previous, current) => previous * current, 1)
  )
}

//Divide

const solve = (x, y) => x / y

//get the opposite of a number given a number
const opposite = (number) => -number

// sum ONLY the positive numbers in a mixed array
// used filter + reduce both
function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((a, c) => a + c, 0)
}

//Find the first non-consecutive numbers in an array of ascending #s
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }

    return null
  }
}

//return the average of an array rounded down
function getAverage(marks) {
  sum = marks.reduce((a, b) => a + b, 0)
  return Math.floor(sum / marks.length)
}

//Reverse strings in array
function fixTheMeerkat(arr) {
  return arr.reverse()
}

//if a bonus, multiply salary by 10
function bonusTime(salary, bonus) {
  return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`
}

//return num of miliseconds past midnight
function past(h, m, s) {
  return s * 1000 + m * 60000 + h * 3600000
}
//refactored
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000
}
//testing testing testing

//3/3/21

//Name: 8kyu Beginner Series #1 School Paperwork
//Description: Decide how many pieces of paper per student
function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m
  } else {
    return 0
  }
}
//refactored, not my own
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//Name: Reversed Words
//Description: Reverse the order of words in a sentence
function reversedWords(str) {
  return str.split(' ').reverse().join(' ')
}
