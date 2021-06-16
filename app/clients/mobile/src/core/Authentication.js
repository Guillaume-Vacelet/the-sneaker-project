import axios from 'axios';

// let url = 'https://safecheck-flask-app.herokuapp.com/';
let url = 'http://dcfbc2dfc19f.ngrok.io/';

export default class Authentication {
  signup(username, email, password) {
    console.log(url + 'user/signup?username='+username+'email='+email+'&password='+password)
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
        reject(error.response);
      }); 
    });
  }

  verifyEmail(email, code) {
    console.log(url + 'user/email/verify/' + code+'?email='+email)
    return new Promise((resolve, reject) => {
      axios.post(
        url +  'user/email/verify/' + code,
        null,
        { params: {email: email}}
      ).then(async res => {
        if (res.status == 200) {
          resolve(res.data);
        }
        reject();
      }).catch(error => {
        reject(error.response);
      });
    });
  }

  sendNewCode(email) {
    console.log(url + 'user/email/verify/send-new-code?email='+email)
    return new Promise((resolve, reject) => {
      axios.post(
        url +  'user/email/verify/send-new-code',
        null,
        { params: {email: email}}
      ).then(async res => {
        if (res.status == 200) {
          resolve(res.data);
        }
        reject();
      }).catch(error => {
        reject(error.response);
      });
    });
  }

  signin(email, password) {
    console.log(url + 'user/signin?email='+email+'&password='+password)
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
        reject(error.response);
      });
    });
  }

  resetPassword(email, newPassword) {
    console.log(url + 'user/reset-password?email='+email+'&newPassword='+newPassword)
    return new Promise((resolve, reject) => {
      axios.post(
        url + 'user/reset-password',
        null,
        { params: {email: email, newPassword: newPassword} }
      ).then(async res => {
        if (res.status == 200) {
          resolve(res.data)
        }
        reject();
      }).catch(error => {
        reject(error.response);
      });
    });
  }
}