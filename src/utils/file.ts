import ffi from 'ffi-napi';
//var ArrayType = require("ref-array");
var arch = require('os').arch();

const WM_KEYDOWN = 0x0100; // key-down
const WM_KEYUP = 0x0101; // key-up
const WM_SYSKEYDOWN = 0x0104; // key-down (for alt-key)
const WM_SYSKEYUP = 0x0105; // key-up (for alt-key)

const extraKeys = {
	leftShift: 160,
	rightShift: 161,
	leftControl: 162,
	rightControl: 163,
	leftAlt: 164,
	rightAlt: 165,
};

var user32 = ffi.Library('user32', {
	keybd_event: ['void', ['int32', 'int32', 'int32', 'int32']],
	SendMessageA: ['int32', ['long', 'int32', 'long', 'int32']],
	PostMessageA: ['int32', ['long', 'int32', 'long', 'int32']],
});

enum keybd_event_flags {
	KEYEVENTF_EXTENDEDKEY = 0x0001, // key-down flag (kind of)
	KEYEVENTF_KEYUP = 0x0002, // key-up flag
}
export enum SendMessage_Flags {
	WM_KEYDOWN = 0x0100,
	WM_KEYUP = 0x0101,
	WM_CHAR = 0x0102,
}

export function KeyToggle(keyCode: number, type = 'down' as 'down' | 'up') {
	let messageType = type == 'down' ? SendMessage_Flags.WM_KEYDOWN : SendMessage_Flags.WM_KEYUP;
	if (keyCode == extraKeys.leftAlt) {
		messageType = type == 'down' ? WM_SYSKEYDOWN : WM_SYSKEYUP;
	}

	user32.PostMessageA(1, messageType, keyCode, 0);
}
export function KeyTap(keyCode: number) {
	KeyToggle(keyCode, 'down');
	KeyToggle(keyCode, 'up');
}
