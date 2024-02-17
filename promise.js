import Q from 'q';
import request from 'request';

const delay = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Delayed for ${ms} milliseconds`);
      }, ms);
    });
  };
  
  // Use the Promise
  delay(1000).then((message) => {
    console.log(message);  // Outputs: "Delayed for 1000 milliseconds"
  });

var makeRequest = function(options){
    var deferred = Q.defer();
    request.call(options, function(err, result){
        if(err){
            return deferred.reject(err);
        }
        deferred.resolve(result);
    });
    return deferred.promise;
};

var getRequest = function(url){
    var options = {
        method: "GET",
        url: url
    };
    return makeRequest(options);
};

var getMyAccount = function(accountId){
    return getRequest('/account/'+accountId);
};