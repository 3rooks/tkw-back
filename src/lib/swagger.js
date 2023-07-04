import {
    loginSchemaDTO,
    registerSchemaDTO,
    updateEmailSchemaDTO,
    updatePasswordSchemaDTO
} from '#application/middlewares/dto/schemas/moderator.schema.dto.js';
import { schoolSchemaDTO } from '#application/middlewares/dto/schemas/school.schema.dto.js';
import { ROUTES_PATH } from '#utils/paths.js';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Ejemplo',
            version: '1.0.0',
            description: 'Documentación de la API de Ejemplo'
        },
        tags: ['Moderators', 'Persons', 'Schools'],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },
            schemas: {
                RegisterModerator: registerSchemaDTO,
                LoginModerator: loginSchemaDTO,
                UpdateModeratorEmail: updateEmailSchemaDTO,
                UpdateModeratorPassword: updatePasswordSchemaDTO,
                CreateSchool: schoolSchemaDTO
            },
            responseBodies: {
                Unauthorized: {
                    example: { errors: 'UNAUTHORIZED' }
                },
                WrongFields: {
                    example: { errors: ['wrong fields...'] }
                },
                AuthToken: {
                    example: {
                        token: 'JWT'
                    }
                },
                Moderator: {
                    example: {
                        _id: 'string',
                        email: 'string',
                        password: 'stringst',
                        role: 'string',
                        isActive: 'boolean',
                        createdAt: 'Date',
                        updatedAt: 'Date'
                    }
                },
                ModeratorCreated: {
                    example: {
                        results: 'MODERATOR_CREATED'
                    }
                },
                ModeratorUpdated: {
                    example: {
                        results: 'MODERATOR_UPDATED'
                    }
                },
                ModeratorConflict: {
                    example: {
                        results: 'MODERATOR_EXISTS'
                    }
                }
            }
        }
    },
    apis: [ROUTES_PATH]
};

export const swaggerDoc = swaggerJsDoc(options);
