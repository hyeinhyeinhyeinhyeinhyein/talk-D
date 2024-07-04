import React from 'react';


const DeleteKtheme = async () => {
    const apiUrl=process.env.REACT_APP_API_URL;
    try {
        const response = await fetch(`${apiUrl}/deleteKtheme`, {
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
