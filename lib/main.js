var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var chatwork = buttons.ActionButton({
    id: "chatwork-button",
    label: "Chatwork",
    icon: './chatwork.png',
    onClick: function(state) {
        tabs.open('https://www.chatwork.com');
    }
});

var backlog = buttons.ActionButton({
    id: 'backlog-button',
    label: 'Backlog',
    icon: './backlog.png',
    onClick: function(state) {
        tabs.open('https://bb08.backlog.jp/dashboard');
    }
});

var hipchat = buttons.ActionButton({
    id: "hipchat-button",
    label: "Hipchat",
    icon: './hipchat.png',
    onClick: function(state) {
        tabs.open('https://insprout.hipchat.com/chat');
    }
});

var slack = buttons.ActionButton({
    id: 'slack-button',
    label: 'Slack',
    icon: './slack.png',
    onClick: function(state) {
        tabs.open('https://insprout.slack.com/');
    }
});

var inbox = buttons.ActionButton({
    id: 'inbox-button',
    label: 'Google Inbox',
    icon: './inbox.png',
    onClick: function(state) {
        tabs.open('https://inbox.google.com');
    }
});
