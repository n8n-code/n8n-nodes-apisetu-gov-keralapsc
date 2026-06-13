import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovKeralapscApi implements ICredentialType {
        name = 'N8nDevApisetuGovKeralapscApi';

        displayName = 'Apisetu Gov Keralapsc API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovKeralapsc/apisetu-gov-keralapsc.svg', dark: 'file:../nodes/ApisetuGovKeralapsc/apisetu-gov-keralapsc.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/keralapsc/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/keralapsc/v3',
                        description: 'The base URL of your Apisetu Gov Keralapsc API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
