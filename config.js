module.exports = {
    platform: 'github',
    gitAuthor: "Renovate Bot <renovate-bot@stderr.at>",
    dryRun: null,
    onboardingConfig: {
	extends: ['config:recommended'],
    },

    repositories: ['tosmi-ansible/aap-setup'],

    secrets: {
	AAP_HUB_TOKEN: process.env.AAP_HUB_TOKEN,
    },

    hostRules: [
        {
            matchHost: "aap.apps.hub.aws.tntinfra.net",
            token: "{{ secrets.AAP_HUB_TOKEN }}",
            authType: "Token"
        },
    ],
};
