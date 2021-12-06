import request from '@/utils/request';

export interface LoginData {
  mobile: string;
  verificationCode: string;
}

// 登录
export function login(data: LoginData): Promise<any> {
  return request({
    url: '/login/by-mobile',
    method: 'post',
    data,
  });
}


export interface SendVerificationData {
  mobile: string;
  usage: '登录'
}

// 发送验证码
export function sendVerificationCode(data: SendVerificationData): Promise<any> {
  return request({
    url: '/verification-code/send',
    method: 'post',
    data,
  });
}
