import axios from 'axios';

// let url = 'https://safecheck-flask-app.herokuapp.com/';
let url = 'http://c0d51aa6f56c.ngrok.io/';

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
        console.log(res);
        if (res.status === 200) {
          onSuccess(res.data);
        }
      }).catch(err => {
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