function CircularBuffer(bufferSize: number) {
    let front: number,
        rear : number,
        count: number,
        buff : any[],
        size : number = bufferSize;

    clear();

    this.write = (value: any): void => {
        if (value === undefined || value === null) {
            return;
        }

        if (isFull()) {
            throw bufferFullException();
        }

        buff[++rear] = value;
        count++;
    }

    this.forceWrite = (value: any): void => {
        if (isFull()) {
            this.read();
        }

        this.write(value);
    }

    this.read = (): any => {
        if (isEmpty()) {
            throw bufferEmptyException();
        }

        count--;
        return buff[front++];
    }

    this.clear = clear;

    function clear(): void {
        front = 0;
        rear = -1;
        count = 0;
        buff = new Array(size);
    }

    function isFull(): boolean {
        return count === size;
    }

    function isEmpty(): boolean {
        return count === 0;
    }
}

const bufferEmptyException = () => new Error("Buffer is empty");
const bufferFullException  = () => new Error("Buffer is full");
const circularBuffer       = (size: number) => new CircularBuffer(size);

export = {
    circularBuffer,
    bufferEmptyException,
    bufferFullException
};
