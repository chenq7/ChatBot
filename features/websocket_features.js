/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('testing'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here are some test replies',
                quick_replies: [
                    {
                        title: 'Testing',
                        payload: 'test',
                    },
                    {
                        title: 'Test number 2',
                        payload: 'test2',
                    }
                ]
            });
        });


    }

}