import React, { useState } from 'react'
import './styles.scss'
import { Form, InputGroup, FormControl } from 'react-bootstrap'
var QRCode = require('qrcode.react'); 

const QRCodeT: React.FC = () => {
    const [value, setValue] = useState('');
    const [useImage, setUseImage] = useState(false);
    const [imageUrl, setImageUrl] = useState('https://static.zpao.com/favicon.png');

    let imageSetDom;
    let qrcodeDom;
    if (useImage) {
        imageSetDom=<div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Image</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={imageUrl} onChange={(e: any) => setImageUrl(e.target.value)}/>
        </InputGroup>
        </div>

        qrcodeDom=<QRCode
            className="qrcode-img"
            value={value}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"Q"}
            includeMargin={false}
            renderAs={"svg"}
            imageSettings={{
                src: imageUrl,
                x: null,
                y: null,
                height: 24,
                width: 24,
                excavate: true,
            }}
            />
    } else {
        imageSetDom = <div></div>;
        qrcodeDom=<QRCode
            className="qrcode-img"
            value={value}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"Q"}
            includeMargin={false}
            renderAs={"svg"}
            />
    }

    
    return (
        <div className="container">
        
            <div className="form-data">
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text>Value</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" value={value} onChange={(e: any) => setValue(e.target.value)} rows="3"/>
                    </InputGroup>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" checked={useImage} onChange={(e: any) => setUseImage(e.target.checked)} label="Include Image?" />
                    </Form.Group>
                    {imageSetDom}
                </Form>
            </div>
            {qrcodeDom}
        </div>
  )
}

export default QRCodeT
