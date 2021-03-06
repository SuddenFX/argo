describe("sessionService", () => {
    let scope,
        $httpBackend,
        sessionService;

    const environment = "my environment",
        token = "my token",
        accountId = "my account id";

    beforeEach(module("components"));

    beforeEach(inject($injector => {
        const $rootScope = $injector.get("$rootScope");

        scope = $rootScope.$new();
        $httpBackend = $injector.get("$httpBackend");
        sessionService = $injector.get("SessionService");

        $httpBackend.whenGET(/^app\/.*\.html$/).respond(200);
    }));

    it("isLogged and setCredentials", done => {
        sessionService.isLogged().then(credentials => {
            assert(environment, credentials.environment);
            assert(token, credentials.token);
            assert(accountId, credentials.accountId);

            done();
        });

        sessionService.setCredentials({
            environment,
            token,
            accountId
        });

        scope.$apply();
    });

});
