export const fetchGetApi = (url) => {
     fetch(url)
          .then((res) => {
               return res.json();
          })
          .then((data) => {
               return data;
          });
};
export const fetchPostApi = (url) => {
     fetch(url, {
          method: "Post", 
          headers: {
          
          },
          body
     })
          .then((res) => {
               return res.json();
          })
          .then((data) => {
               return data;
          });
};


import { name } from "./do.js";


console.log(name)