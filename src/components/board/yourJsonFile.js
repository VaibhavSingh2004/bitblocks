const getRandomNonce = () => Math.floor(Math.random() * 100000);

const getRandomBlockId = () => `id@-${Math.floor(Math.random() * 1000)}`;

const getPreviousHash = (currentIndex) => {
    if (currentIndex <= 0) {
        return null;
    }
    const previousBlock = data.find(block => block.index === currentIndex - 1);
    return previousBlock ? previousBlock.hash : null;
};

const generateHash = (nonce) => {
    // Convert nonce to a string
    const nonceString = nonce.toString();

    // Get the sum of ASCII values of all characters in the nonce string
    let sum = 0;
    for (let i = 0; i < nonceString.length; i++) {
        sum += nonceString.charCodeAt(i);
    }

    // Take the sum modulo 100000 to ensure a 5-digit hash value
    const hash = sum % 100000;

    // Convert the hash to a string and split it into two parts
    const hashString = hash.toString();
    const midIndex = Math.floor(hashString.length / 2);

    // Get two random characters to add to the middle of the hash
    const randomChar1 = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter
    const randomChar2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Random uppercase letter

    // Insert the random characters into the middle of the hash string
    const modifiedHash = hashString.slice(0, midIndex) + randomChar1 + randomChar2 + hashString.slice(midIndex);

    return modifiedHash;
};

const data = [
    {
        index: 1,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x34f56",
        hash: "0x78de6"
    },
    {
        index: 2,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x78de6",
        hash: "0xab987"
    },
    {
        index: 3,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0xab987",
        hash: "0xf7e90"
    },
    {
        index: 4,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0xf7e90",
        hash: "0x34e80"
    },
    {
        index: 5,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x34e80",
        hash: "0x23c8e"
    },
    {
        index: 6,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x23c8e",
        hash: "0x90c23"
    },
    {
        index: 7,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x90c23",
        hash: "0xfbd98"
    },
    {
        index: 8,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0xfbd98",
        hash: "0xcfab3"
    },
    {
        index: 9,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0xcfab3",
        hash: "0x4e80d"
    },
    {
        index: 10,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x4e80d",
        hash: "0xab23c"
    },
    {
        index: 11,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0xab23c",
        hash: "0x8e97c"
    },
    {
        index: 12,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x8e97c",
        hash: "0xf9a5f"
    },
    {
        index: 13,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0xf9a5f",
        hash: "0xf9a5g"
    },
    {
        index: 14,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0xf9a5g",
        hash: "0x45a78"
    },
    {
        index: 15,
        BlockId: getRandomBlockId(),
        NonceNo: getRandomNonce(), // Random nonce value
        data: "Transaction data",
        prehash: "0x45a78",
        hash: "0xdfc78"
    }
];

export default data;
