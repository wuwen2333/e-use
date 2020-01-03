import CryptoJS from 'crypto-js';

export function aesEncrypt (text,secret) {
  return CryptoJS.AES.encrypt(text,secret).toString();
}

export function aesDecrypt (text,secret) {
  return CryptoJS.AES.decrypt(text,secret).toString(CryptoJS.enc.Utf8);
}

export function desEncrypt (text,secret) {
  return CryptoJS.DES.encrypt(text,secret).toString();
}

export function desDecrypt (text,secret) {
  return CryptoJS.DES.decrypt(text,secret).toString(CryptoJS.enc.Utf8);
}

export function tripleDesEncrypt (text,secret) {
  return CryptoJS.TripleDES.encrypt(text,secret).toString();
}

export function tripleDesDecrypt (text,secret) {
  return CryptoJS.TripleDES.decrypt(text,secret).toString(CryptoJS.enc.Utf8);
}

export function rabbitEncrypt (text,secret) {
  return CryptoJS.Rabbit.encrypt(text,secret).toString();
}

export function rabbitDecrypt (text,secret) {
  return CryptoJS.Rabbit.decrypt(text,secret).toString(CryptoJS.enc.Utf8);
}

export function rc4Encrypt (text,secret) {
  return CryptoJS.RC4.encrypt(text,secret).toString();
}

export function rc4Decrypt (text,secret) {
  return CryptoJS.RC4.decrypt(text,secret).toString(CryptoJS.enc.Utf8);
}

export function sha1Encrypt (text) {
  return CryptoJS.SHA1(text).toString();
}

export function sha256Encrypt (text) {
  return CryptoJS.SHA256(text).toString();
}

export function sha512Encrypt (text) {
  return CryptoJS.SHA512(text).toString();
}

export function hmacMd5Encrypt (text,secret) {
  return CryptoJS.HmacMD5(text,secret).toString();
}

export function hmacSha1Encrypt (text,secret) {
  return CryptoJS.HmacSHA1(text,secret).toString();
}

export function hmacSha256Encrypt (text,secret) {
  return CryptoJS.HmacSHA256(text,secret).toString();
}

export function hmacSha512Encrypt (text,secret) {
  return CryptoJS.HmacSHA512(text,secret).toString();
}
