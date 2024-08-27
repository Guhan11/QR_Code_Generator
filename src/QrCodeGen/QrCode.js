import React from 'react'
import './QrCode.css'
import { useState } from 'react'

const QrCode = () => {
  const [img, setImg] = useState('')
  const [loading, setLoading] = useState('')
  const [qrData, setQrData] = useState('')
  const [qrSize, setQrSize] = useState('')

  async function generateQr() {
    setLoading(true)
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`
      setImg(url)
    } catch (error) {
      console.error('Error generating QR code', error)
    } finally {
      setLoading(false)
    }
  }
  function downloadQr() {
    fetch(img)
      .then((Response) => Response.blob())
      .then((blob) => {
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = 'qrCode.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} className="qr-image" />}
      <div className="input">
        <label htmlFor="dataInput" className="input-label">
          Data for QR Code:
        </label>
        <input
          type="text"
          value={qrData}
          id="dataInput"
          placeholder="Enter the data"
          onChange={(e) => setQrData(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image Size (e.g., 150):
        </label>
        <input
          type="text"
          value={qrSize}
          id="sizeInput"
          placeholder="Enter the image size"
          onChange={(e) => setQrSize(e.target.value)}
        />

        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQr}
        >
          Generate QR
        </button>
        <button className="download-button" onClick={downloadQr}>
          Download QR
        </button>
      </div>
      <p className="footer">
        Designed By <a href="https://github.com/Guhan11">Guhan</a>
      </p>
    </div>
  )
}

export default QrCode
