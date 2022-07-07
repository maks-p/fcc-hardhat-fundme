import { ethers, getNamedAccounts, deployments } from 'hardhat';

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract('FundMe', deployer);

  console.log('Withdrawing...');

  const txn = await fundMe.withdraw();

  await txn.wait(1);

  console.log('Withdrawn!');
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
