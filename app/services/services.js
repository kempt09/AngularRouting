app.service('dogService', function($http) {
    
    'use strict';

    this.getData = function() {

        return $http({
            method: 'GET',
            url: 'http://www.reddit.com/r/DogPictures.json'
        });

    };

});
