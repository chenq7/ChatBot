

module.exports = function (controller) {
  controller.on("welcome_back", async (bot, message) => {

    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, `Hello!`)
        );
      }, 1500);
    });

    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, "I am Qixiang Chen's digital avatar")
        );
      }, 1500);
    });

    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          await bot.reply(message, {
            text: 'What would you like to know about me?',
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
          })
        );
      }, 1500);
    });
  });

  const basics = (bot, message) => {
    return new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
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
              },
              {
                title: 'AngelList',
                payload: 'angellist',
              }
            ]
          })
        );
      }, 1500);
    });
  }


  const projects = (bot, message) => {
    return new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          await bot.reply(message, {
            text: 'Which project would you like to learn more about?',
            quick_replies: [
              {
                title: 'VideoNight',
                payload: 'videonight',
              },
              {
                title: 'CoinExplorer',
                payload: 'coinexplorer',
              },
              {
                title: 'MinionWars',
                payload: 'minionwars',
              }
            ]
          })
        );
      }, 1500);
    });
  }

  // use a function to match a condition in the message
  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'basics', ['message'], async (bot, message) => {
    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'projects', ['message'], async (bot, message) => {
    await projects(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'name', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.name)
        );
      }, 1500);
    });

    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'email', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.email)
        );
      }, 1500);
    });

    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'phone number', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.phone)
        );
      }, 1500);
    });

    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'website', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.website)
        );
      }, 1500);
    });

    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'summary', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.summary)
        );
      }, 1500);
    });

    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'linkedin', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.profiles.LinkedIn)
        );
      }, 1500);
    });

    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'github', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.profiles.Github)
        );
      }, 1500);
    });

    await basics(bot, message);
  });

  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'angellist', ['message'], async (bot, message) => {
    await new Promise(async (resolve) => {
      await bot.reply(message, { type: "typing" });
      return setTimeout(async () => {
        await bot.changeContext(message.reference);
        return resolve(
          bot.reply(message, resume.basics.profiles.AngelList)
        );
      }, 1500);
    });

    await basics(bot, message);
  });
}