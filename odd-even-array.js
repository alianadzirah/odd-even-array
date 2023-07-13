var nad = {
  array1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  array2: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  array3: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  array4: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  array5: [41, 42, 43, 44, 45, 46, 47, 49, 49, 50],
};

var arraylist = [];

for (var i = 0; i <= Object.keys(nad).length - 1; i++) {
  if (Object.keys(nad)[i].replace(/[^0-9]/g, "") % 2 != 0) {
    nad[Object.keys(nad)[i]].forEach(evenNumber);
  }
}

function evenNumber(number) {
  if (number % 2 == 0) {
    if (arraylist == "") {
      arraylist = number;
    } else {
      arraylist = arraylist + "," + number;
    }
  }
}

console.log(arraylist);
