/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'basics', ['message'], async (bot, message) => {
        await bot.reply(message, {
            text: 'What information do you want to know?',
            quick_replies: [
                {
                    title: 'Name',
                    payload: 'name',
                },
                {
                    title: 'email',
                    payload: 'email',
                },
                {
                    title: 'Phone Number',
                    payload: 'phone number',
                },
                {
                    title: 'Website',
                    payload: 'website',
                },
                {
                    title: 'Summary',
                    payload: 'summary',
                },
                {
                    title: 'LinkedIn',
                    payload: 'linkedin',
                },
                {
                    title: 'Github',
                    payload: 'github',
                }
            ]
        });
    });

    // // use a regular expression to match the text of the message
    // controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'I heard a number using a regular expression.' });
    // });

    // // match any one of set of mixed patterns like a string, a regular expression
    // controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
    //     await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    // });

}