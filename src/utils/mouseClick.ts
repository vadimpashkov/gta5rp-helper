import FFI from 'ffi-napi';
import StructType from 'ref-struct-napi';

// @ts-ignore
import UnionType from 'ref-union-napi';
import ref from 'ref-napi';

// typedef struct tagMOUSEINPUT {
//   LONG    dx;
//   LONG    dy;
//   DWORD   mouseData;
//   DWORD   dwFlags;
//   DWORD   time;
//   ULONG_PTR dwExtraInfo;
// } MOUSEINPUT;
const MOUSEINPUT = StructType({
	dx: 'int',
	dy: 'int',
	mouseData: 'uint',
	dwFlags: 'uint',
	time: 'uint',
	dwExtraInfo: 'pointer',
});

// typedef struct tagKEYBDINPUT {
//   WORD    wVk;
//   WORD    wScan;
//   DWORD   dwFlags;
//   DWORD   time;
//   ULONG_PTR dwExtraInfo;
// } KEYBDINPUT;
const KEYBDINPUT = StructType({
	vk: 'uint16',
	scan: 'uint16',
	flags: 'uint32',
	time: 'uint32',
	extraInfo: 'pointer',
});

// typedef struct tagHARDWAREINPUT {
//   DWORD   uMsg;
//   WORD    wParamL;
//   WORD    wParamH;
// } HARDWAREINPUT;
const HARDWAREINPUT = StructType({
	msg: 'uint32',
	paramL: 'uint16',
	paramH: 'uint16',
});

// typedef struct tagINPUT {
//   DWORD   type;
//   union
//   {
//     MOUSEINPUT      mi;
//     KEYBDINPUT      ki;
//     HARDWAREINPUT   hi;
//   } DUMMYUNIONNAME;
// } INPUT;
const INPUT_UNION = UnionType({
	mi: MOUSEINPUT,
	ki: KEYBDINPUT,
	hi: HARDWAREINPUT,
});
const INPUT = StructType({
	type: 'uint32',
	union: INPUT_UNION,
});

const user32 = FFI.Library('user32.dll', {
	// UINT SendInput(
	//   _In_ UINT cInputs,                     // number of input in the array
	//   _In_reads_(cInputs) LPINPUT pInputs,  // array of inputs
	//   _In_ int cbSize);                      // sizeof(INPUT)
	SendInput: ['uint32', ['int32', 'pointer', 'int32']],
	SendMessageA: ['int32', ['long', 'int32', 'uint32', 'uint32']],
	PostMessageA: ['int32', ['long', 'int32', 'uint32', 'uint32']],
	FindWindowA: ['int32', ['string', 'string']],
});

function MAKELPARAM(x: any, y: any) {
	return (y << 16) | (x & 0xffff);
}

export const findWindow = (ss: string) => user32.FindWindowA(null, ss);

export const mouseClick = (x: number, y: number) => {
	// const inputDown = MOUSEINPUT({
	// 	dx: x,
	// 	dy: y,
	// 	dwFlags: 0x8002,
	// 	mouseData: 0,
	// 	time: 0,
	// 	dwExtraInfo: ref.NULL_POINTER,
	// });i
	// const keyDownInputDown = INPUT({ type: 0, union: INPUT_UNION({ mi: inputDown }) });
	// user32.SendInput(1, keyDownInputDown.ref(), (INPUT as any).size);

	// const inputUp = MOUSEINPUT({
	// 	dx: x,
	// 	dy: y,
	// 	dwFlags: 0x8004,
	// 	mouseData: 0,
	// 	time: 0,
	// 	dwExtraInfo: ref.NULL_POINTER,
	// });

	// const keyDownInputUp = INPUT({ type: 0, union: INPUT_UNION({ mi: inputUp }) });
	// user32.SendInput(1, keyDownInputUp.ref(), (INPUT as any).size);
};
