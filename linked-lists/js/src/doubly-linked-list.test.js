import { DoublyLinkedList } from "./doubly-linked-list";

describe("append", () => {
    it("should append a node to the end of an empty list", () => {
        // Arrange.
        const list = new DoublyLinkedList();

        // Act.
        const actual = list.append("first");

        // Assert.
        expect(actual.value).toEqual("first");
        expect(list.head.value).toEqual("first");
    });

    it("should append a node to the end of a list", () => {
        // Arrange.
        const list = new DoublyLinkedList();
        const node = {
            value: "first",
            next: null,
        };
        list.head = node;
        list.tail = node;

        // Act.
        const actual = list.append("second");

        // Assert.
        expect(actual.value).toEqual("second");
        expect(list.head.value).toEqual("first");
        expect(list.head.next.value).toEqual("second");
        expect(list.tail.prev.value).toEqual("first");
    });

    it("should append a node to the end of a longer list", () => {
        // Arrange.
        const list = new DoublyLinkedList();

        // Act.
        list.append("first");
        list.append("second");
        list.append("third");
        const actual = list.append("fourth");

        // Assert.
        expect(actual.value).toEqual("fourth");
        expect(list.head.value).toEqual("first");
        expect(list.head.next.value).toEqual("second");
        expect(list.tail.value).toEqual("fourth");
        expect(list.tail.prev.value).toEqual("third");
    });
});

describe("insertAt", () => {
    it("should insert a node after the node passed", () => {
        // Arrange.
        const list = new DoublyLinkedList();
        const node = {
            value: "first",
            next: null,
        };
        list.head = node;

        // Act.
        const actual = list.insertAt(node, "second");

        // Assert.
        expect(actual.value).toEqual("second");
        expect(list.head.value).toEqual("first");
        expect(list.head.next.value).toEqual("second");
    });
});

describe("remove", () => {
    it("should do nothing when removing a node from an empty list", () => {
        // Arrange.
        const list = new DoublyLinkedList();

        // Act.
        const actual = list.remove("value");

        // Assert.
        expect(actual).toBeUndefined();
        expect(list.head).toBeNull();
    });

    it("should remove a node from a list of one", () => {
        // Arrange.
        const list = new DoublyLinkedList();
        const node = {
            value: "first",
            next: null,
        };
        list.head = node;

        // Act.
        list.remove(node);

        // Assert.
        expect(list.head).toBeNull();
    });

    it("should remove a node from a list of three nodes", () => {
        // Arrange.
        const list = new DoublyLinkedList();
        const node3 = {
            value: "third",
            next: null,
        };
        const node2 = {
            value: "second",
            next: node3,
        };
        const node1 = {
            value: "first",
            next: node2,
        };
        list.head = node1;

        // Act.
        list.remove(node2);

        // Assert.
        expect(list.head.value).toEqual("first");
        expect(list.head.next.value).toEqual("third");
    });
});

describe("traverse", () => {
    it("should traverse the list and find the node requested", () => {
        // Arrange.
        const list = new DoublyLinkedList();
        const node3 = {
            value: "third",
            next: null,
        };
        const node2 = {
            value: "second",
            next: node3,
        };
        const node1 = {
            value: "first",
            next: node2,
        };
        list.head = node1;

        // Act.
        const actual = list.traverse(n => n.value === "second");

        // Assert.
        expect(actual.value).toEqual("second");
    });
});

describe("traverseBackward", () => {
    it("should traverse the list backward and find the node requested", () => {
        // Arrange.
        const list = new DoublyLinkedList();
        const node3 = {
            value: "third",
            next: null,
        };
        const node2 = {
            value: "second",
            next: node3,
        };
        const node1 = {
            value: "first",
            next: node2,
        };
        list.head = node1;

        // Act.
        const actual = list.traverseBackward(n => n.value === "second");

        // Assert.
        expect(actual.value).toEqual("second");
    });
});
