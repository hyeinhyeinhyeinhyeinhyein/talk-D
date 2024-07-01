import React from 'react';


const DeleteKtheme = async () => {
    try {
        const response = await fetch('http://localhost:5000/deleteKtheme', {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('ktheme files deleted successfully');

        } else {
            console.log('Failed to delete ktheme files');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('Error deleting ktheme files');
    }
    };
export default DeleteKtheme;
