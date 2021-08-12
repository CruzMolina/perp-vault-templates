import { ethers } from 'hardhat';
const { createOrder, signTypedDataOrder } = require('@airswap/utils');

export const getOrder = async (
  sender: string,
  senderToken: string,
  senderTokenAmount: string,
  signer: string,
  signerToken: string,
  signerTokenAmount: string | number,
  swapContract: string,
  privateKey: any,
): Promise<any> => {
  const order = createOrder({
    signer: {
      wallet: signer,
      token: signerToken,
      amount: signerTokenAmount,
    },
    sender: {
      wallet: sender,
      token: senderToken,
      amount: senderTokenAmount,
    },
    affiliate: {
      wallet: ethers.constants.AddressZero,
    },
  });
  const signedOrder = await signTypedDataOrder(order, privateKey, swapContract);
  return signedOrder;
};
