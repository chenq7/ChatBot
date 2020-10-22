

module.exports = function (controller) {
  controller.on("hello", async (bot, msg) => {
    await bot.beginDialog('typing');
    bot.say("Hello, I am Qixiang Chen's digital avatar \n What do you want to know about me?");
  });

  controller.on("welcome_back", async (bot, msg) => {
    await bot.beginDialog('typing');
    bot.say("Welcome back! Is there anything else you want to know?");
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'javascript', ['message'], async (bot, message) => {
    let response = resume.basics.name;

    await bot.beginDialog('typing');
    await bot.reply(message, response);
  });

}