import bunyan from 'bunyan';
import path from 'path';

const parseName = (name) => {
	// Assume this file is in the folder "$PROJECTROOT/log"
	const projectRoot = path.join(__dirname, '../');
	if (name.includes(projectRoot)) {
		name = name
		.replace(projectRoot, '')
		.replace('/index.js', '') // Only display folder name for index.js files
		.replace('.js', '');
	}
	return name;
};

export default (name) => {
	return bunyan.createLogger({
		name: parseName(name),
		level: 'debug',
		stream: process.stdout,
		serializer: {
			req: ({ url, method }) => ({ url, method })
		}
	});
};