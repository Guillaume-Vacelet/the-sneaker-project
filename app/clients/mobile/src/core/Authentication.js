import axios from 'axios';

// let url = 'https://safecheck-flask-app.herokuapp.com/';
let url = 'http://ff7e8ea54923.ngrok.io/';

export default class Authentication {
  signup(username, email, password) {
    console.log(url + 'user/signup')
    return new Promise((resolve, reject) => {
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
        if (res.status === 200) {
          resolve(res.data);
        }
      }).catch(error => {
        reject(error.response.data.error);
      }); 
    });
  }

  verifyEmail(email, code) {
    console.log(url + 'user/email/verify/' + code)
    return new Promise((resolve, reject) => {
      axios.post(
        url +  'user/email/verify/' + code,
        null,
        { params: {email: email}}
      ).then(async res => {
        console.log(res);
        if (res.status == 200) {
          resolve(res.data);
        }
        reject();
      }).catch(error => {
        reject(error.response.data.error);
      });
    });
  }

  signin(email, password) {
    console.log(url + 'user/signin')
    return new Promise((resolve, reject) => {
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
      }).catch(error => {
        reject(error.response.data.error);
      });
    });
  }

  forgotPassword(email) {
    console.log(url + 'user/forgot-password')
    return new Promise((resolve, reject) => {
      axios.post(
        url + 'user/forgot-password',
        null,
        { params: {email: email} }
      ).then(async res => {
        if (res.status == 200) {
          resolve(res.data)
        }
        reject();
      }).catch(error => {
        reject(error.response.data.error);
      });
    });
  }
}