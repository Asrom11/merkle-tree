/**
 * Seminar 2.1 Blockchain primitive
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Block {
    constructor(data){
        this.data = data;      // Here we simplify data, let it be just a simple string
        this.previousHash = null;
    }

    toHash(){
        const hashBytes = utf8ToBytes(this.data + this.previousHash);
        return SHA256(hashBytes);        // a hash as byte array
    }
}


class Blockchain {
    constructor() {
        const genesisBlock = new Block("simple Genesis Block");
        genesisBlock.previousHash = null;
        this.chain = [genesisBlock];
    }

    addBlock(block){
        if (this.chain.length === 0) {
            throw new Error("Cannot add block to empty chain");
        }
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            
            if (currentBlock.previousHash.toString() !== previousBlock.toHash().toString()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = { Block, Blockchain };
