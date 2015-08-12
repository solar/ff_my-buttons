var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var chatwork = buttons.ActionButton({
    id: "chatwork-button",
    label: "Chatwork",
    icon: {
        '16': './chatwork-16.png',
        '64': './chatwork-64.png'
    },
    onClick: function(state) {
        tabs.open('https://www.chatwork.com');
    }
});

var backlog = buttons.ActionButton({
    id: 'backlog-button',
    label: 'Backlog',
    icon: {
        '16': './backlog-16.png',
        '64': './backlog-64.png'
    },
    onClick: function(state) {
        tabs.open('https://bb08.backlog.jp/dashboard');
    }
});

var slack = buttons.ActionButton({
    id: 'slack-button',
    label: 'Slack',
    icon: {
        '16': './slack-16.png',
        '32': './slack-32.png',
        '64': './slack-64.png'
    },
    onClick: function(state) {
        tabs.open('https://insprout.slack.com/');
    }
});

var inbox = buttons.ActionButton({
    id: 'inbox-button',
    label: 'Google Inbox',
    icon: {
        '16': './inbox-16.png',
        '64': './inbox-64.png'
    },
    onClick: function(state) {
        tabs.open('https://inbox.google.com');
    }
});
