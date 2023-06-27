const KvParser = require('./lib/KvParser.js');

exports.parse = function(input) {
	if (Buffer.isBuffer(input)) {
		input = input.toString('utf8');
	}

	let parser = new KvParser(input);
	return parser.parse();
};
