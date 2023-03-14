// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface RecurringEvent {
			league: string;
			dayOfWeek: string;
			time: string;
			location: string;
		}
	}
}

export {};
