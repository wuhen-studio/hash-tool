import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  computeHashes(input: string) {
    if (!input) return null;

    return {
      md5: CryptoJS.MD5(input).toString(),
      sha1: CryptoJS.SHA1(input).toString(),
      sha224: CryptoJS.SHA224(input).toString(),
      sha256: CryptoJS.SHA256(input).toString(),
      sha384: CryptoJS.SHA384(input).toString(),
      sha512: CryptoJS.SHA512(input).toString(),
      sha3_224: CryptoJS.SHA3(input, { outputLength: 224 }).toString(),
      sha3_256: CryptoJS.SHA3(input, { outputLength: 256 }).toString(),
      sha3_384: CryptoJS.SHA3(input, { outputLength: 384 }).toString(),
      sha3_512: CryptoJS.SHA3(input, { outputLength: 512 }).toString()
    };
  }
}
