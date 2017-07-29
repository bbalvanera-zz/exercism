"use strict";
const REAR = Symbol();
const FRONT = Symbol();
class ListNode {
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.items = 0;
    }
    count() {
        return this.items;
    }
    push(value) {
        this.addTo(REAR, value);
    }
    unshift(value) {
        this.addTo(FRONT, value);
    }
    pop() {
        return this.removeFrom(REAR);
    }
    shift() {
        return this.removeFrom(FRONT);
    }
    delete(value) {
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
    addTo(addTo, value) {
        const node = new ListNode(value);
        if (this.items === 0) {
            this.front = this.rear = node;
        }
        else {
            switch (addTo) {
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
    removeFrom(removeFrom) {
        const removed = removeFrom === FRONT ? this.front : this.rear;
        this.items--;
        if (this.items === 0) {
            this.front = this.rear = undefined;
        }
        else {
            switch (removeFrom) {
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
    getListNodeByValue(value) {
        let listNode = this.front;
        let retVal;
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
module.exports = LinkedList;
