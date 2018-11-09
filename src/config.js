const dev = {
  s3: {
    REGION: 'ap-southeast-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1xc34uw7o74ot'
  },
  apiGateway: {
    REGION: 'ap-southeast-1',
    URL: 'https://d5w6sovozk.execute-api.ap-southeast-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'ap-southeast-1',
    USER_POOL_ID: 'ap-southeast-1_67Jbq5ixa',
    APP_CLIENT_ID: '6ahuem7t3sahge9dd3shnltdko',
    IDENTITY_POOL_ID: 'ap-southeast-1:6e83a70c-c4e8-4b62-a53d-aafc2007d381'
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
    URL: 'https://gme4ey7tb5.execute-api.ap-southeast-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'ap-southeast-1',
    USER_POOL_ID: 'ap-southeast-1_L15kyzBKL',
    APP_CLIENT_ID: '3nc7pa8lrkf659okjdjph00k7o',
    IDENTITY_POOL_ID: 'ap-southeast-1:de3ee411-4bf5-4450-bf39-d1ffd14fd2e0'
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
