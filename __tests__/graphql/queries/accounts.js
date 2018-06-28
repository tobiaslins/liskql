const { graphql } = require('graphql');
const { schema } = require('../../../src/graphql');

describe('accounts', () => {
  it('should fetch accounts', async () => {
    const query = `
      query accounts {
        accounts {
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
    expect(data.accounts.length).toBe(100);
  });

  describe('parameters', () => {
    it('should limit', async () => {
      const query = `
        query accounts {
          accounts(limit: 10) {
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
      expect(data.accounts.length).toBe(10);
    });

    // TODO test offset
  });
});