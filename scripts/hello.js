'use strict';
module.exports = robot => {
	robot.hear(/hello>/i, msg => {
		const user_id = msg.message.user.id;
		msg.send(`Hello,<@${user_id}>`);
	});
};

module.exports = (robot) => {
	robot.hear(/おみくじ>/i, (msg) => {
		const user_id = msg.message.user.id;
		const lots = ['大吉', '基地', '忠吉', '末吉', '経'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${user_id}>`);
	});
};
