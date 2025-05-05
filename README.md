# QR Code Generator

A modern, responsive web application that generates QR codes from URLs or text input. Built with vanilla JavaScript, HTML, and Tailwind CSS, this application provides a clean and intuitive user interface for creating and downloading QR codes.

![QR Code Generator](https://via.placeholder.com/800x400?text=QR+Code+Generator)

## Features

- 🎨 Clean, modern UI with responsive design
- ✨ Real-time QR code generation
- 📱 Mobile-friendly interface
- 💾 Download QR codes as PNG images
- 📋 Copy input text to clipboard
- ⚡ Fast and lightweight (no frameworks)
- 🎯 Input validation
- 🌈 Beautiful hover effects and transitions

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- qrcode.js library

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installation required

### Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enter a URL or text in the input field
4. Click "Generate QR Code"
5. Use the "Download" button to save the QR code as PNG
6. Use the "Copy Link" button to copy the input text to clipboard

## How It Works

The application uses the following workflow:

1. User enters text or URL in the input field
2. On clicking "Generate QR Code":
   - Input is validated
   - QR code is generated using qrcode.js
   - Result is displayed in a card container
3. User can then:
   - Download the QR code as PNG
   - Copy the input text to clipboard

## Features in Detail

### Input Validation
- Prevents empty submissions
- Shows error messages when validation fails
- Clears error messages on new input

### QR Code Generation
- Uses qrcode.js library
- Generates high-quality QR codes
- Supports both URLs and text input
- Configurable size and error correction level

### Download Functionality
- Downloads QR code as PNG
- Automatic file naming
- High-quality image output

### Copy to Clipboard
- Copies input text to clipboard
- Visual feedback on successful copy
- Error handling for clipboard operations

## Browser Support

The application works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Submitting a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [qrcode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation
- [Tailwind CSS](https://tailwindcss.com/) for styling 