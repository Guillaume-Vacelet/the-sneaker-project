import axios from 'axios';

// let url = 'https://safecheck-flask-app.herokuapp.com/';
let url = 'http://1ca74529ecec.ngrok.io/';

export default class Product {
  add(userid, model, brand, ) {
    console.log(url + 'product/add/'
      +userid
      +'?newusername='+newUsername
      +'&newemail='+newEmail
    )
    return new Promise((resolve, reject) => {
      axios.post(
        url + 'user/update',
        null,
        { params: {
            model: model,
            brand: brand,
          }
        },
      ).then(res => {
        if (res.status === 200) {
          resolve(res.data);
        }
      }).catch(error => {
        reject(error.response);
      }); 
    });
  }
}