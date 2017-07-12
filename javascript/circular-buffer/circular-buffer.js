"use strict";
function CircularBuffer(bufferSize) {
    let front, rear, count, buff, size = bufferSize;
    clear();
    this.write = (value) => {
        if (value === undefined || value === null) {
            return;
        }
        if (isFull()) {
            throw bufferFullException();
        }
        buff[++rear] = value;
        count++;
    };
    this.forceWrite = (value) => {
        if (isFull()) {
            this.read();
        }
        this.write(value);
    };
    this.read = () => {
        if (isEmpty()) {
            throw bufferEmptyException();
        }
        count--;
        return buff[front++];
    };
    this.clear = clear;
    function clear() {
        front = 0;
        rear = -1;
        count = 0;
        buff = new Array(size);
    }
    function isFull() {
        return count === size;
    }
    function isEmpty() {
        return count === 0;
    }
}
const bufferEmptyException = () => new Error("Buffer is empty");
const bufferFullException = () => new Error("Buffer is full");
const circularBuffer = (size) => new CircularBuffer(size);
module.exports = {
    circularBuffer,
    bufferEmptyException,
    bufferFullException
};
