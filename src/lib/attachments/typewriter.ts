import type { DelayerTime } from '$lib/utils/delayer';
import delayer from '$lib/utils/delayer';
import type { Attachment } from 'svelte/attachments';
import TypeIt, { type Options as TypeItOptions } from 'typeit';

export default function typewriter(
	options: TypeItOptions = {},
	waitUntil?: DelayerTime
): Attachment<HTMLElement> {
	return (element) => {
		// we get the content of the HTML then we delete it so it can be rewritten by TypeIt
		const text = element.innerHTML;
		element.innerHTML = '';

		const afterComplete = (instance: { destroy: () => void }) => {
			instance.destroy();
			if (options.afterComplete) {
				options.afterComplete();
			}
		};

		const writer = new TypeIt(element, {
			strings: text,
			waitUntilVisible: true,
			lifeLike: false,
			speed: 30,
			nextStringDelay: 0,
			cursorChar: '_',
			...options,
			afterComplete
		});

		if (!waitUntil) {
			writer.go();
		} else {
			delayer(waitUntil).then(() => {
				writer.go();
			});
		}
	};
}
