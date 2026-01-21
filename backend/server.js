const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Route for about/faq page
app.get('/about-faq', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/about-faq.html'));
});

// Route for support page
app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/support.html'));
});

// Route for legal page
app.get('/legal', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/legal.html'));
});

// API endpoints
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'MBZ 500ml', price: 0.99, description: 'Perfect for on-the-go hydration' },
        { id: 2, name: 'MBZ 1L', price: 1.49, description: 'Ideal for daily hydration' },
        { id: 3, name: 'MBZ 1.5L', price: 1.99, description: 'Great for sharing or extended use' }
    ];
    res.json(products);
});

// Start server
app.listen(PORT, () => {
    console.log(`MBZ Global website running on port ${PORT}`);
});
