import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardMedia, Button } from '@mui/material';
import useStyles from './useStyles';


const EmailStructure = ({ handleInputChange, categoryvaule }) => {
    const classes = useStyles();
    const [category, setCategory] = useState('all'); // Default category is 'all'
    const [hoveredImage, setHoveredImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setCategory(categoryvaule)
    }, [categoryvaule])

    const handleMouseEnter = id => {
        setHoveredImage(id);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const handleImageClick = id => {
        const selected = images.find(image => image.id === id);
        // console.log(selected.url);
        handleInputChange(selected.url)
        setSelectedImage(id);
    };


    const images = [
        { id: 1, category: 'cars', url: 'https://raw.githubusercontent.com/linmumu00/stripo-Templates2/master/Public-Templates/Custom-Templates/Cars/Fathers-day-newsletter/Fathers-Day' },
        { id: 2, category: 'fashion', url: 'https://raw.githubusercontent.com/linmumu00/stripo-Templates2/master/Public-Templates/Custom-Templates/Fashion/Black-friday/Black-friday' },
        { id: 3, category: 'sport', url: 'https://raw.githubusercontent.com/linmumu00/stripo-Templates2/master/Public-Templates/Custom-Templates/Sport/Independence-Day/Independence-Day' },
        // Add more images and categories here
    ];

    const filteredImages = category === 'all' ? images : images.filter(image => image.category === category);

    return (
        <Container>
            <Grid container spacing={1} >
                <Grid item md={1.5}></Grid>
                {filteredImages.map(image => (
                    <Grid style={{ height: '80vh' }} onMouseEnter={() => handleMouseEnter(image.id)}
                        onMouseLeave={handleMouseLeave} key={image.id} item xs={12} sm={6} md={3.3} >
                        <Button
                            className={image.id === hoveredImage || image.id === selectedImage ? classes.customButton : ` ${classes.selectButton} ${classes.customButton}`}
                            color="secondary"
                            size="small"
                            variant="contained"
                            onClick={() => handleImageClick(image.id)}
                        >
                            {selectedImage === image.id ? 'Chosen' : 'Choose'}
                        </Button>
                        <Card onClick={() => handleImageClick(image.id)} className={`${classes.cardImage} ${classes.cardHovered}`}>
                            <CardMedia className={classes.media} image={image.url + '.png'} title={`Image ${image.id}`} />
                        </Card>
                    </Grid>
                ))}
                <Grid item md={1}></Grid>
            </Grid>
        </Container>
    );
};

export default EmailStructure;
