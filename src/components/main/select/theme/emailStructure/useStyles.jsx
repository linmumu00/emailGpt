import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cardImage: {
        height: '500px',
        marginLeft: '1vh',
        maxWidth: '80%',
        transition: 'transform 0.8s', // Add a smooth transition
        overflowY: 'auto',
        boxShadow: '0px 0px 0px rgba(0,0,0,0)', // Default no shadow
        '&:hover': {
            transform: 'scale(1.15)', // Apply a small scale on hover
            boxShadow: '0px 4px 8px rgba(0,0,0,0.3)', // Apply a subtle shadow on hover
        },
        '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
        '& .MuiCardMedia-root': {
            height: '100%', // Show full image height on hover
        },
    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
    cardHovered: {
        transform: 'scale(1.1)', // Enlarge the card on hover
        '& .MuiCardMedia-root': {
            height: '100%', // Show full image height on hover
        },
    },
    customButton: {
        backgroundImage: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
        marginBottom: '5vh',
        zIndex: '100',
        '&:hover': {
            backgroundColor: '#d5004f',
        },
    },
    selectButton: {
        visibility: 'hidden'
    },
});

export default useStyles