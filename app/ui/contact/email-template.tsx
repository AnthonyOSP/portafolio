import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName, email, message
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
    <h1 style={{ color: '#4CAF50' }}>Nuevo Mensaje de Contacto</h1>
    <p><strong>Nombre:</strong> {fullName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{message}</p>
  </div>
);
