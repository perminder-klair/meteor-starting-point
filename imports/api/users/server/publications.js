import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Links } from '../../links/links.js';

Meteor.publish('current.user', function currentUserPublication() {
    return Meteor.users.find({_id: this.userId}, {fields: Meteor.users.publicFields})
});

Meteor.publish('users.single', function usersSinglePublication(_id) {
    new SimpleSchema({
        _id: { type: String }
    }).validate({ _id });

    return Meteor.users.find({_id}, {fields: Meteor.users.publicFields})
});

Meteor.publish('users.list', function usersListPublication() {
    return Meteor.users.find({}, {sort: {createdAt: -1}, fields: Meteor.users.publicFields})
});

Meteor.publish('user.links', function userLinksPublication(userId, limit=50) {
    new SimpleSchema({
        userId: { type: String },
        limit: { type: Number }
    }).validate({ userId, limit });

    return Links.find({isActive: true, owner: userId}, {sort: {createdAt: -1}, limit, fields: Links.publicFields});
});