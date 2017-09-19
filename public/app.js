(function () {

    var config = {
        apiKey: "AIzaSyCBelEt1LlxMahCNeQ6TnVYtRpn15Ycn4o",
        authDomain: "notification-test-d0d54.firebaseapp.com",
        databaseURL: "https://notification-test-d0d54.firebaseio.com",
        projectId: "notification-test-d0d54",
        storageBucket: "notification-test-d0d54.appspot.com",
        messagingSenderId: "437220683432"
    };

    firebase.initializeApp(config);

    angular.module('FireBaseTest', ['firebase'])
        //dependency injection
        .config(function ($firebaseRefProvider) {
            $firebaseRefProvider.registerUrl({
                default: config.databaseURL,
                object: config.databaseURL+'/notifications'
            });
        })
        .factory('ObjectFactory', ObjectFactory)
        .controller('FireBaseController', FireBaseController);


    function FireBaseController(ObjectFactory) {
        this.object = ObjectFactory;
        console.log(this.object);
    }

    //Return firebase database object
    function ObjectFactory($firebaseObject, $firebaseRef) {
        return $firebaseObject($firebaseRef.object)
    }

}());
