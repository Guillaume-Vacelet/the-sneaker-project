import axios from 'axios';

export default class Authentication {
  signup(onSuccess, onFail, username, password, email) {
    axios.post(
      '/account/register',
      {
        username: username,
        password: password,
        email: email
      }
      ).then(res => {
        if (res.status === 200) {
          onSuccess();
        }
      }).catch(err => {
        onFail();
    }); 
  }

  signin(email, password) {
    return new Promise((resolve, reject) => {
      axios.post(
        'account/login',
        { email: email, password: password }
      ).then(async res => {
        if (res.status == 200) {
          try {
            await AsyncStorage.setItem('jwt', res.data.jwt);
            resolve(res.data);
          } catch(error) {
            reject();
          }
        }
        reject();
      }).catch(() => {
        reject()
      });
    });
  }
}