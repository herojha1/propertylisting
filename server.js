const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Homepage.html'));
});

// Handle requests to show details for clicked images
app.get('/details/:location', (req, res) => {
    const location = req.params.location;

    // Example data - in a real app, this could come from a database
    const details = {
        varanasi: {
            location: "Varanasi",
            ratings: "9 Star",
            type: "4BHK",
            description: "A beautiful 4BHK house located in the heart of Varanasi."
        },
        kolkata: {
            location: "Kolkata",
            ratings: "7 Star",
            type: "3BHK",
            description: "A cozy 3BHK apartment in the vibrant city of Kolkata."
        },
        chandigarh: {
            location: "Chandigarh",
            ratings: "8 Star",
            type: "4BHK",
            description: "A luxurious 4BHK villa in Chandigarh with modern amenities."
        },
        ajmer: {
            location: "Ajmer",
            ratings: "6 Star",
            type: "4BHK",
            description: "A spacious 4BHK house in the serene city of Ajmer."
        },
        agra: {
            location: "Agra",
            ratings: "7 Star",
            type: "3BHK",
            description: "A charming 3BHK apartment near the iconic Taj Mahal in Agra."
        }
    };

    const property = details[location.toLowerCase()];
    if (property) {
        res.send(`
            <h1>${property.location}</h1>
            <p><strong>Ratings:</strong> ${property.ratings}</p>
            <p><strong>Type:</strong> ${property.type}</p>
            <p>${property.description}</p>
            <a href="/">Go Back</a>
        `);
    } else {
        res.status(404).send('Property not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
