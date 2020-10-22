

module.exports = function (controller) {
  controller.on("hello", async (bot, msg) => {
    await bot.beginDialog('start');

    await bot.reply(msg, {
      text: 'What do you want to know about me?',
      quick_replies: [
        {
          title: 'Basics',
          payload: 'basics',
        },
        {
          title: 'Projects',
          payload: 'Projects',
        },
        {
          title: 'Work',
          payload: 'Work',
        },
        {
          title: 'Education',
          payload: 'Education',
        },
        {
          title: 'Skills',
          payload: 'Skills',
        },
        {
          title: 'Languages',
          payload: 'Languages',
        },
        {
          title: 'Interests',
          payload: 'Interests',
        },
      ]
    });
  });

  controller.on("welcome_back", async (bot, msg) => {

    // await bot.beginDialog('typing');

    bot.say("Welcome back!");

    await bot.beginDialog('start');

    // bot.say("Hello, I am Qixiang Chen's digital avatar");

    // await bot.beginDialog('typing');

    await bot.reply(msg, {
      text: 'What do you want to know about me?',
      quick_replies: [
        {
          title: 'Basics',
          payload: 'basics',
        },
        {
          title: 'Projects',
          payload: 'Projects',
        },
        {
          title: 'Work',
          payload: 'Work',
        },
        {
          title: 'Education',
          payload: 'Education',
        },
        {
          title: 'Skills',
          payload: 'Skills',
        },
        {
          title: 'Languages',
          payload: 'Languages',
        },
        {
          title: 'Interests',
          payload: 'Interests',
        },
      ]
    });
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'name', ['message'], async (bot, message) => {
    let response = resume.basics.name;

    await bot.beginDialog('typing');
    await bot.reply(message, response);
  });

}