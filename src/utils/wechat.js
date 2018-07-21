import Taro from '@tarojs/taro';

export function login() {
  return new Promise((resolve, reject) => {
    Taro.login({ success: resolve, fail: reject });
  });
}

export function getUserInfo() {
  return new Promise((resolve, reject) => {
    Taro.getUserInfo({ success: resolve, fail: reject });
  });
}

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    Taro.setStorage({
      key, data: value, success: resolve, fail: reject,
    });
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    Taro.getStorage({ key, success: resolve, fail: reject });
  });
}

export function getLocation(type) {
  return new Promise((resolve, reject) => {
    Taro.getLocation({ type, success: resolve, fail: reject });
  });
}
