let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
        //this is the local host name of your API
        APIURL = 'http://localhost:3000';
        break;
    //this is the deployed react application
    case 'ifs-dejabrewclient.herokuapp.com':
        //this is th efull url of your deployed API
        APIURL = 'https://ifs-dejabrew-server.herokuapp.com'
}

export default APIURL;