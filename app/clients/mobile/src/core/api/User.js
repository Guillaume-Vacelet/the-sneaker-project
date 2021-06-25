import axios from 'axios';

let url = 'https://safecheck-app.herokuapp.com/';
// let url = 'http://1ca74529ecec.ngrok.io/';

export default class User {
  signup(username, email, password) {
    console.log(url + 'user/signup?'
    +'username='+username
    +'&email='+email
    +'&password='+password)
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

  verifyEmail(userid, code) {
    console.log(url + 'user/email/verify/'+code+'?userid='+userid)
    return new Promise((resolve, reject) => {
      axios.post(
        url +  'user/email/verify/' + code,
        null,
        { params: {
          userid: userid
        }}
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

  sendCode(userid, email) {
    console.log(url + 'user/email/verify/send-code?'
    +'userid='+userid
    +'&email='+email)
    return new Promise((resolve, reject) => {
      axios.post(
        url +  'user/email/verify/send-code',
        null,
        { params: {userid: userid, email: email}}
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
    console.log(url + 'user/signin?'
    +'email='+email
    +'&password='+password)
    return new Promise((resolve, reject) => {
      axios.post(
        url +  'user/signin',
        null,
        { params: {
          email: email, 
          password: password 
        }}
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

  resetPassword(userid, newPassword) {
    console.log(url + 'user/reset-password'
    +'?userid='+userid
    +'&newPassword='+newPassword)
    return new Promise((resolve, reject) => {
      axios.post(
        url + 'user/reset-password',
        null,
        { params: {userid: userid, newPassword: newPassword} }
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

  update(userid, newUsername, newEmail) {
    console.log(url + 'user/update?'
      +'userid='+userid
      +'&newusername='+newUsername
      +'&newemail='+newEmail
    )
    return new Promise((resolve, reject) => {
      axios.post(
        url + 'user/update',
        null,
        { params: {
            userid: userid,
            newusername: newUsername,
            newemail: newEmail
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

  getUserInformations(userid) {
    console.log(url + 'user/' + userid);
    return new Promise((resolve, reject) => {
      axios.get(
        url + 'user/' + userid,
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