import { assert } from 'chai';
import { ethers, getNamedAccounts, network } from 'hardhat';
import { developmentChains } from '../../helper-hardhat-config';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { FundMe } from '../../typechain';

developmentChains.includes(network.name)
  ? describe.skip
  : describe('FundMe Staging Tests', async function () {
      let fundMe: FundMe;
      let deployer: string;

      const sendValue = ethers.utils.parseEther('0.1');

      beforeEach(async function () {
        const accounts = await ethers.getSigners();
        deployer = (await getNamedAccounts()).deployer;
        console.log('Deployer: ', deployer);
        fundMe = await ethers.getContract('FundMe', deployer);
      });

      it('Allows people to fund and withdraw', async function () {
        await fundMe.fund({ value: sendValue });
        await fundMe.withdraw({
          gasLimit: 100000,
        });
        const endingFundMeBalance = await fundMe.provider.getBalance(
          fundMe.address
        );
        console.log(
          endingFundMeBalance.toString() +
            ' should equal 0, running assert equal...'
        );
        assert.equal(endingFundMeBalance.toString(), '0');
      });
    });
