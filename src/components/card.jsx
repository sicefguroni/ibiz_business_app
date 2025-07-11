import React from 'react';
import { Card } from '@mui/material';

export default function FloatingCard({ children }) {
    return (
        <Card
            sx={{
                width: 800,
                height: 420,
                borderRadius: 2,
                boxShadow: 4,
                padding: 4,
                backgroundColor: '#fbf2ec',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflowY: 'auto',
                margin: 'auto',
                my: 2,
            }}
        >
            {children}
        </Card>
    );
}
