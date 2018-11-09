const dev = {
  s3: {
    REGION: 'ap-southeast-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1xc34uw7o74ot'
  },
  apiGateway: {
    REGION: 'ap-southeast-1',
    URL: 'https://osqiglb7zc.execute-api.ap-southeast-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'ap-southeast-1',
    USER_POOL_ID: 'ap-southeast-1_VS0kKLBWr',
    APP_CLIENT_ID: '1muq1sagvtksfjpe5g4rqgl1qm',
    IDENTITY_POOL_ID: 'ap-southeast-1:0d39b33c-bd82-4d64-9002-7125a2864bb6'
  },
  STRIPE_KEY: 'pk_test_JDWH2SEmS9gOjnNDokPAzir2',
}

const prod = {
  s3: {
    REGION: 'ap-southeast-1',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-boxj9qfyy4gv'
  },
  apiGateway: {
    REGION: 'ap-southeast-1',
    URL: 'https://hbpe8zuthl.execute-api.ap-southeast-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'ap-southeast-1',
    USER_POOL_ID: 'ap-southeast-1_LMlIEYNGX',
    APP_CLIENT_ID: '7gikulogug17r7fsp51sgub6jq',
    IDENTITY_POOL_ID: 'ap-southeast-1:a8b6f1dd-3257-4316-968e-0f473c80e130'
  },
  STRIPE_KEY: 'pk_test_JDWH2SEmS9gOjnNDokPAzir2',
}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
}
