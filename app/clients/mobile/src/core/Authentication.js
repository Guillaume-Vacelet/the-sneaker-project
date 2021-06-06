import axios from 'axios';

// let localurl = 'http://77.153.254.113:5000/';
// let localurl = 'http://0.0.0.0:5000/';
// let localurl = 'http://192.168.0.15:5000/';
// let localurl = 'http://127.0.0.1:5000/';
// let url = 'https://safecheck-flask-app.herokuapp.com/';
let url = 'http://a80881dd2c26.ngrok.io/';

export default class Authentication {
  signup(username, email, password, onSuccess, onFail) {
    console.log(url + 'user/signup')
    axios.post(
      url + 'user/signup',
      null,
      { params: {
          username: username,
          password: password,
          email: email
        }
      },
      ).then(res => {
        console.log('succeed');
        console.log(res);
        if (res.status === 200) {
          onSuccess(res.data);
        }
      }).catch(err => {
        console.log('failed');
        console.log(err);
        onFail(err);
    }); 
  }

  signin(email, password) {
    return new Promise((resolve, reject) => {
      console.log(url + 'user/signin')
      axios.post(
        url +  'user/signin',
        null,
        { params: {email: email, password: password }}
      ).then(async res => {
        if (res.status == 200) {
          try {
            // await AsyncStorage.setItem('jwt', res.data.jwt);
            resolve(res.data);
          } catch(error) {
            reject();
          }
        }
        reject();
      }).catch(err => {
        console.log(err);
        reject()
      });
    });
  }
}