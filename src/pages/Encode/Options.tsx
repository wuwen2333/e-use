import React, { useState } from 'react'
import MD5 from 'blueimp-md5'
import { Base64 } from 'js-base64';
import {Card, Form, Button, Row, Col} from 'react-bootstrap'
import { aesEncrypt, aesDecrypt, desEncrypt, desDecrypt, tripleDesDecrypt, tripleDesEncrypt, rabbitDecrypt, rabbitEncrypt, rc4Decrypt, rc4Encrypt, sha1Encrypt, sha256Encrypt, sha512Encrypt, hmacMd5Encrypt, hmacSha1Encrypt, hmacSha256Encrypt, hmacSha512Encrypt } from './utils'

const Options: React.FC = () => {
    const [selectState, setSelectState] = useState('MD5');
    const [text, setText] = useState('');
    const [resultText, setResultText] = useState('');
    const [secretText, setSecretText] = useState('');
    const [md5Result32, setMd5Result32] = useState('');
    const [md5Result32UpperCase, setMd5Result32UpperCase] = useState('');
    const [md5Result16, setMd5Result16] = useState('');
    const [md5Result16UpperCase, setMd5Result16UpperCase] = useState('');
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <Form.Group>
                        <Form.Label>Type: {selectState}</Form.Label>
                        <Form.Control as="select" onChange={(e: any) => initText(e)}>
                            <option>MD5</option>
                            <option>BASE64</option>
                            <option>URL</option>
                            <option>SHA1</option>
                            <option>SHA256</option>
                            <option>SHA512</option>
                            <option>AES</option>
                            <option>DES</option>
                            <option>Triple DES</option>
                            <option>RC4</option>
                            <option>Rabbit</option>
                            <option>HmacMD5</option>
                            <option>HmacSHA1</option>
                            <option>HmacSHA256</option>
                            <option>HmacSHA512</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group hidden={!(selectState=="MD5")}>
                        <Form.Group>
                            <Form.Label>Text:</Form.Label>
                            <Form.Control
                                placeholder="text"
                                value={text}
                                onChange={(e: any) => setText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={() => setMD5Result()}>
                                Encode
                            </Button>
                        </Form.Group>
                        <Form.Group hidden={md5Result32==''}>
                            <Form.Label>Result:</Form.Label>
                            <Form.Text>
                                32: {md5Result32}
                            </Form.Text>
                            <Form.Text>
                                32u: {md5Result32UpperCase}
                            </Form.Text>
                            <Form.Text>
                                16: {md5Result16}
                            </Form.Text>
                            <Form.Text>
                                16u: {md5Result16UpperCase}
                            </Form.Text>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group hidden={!(selectState=="SHA1" || selectState=="SHA256" || selectState=="SHA512")}>
                        <Form.Group>
                            <Form.Label>Text:</Form.Label>
                            <Form.Control
                                placeholder="text"
                                value={text}
                                onChange={(e: any) => setText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button style={{marginRight: '2rem'}} onClick={() => setResultText(encodeResult())}>
                                Encode
                            </Button>
                        </Form.Group>
                        <Form.Group hidden={resultText==''}>
                            <Form.Label>Result:</Form.Label>
                            <Form.Text>
                                {resultText}
                            </Form.Text>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group hidden={!(selectState=="BASE64" || selectState=="URL")}>
                        <Form.Group>
                            <Form.Label>Text:</Form.Label>
                            <Form.Control
                                placeholder="text"
                                value={text}
                                onChange={(e: any) => setText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button style={{marginRight: '2rem'}} onClick={() => setResultText(encodeResult())}>
                                Encode
                            </Button>
                            <Button onClick={() => setResultText(decodeResult())}>
                                Decode
                            </Button>
                        </Form.Group>
                        <Form.Group hidden={resultText==''}>
                            <Form.Label>Result:</Form.Label>
                            <Form.Text>
                                {resultText}
                            </Form.Text>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group hidden={!(selectState=="AES" || selectState=="DES" || selectState=="Triple DES" || selectState=="RC4" || selectState=="Rabbit")}>
                        <Form.Group>
                            <Form.Label>Text:</Form.Label>
                            <Form.Control
                                placeholder="text"
                                value={text}
                                onChange={(e: any) => setText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Secret:</Form.Label>
                            <Form.Control
                                placeholder="text"
                                value={secretText}
                                onChange={(e: any) => setSecretText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button style={{marginRight: '2rem'}} onClick={() => setResultText(encodeAndDecodeSecretResult())}>
                                Encode
                            </Button>
                            <Button onClick={() => setResultText(decodeAndDecodeSecretResult())}>
                                Decode
                            </Button>
                        </Form.Group>
                        <Form.Group hidden={resultText==''}>
                            <Form.Label>Result:</Form.Label>
                            <Form.Text>
                                {resultText}
                            </Form.Text>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group hidden={!(selectState=="HmacMD5" || selectState=="HmacSHA1" || selectState=="HmacSHA256" || selectState=="HmacSHA512")}>
                        <Form.Group>
                            <Form.Label>Text:</Form.Label>
                            <Form.Control
                                placeholder="text"
                                value={text}
                                onChange={(e: any) => setText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Secret:</Form.Label>
                            <Form.Control
                                placeholder="text"
                                value={secretText}
                                onChange={(e: any) => setSecretText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button style={{marginRight: '2rem'}} onClick={() => setResultText(encodeAndDecodeSecretResult())}>
                                Encode
                            </Button>
                        </Form.Group>
                        <Form.Group hidden={resultText==''}>
                            <Form.Label>Result:</Form.Label>
                            <Form.Text>
                                {resultText}
                            </Form.Text>
                        </Form.Group>
                    </Form.Group>
                </Card.Title>
            </Card.Body>
        </Card>
    )
    function initText (e:any) {
        setResultText('');
        setSelectState(e.target.value);
    }
    function setMD5Result () {
        let md5 = MD5(text);
        setMd5Result32(md5);
        setMd5Result32UpperCase(md5.toUpperCase());
        setMd5Result16(md5.substring(8,24));
        setMd5Result16UpperCase(md5.toUpperCase().substring(8,24));
    }
    function encodeResult () {
        if (selectState=="BASE64") {
            return Base64.encode(text);
        }else if (selectState=="URL") {
            return encodeURIComponent(text);
        }else if (selectState=="SHA1") {
            return sha1Encrypt(text);
        }else if (selectState=="SHA256") {
            return sha256Encrypt(text);
        }else if (selectState=="SHA512") {
            return sha512Encrypt(text);
        }else {
            return "";
        }
    }
    function decodeResult () {
        if (selectState=="BASE64") {
            return Base64.decode(text);
        }else if (selectState=="URL") {
            return decodeURIComponent(text);
        }else {
            return "";
        }
    }

    function encodeAndDecodeSecretResult () {
        if (selectState=="AES") {
            return aesEncrypt(text,secretText);
        }else if (selectState=="DES") {
            return desEncrypt(text,secretText);
        }else if (selectState=="Triple DES") {
            return tripleDesEncrypt(text,secretText);
        }else if (selectState=="Rabbit") {
            return rabbitEncrypt(text,secretText);
        }else if (selectState=="RC4") {
            return rc4Encrypt(text,secretText);
        }else if (selectState=="HmacMD5") {
            return hmacMd5Encrypt(text,secretText);
        }else if (selectState=="HmacSHA1") {
            return hmacSha1Encrypt(text,secretText);
        }else if (selectState=="HmacSHA256") {
            return hmacSha256Encrypt(text,secretText);
        }else if (selectState=="HmacSHA512") {
            return hmacSha512Encrypt(text,secretText);
        }else {
            return "";
        }
    }
    function decodeAndDecodeSecretResult () {
        if (selectState=="AES") {
            return aesDecrypt(text,secretText);
        }else if (selectState=="DES") {
            return desDecrypt(text,secretText);
        }else if (selectState=="Triple DES") {
            return tripleDesDecrypt(text,secretText);
        }else if (selectState=="Rabbit") {
            return rabbitDecrypt(text,secretText);
        }else if (selectState=="RC4") {
            return rc4Decrypt(text,secretText);
        }else {
            return "";
        }
    }
}

export default Options
