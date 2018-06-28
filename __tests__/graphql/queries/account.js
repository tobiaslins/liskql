const { graphql } = require('graphql');
const { schema } = require('../../../src/graphql');

const address = '16009998050678037905L';
const publicKey =
  '73ec4adbd8f99f0d46794aeda3c3d86b245bd9d27be2b282cdd38ad21988556b';

describe('account', () => {
  it('should fetch account with address', async () => {
    const query = `
      query account {
        account(address: "${address}") {
          address
          balance
          unconfirmedBalance
          publicKey
          secondPublicKey
        }
      }
    `;
    const { data, errors } = await graphql(schema, query, {}, {});
    expect(errors).toBeUndefined();
    expect(data.account.address).toBeTruthy();
  });

  it('should fetch account with publicKey', async () => {
    const query = `
      query account {
        account(publicKey: "${publicKey}") {
          address
          balance
          unconfirmedBalance
          publicKey
          secondPublicKey
        }
      }
    `;
    const { data, errors } = await graphql(schema, query, {}, {});
    expect(errors).toBeUndefined();
    expect(data.account.address).toBeTruthy();
  });
});