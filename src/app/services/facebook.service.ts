import { Injectable } from '@angular/core';
declare let FB;

@Injectable()
export class FacebookService {
  constructor() {
    FB.init({
      appId      : '228671707475003',
      xfbml      : true,
      version    : 'v2.8'
    });
  }
  getFriends() {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus((status_response) => {
        if (status_response.status === 'connected') {
          let accessToken = status_response.authResponse.accessToken;
          FB.api('YXBwbGljYXRpb25fY29udGV4dDoyMjg2NzE3MDc0NzUwMDMZD/friends_using_app?fields=id,name,picture,email', {access_token: accessToken}, api_response => {
            resolve(api_response.data);
            console.log('friends who are using the app: ', api_response.data);
          });
        } else {
          reject(status_response);
        }
      });
    });
  }
}
