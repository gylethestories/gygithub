const bff = {
    dev: {
        apigee: 'https://manulife-development-dev.apigee.net/v1/mg/oauth2/token',
        host: 'https://eas.internal.mesh.dev.api.manulife.com/v1/jumbo/enrolment/hk/dev/',
        path: 'api/v1/Time/time',
        client_id: 'iT71y3SGjDB2XbwiAa8BhW9fdH8v7xN2',
        client_secret: '4IibjOJHh0tifG5A',
    },
    sit: {
        apigee: 'https://manulife-development-test.apigee.net/v1/mg/oauth2/token',
        host: 'https://eas.internal.mesh.test.api.manulife.com/v1/jumbo/enrolment/hk/test/',
        path: 'api/v1/Time/time',
        client_id: 'ogDoQ6Bdt6IARODsVHBw0SAFLPwzfC4f',
        client_secret: 'lxDGn5AgmP4KNJ8m',
    },
    uat: {
        apigee: 'https://manulife-operations-preprod-ext.apigee.net/v1/mg/oauth2/token',
        host: 'https://eas.mesh.preprod.api.manulife.com/v1/jumbo/enrolment/hk/preprod-ext/',
        path: 'api/v1/Time/time',
        client_id: 'RtaUiWIL2Wv6cEsdv9LITGPyY2tO6C2K',
        client_secret: 'XUAGqEstKvUDJDLA',
    },
    prod: {
        apigee: 'https://manulife-operations-prod-ext.apigee.net/v1/mg/oauth2/token',
        host: 'https://eas.mesh.api.manulife.com/v1/jumbo/enrolment/hk/prod-ext/',
        path: 'api/v1/Time/time',
        client_id: '3upLWeGB6fTm96iA6avUAFcTrapcsu9g',
        client_secret: '71qJK7gHJX8SqN4a',
    },
};

export {
    bff,
};
