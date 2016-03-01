app.controller('viewOneCtr', function($scope, dogService) {

    'use strict';

    dogService.getData().then(function(dataResponse) {
        $scope.header = dataResponse.data.data.children[0].data.title;
        $scope.img = dataResponse.data.data.children[0].data.url;
        $scope.author = dataResponse.data.data.children[0].data.author;
    });

});

app.controller('viewTwoCtr', function($scope, dogService) {

    'use strict';

    dogService.getData().then(function(dataResponse) {
        $scope.header = dataResponse.data.data.children[1].data.title;
        $scope.img = dataResponse.data.data.children[1].data.url;
        $scope.author = dataResponse.data.data.children[1].data.author;
    });

});

app.controller('viewThreeCtr', function($scope, dogService) {

    'use strict';

    dogService.getData().then(function(dataResponse) {
        $scope.header = dataResponse.data.data.children[2].data.title;
        $scope.img = dataResponse.data.data.children[2].data.url;
        $scope.author = dataResponse.data.data.children[2].data.author;
    });

});

app.controller('viewFourCtr', function($scope, dogService) {

    'use strict';

    dogService.getData().then(function(dataResponse) {
        $scope.header = dataResponse.data.data.children[3].data.title;
        $scope.img = dataResponse.data.data.children[3].data.url;
        $scope.author = dataResponse.data.data.children[3].data.author;
    });

});