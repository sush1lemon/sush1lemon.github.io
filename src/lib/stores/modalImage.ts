import { writable } from 'svelte/store';

export const modalImage = writable('');

export const setPreviewImage = function (v: string) {
	modalImage.set(v);
};
