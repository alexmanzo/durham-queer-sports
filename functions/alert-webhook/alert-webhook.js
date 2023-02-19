import twilio from 'twilio';

const accountSid = 'AC5294cd07d14e574b94e1c0a1bd574732';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const handler = async (event, context) => {
	try {
		const alertContent = JSON.parse(event.body.data);
		const { title, content } = alertContent;

		client.messages
			.create({ body: `${title}: ${content}`, from: '+18557823971', to: '+19844848933' })
			.then((message) => console.log(message.sid));
		return {
			statusCode: 200
		};
	} catch (err) {
		return { statusCode: 500, body: err.toString() };
	}
};
