const phoneReg = /^1[3456789]\d{9}$/;

/**
 * 校验手机号码
 * @param phone
 * @returns
 */
export function isPhone(phone: string): boolean {
  return phoneReg.test(phone);
}

/**
 * 睡眠函数，替换setTimeout方法
 * @param {*} time
 */
export function sleep(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}
