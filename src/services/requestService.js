import {  URL_API } from '../constants'
let defaultBeer;
export const getBeer = async (setBeer,page = 1, url = '') => {
  console.log(setBeer)
  console.log(page)
  let response;
  if (url) {
    response = await fetch(url);
    const answer = await response.json();
    setBeer({beer:answer})
  } else {
    if(!defaultBeer && page == 1){
      response = await fetch(URL_API + `?page=${page}&per_page=80`)
      defaultBeer = await response.json();
    }
    if(defaultBeer && page == 1){
      setBeer({beer:defaultBeer})
    }
    if(page !=1){
      response = await fetch(URL_API + `?page=${page}&per_page=80`);
      const answer = await response.json();
      setBeer({beer:answer})
    }
  }
}
