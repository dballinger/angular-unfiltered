'use strict';

describe('GreetingCtrl', function () {

    var scope, ctrl;

    beforeEach(module('angular-unfiltered'));

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        $httpBackend.expect('GET', '/resources/greeting').respond('world');
        ctrl = $controller('GreetingCtrl', {$scope: scope});
        $httpBackend.flush();
    }));

    it('should set something on the scope', function () {
        expect(scope.greetingEntity).toEqual('world');
    });
});