/**
 * Seminar 2.2 Transaction output
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Transaction {
    constructor(from, to, value) {
        // TODO 1 Init transaction from, to, value, spent, hash 
    }
    spend() {
        // TODO 2 Check is transaction spent
        throw new Error('Already spended!');
    }
}

module.exports = { Transaction }
