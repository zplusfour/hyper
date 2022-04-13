import * as crypto from 'crypto-js';

export var SECRET = 'oopsthisisasecretzxcvbnmasdfghjk';

export const encrypt = (e: string) => {
	return crypto.AES.encrypt(e, SECRET).toString();
};

export const decrypt = (e: string) => {
	return crypto.AES.decrypt(e, SECRET).toString(crypto.enc.Utf8);
};
