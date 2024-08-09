async function main() {
    const [deployer] = await ethers.getOrder();

    console.log("Deploying contracts with the account:", deployer.address);

    const Order = await ethers.getContractFactory("OrderContract");
    const order= await Order.deploy();

    console.log("Inventory contract deployed to:", order.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
