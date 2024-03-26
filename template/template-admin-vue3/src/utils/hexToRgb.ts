/*
 * @Author: 前端菜鸟--邓建军
 * @Date: 2024-03-26 19:59:53
 * @FilePath: \template-admin-vue3\src\utils\hexToRgb.ts
 * @LastEditors: mydjj
 * @LastEditTime: 2024-03-26 22:55:16
 */
/**
 * @description hex 转 rgb颜色
 * @param {String} hex 颜色字符串值
 * @return {String} 返回rgb颜色值
 */

export const hexToRgb = (hex: string, isArr = false) => {
	let hexs: any = '';
	let reg = /^\#?[0-9A-Fa-f]{6}$/;
	if (!reg.test(hex)) ElMessage.warning('输入错误的hex');
	hex = hex.replace('#', '');
	hexs = hex.match(/../g);
	console.log(hex);
	for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
	return isArr ? hexs : `rga(${hexs[0]},${hexs[1]},${hexs[2]})`;
};

/**
 * @description rgb 转 hex颜色
 * @param {String|number} r 颜色字符串值
 * @param {String|number} g 颜色字符串值
 * @param {String|number} b 颜色字符串值
 * @return {String} 返回hex颜色值
 *
 */
export const rgbToHex = (r: number | string, g: number | string, b: number | string) => {
	let reg = /^\d{1,3}$/;
	if (!reg.test(r as string) || !reg.test(g as string) || !reg.test(b as string)) return ElMessage.warning('输入错误的rgb颜色值');
	let hexs = [r.toString(16), g.toString(16), b.toString(16)];
	//这里是判断如果值小于10，那么前面需要补0
	for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
	return `#${hexs.join('')}`;
};

/**
 * @description 颜色值加深
 * @param {String} color 颜色值字符串
 * @param {Number} num 颜色加深值,0~1之间
 * @returns {String} 返回处理后的颜色值
 * 本身值 - 本身值 * 调整幅度 = 最终值
 */

export const getColorDeepen = (color: string, num: number) => {
	let rgb: any = hexToRgb(color, true);
	for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] - rgb[i] * num);
	return rgbToHex(rgb[0], rgb[1], rgb[2]);
};

/**
 * @description 颜色值变浅
 * @param {String} color 颜色值字符串
 * @param {Number} num 颜色加深值,0~1之间
 * @returns {String} 返回处理后的颜色值
 * 本身值 + (255 - 本身值) * 调整幅度 = 最终值
 *
 */
export const getColorShallow = (color: string, num: number) => {
	let rgb: any = hexToRgb(color, true);
	for (let i = 0; i < 3; i++) rgb[i] = Math.floor((255 - rgb[i]) * num + rgb[i]);
	return rgbToHex(rgb[0], rgb[1], rgb[2]);
};
