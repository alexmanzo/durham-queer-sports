import twilio from 'twilio';

const accountSid = 'AC5294cd07d14e574b94e1c0a1bd574732';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const handler = async (event, context) => {
	try {
		const { title, content } = event.body.data;
		client.messages
			.create({ body: `This is a message from Durham Queer Sports. ${title}: ${content}`, from: '+18557823971', to: '+19844848933' })
			.then((message) => console.log(message.sid));
		return {
			statusCode: 200
		};
	} catch (err) {
		return { statusCode: 500, body: err.toString() };
	}
};
