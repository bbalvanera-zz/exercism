const REAR = Symbol();
const FRONT = Symbol();

class ListNode {
    public next: ListNode;
    public previous: ListNode;

    constructor(public value: number) {

    }
}

class LinkedList {
    private items = 0;
    private front: ListNode;
    private rear: ListNode;

    public count(): number {
        return this.items;
    }

    public push(value: number): void {
        this.addTo(REAR, value);
    }

    public unshift(value: number): void {
        this.addTo(FRONT, value);
    }

    public pop(): number {
        return this.removeFrom(REAR);
    }

    public shift(): number {
        return this.removeFrom(FRONT);
    }

    public delete(value: number): void {
        const toDelete = this.getListNodeByValue(value);

        if (!toDelete) {
            return;
        }

        if (toDelete.previous) {
            toDelete.previous.next = toDelete.next;
        }

        if (toDelete.next) {
            toDelete.next.previous = toDelete.previous;
        }

        toDelete.previous = toDelete.next = undefined;
        this.items--;
    }

    private addTo(addTo: Symbol, value: number): void {
        const node = new ListNode(value);

        if (this.items === 0) {
            this.front = this.rear = node;
        }
        else {
            switch(addTo) {
                case FRONT: {
                    node.next = this.front;

                    this.front.previous = node;
                    this.front = node;
                    break;
                }
                case REAR: {
                    node.previous = this.rear;

                    this.rear.next = node;
                    this.rear = node;
                    break;
                }
            }
        }
        
        this.items++;
    }

    private removeFrom(removeFrom: Symbol): number {
        const removed = removeFrom === FRONT ? this.front : this.rear;
        this.items--;

        if (this.items === 0) {
            this.front = this.rear = undefined;
        }
        else {
            switch(removeFrom) {
                case FRONT: {
                    this.front = removed.next;
                    this.front.previous = undefined;
                    break;
                }
                case REAR: {
                    this.rear = removed.previous;
                    this.rear.next = undefined;
                    break;
                }
            }
        }

        return removed.value;
    }

    private getListNodeByValue(value: number): ListNode {
        let listNode = this.front;
        let retVal: ListNode;
        do {
            if (listNode.value === value) {
                retVal = listNode;
                break;
            }

            listNode = listNode.next;
        } while (listNode.next);

        return retVal;
    }
}

export = LinkedList;
