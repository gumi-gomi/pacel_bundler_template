import _ from 'lodash';

console.log(_.camelCase('pacel Bundler Test!!'));


const imgEl = document.querySelector('img');
imgEl.setAttribute('src','./img/bg01.jpg')


//autoprefixer - 접두사를 자동으로 설정
//npm i postcss autoprefixer -D


async function test(){
  const promise = Promise.resolve(123);
  console.log(await promise);

};

test();




















