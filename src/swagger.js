import swaggerJsDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Dokumentasi API',
      version: '1.0.0',
      description: 'Dokumentasi lengkap API ChatCuy',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Local Server',
      },
      {
        url: 'https://api-chatcuy.vercel.app',
        description: 'Production Server',
      },
    ],
    tags: [
      {
        name: 'Profile',
        description: 'API Profile',
      },
      {
        name: 'Auth',
        description: 'API Auth',
      },
      {
        name: 'Chat',
        description: 'API Chat',
      },
    ],
  },
  apis: ['./src/docs/*.js'],
});
