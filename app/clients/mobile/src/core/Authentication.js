import axios from 'axios';

// let localurl = 'http://77.153.254.113:5000/';
// let localurl = 'http://0.0.0.0:5000/';
let localurl = 'http://192.168.0.15:5000/';
// let localurl = 'http://127.0.0.1:5000/';


export default class Authentication {
  signup(username, password, email, onSuccess, onFail) {
    console.log(localurl + 'account/register')
    axios.post(
      localurl + 'account/register',
      {
        username: username,
        password: password,
        email: email
      }
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
      console.log(localurl + 'account/login')
      axios.post(
        localurl +  'account/login',
        { email: email, password: password }
      ).then(async res => {
        console.log(res);
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