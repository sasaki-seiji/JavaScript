'use strict';

function asyncProcess(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value) {
        resolve('入力値：' + value);
      } else {
        reject('エラー：入力は空です');
      }
    }, 500);
  });
}

asyncProcess('トクジロウ').then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});
