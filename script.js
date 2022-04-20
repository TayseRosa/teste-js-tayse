let num = ''

for (let i = 1; i <= 200; i++) {
  /*   num = num + i + '<br/>' */

  if (i % 4 === 0) {
    document.querySelector('#num').innerHTML += num + 'xxx' + '<br/>'
  }
  if (i % 7 === 0) {
    document.querySelector('#num').innerHTML += num + 'yyy' + '<br/>'
  }
  if (i % 4 === 0 && i % 7 === 0) {
    document.querySelector('#num').innerHTML += num + 'xxxyyy' + '<br/>'
  } else {
    document.querySelector('#num').innerHTML += num + i + '<br/>'
  }
}
