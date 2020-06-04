'use strict';
module.exports = (robot) => {
	robot.hear(/おみくじ>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '基地', '忠吉', '末吉', '経'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ', ' + username);
	});
};
