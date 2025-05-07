import * as sdk from './generated-sdk';

const organizationApi = new sdk.OrganizationApi(
  new sdk.Configuration({
    basePath: 'http://localhost:3000',
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3M2MwMDQ0LWMwMjAtNDRjNi04Mjc5LWM5ZGYwZWM1NzI3MiIsImVtYWlsIjoiam9obi5kb2VAbWFpbC5jb20iLCJ0eXBlIjoiVVNFUiIsImlhdCI6MTc0NjE1Mzg3NywiZXhwIjoxNzQ2MjQwMjc3fQ.Wxpbz0znRWfbDAnKvEQIkSQHsbEG1fm-7SssL4RNM8E',
  }),
);

organizationApi
  .organizationControllerCreate({
    name: 'Organization 2 created from SDK',
  })
  .then((res) => console.log(res.data));
