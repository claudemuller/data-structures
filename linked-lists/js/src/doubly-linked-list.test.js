import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { DoublyLinkedList } from "./doubly-linked-list.js";

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

  it("should remove the last node from a list of three nodes", () => {
    // Arrange.
    const list = new DoublyLinkedList();
    const node2 = {
      value: "second",
    };
    const node3 = {
      value: "third",
      next: null,
      prev: node2,
    };
    list.tail = node3;
    node2.next = node3;
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.prev = node1;
    list.head = node1;

    // Act.
    list.remove(node3);

    // Assert.
    expect(list.head.value).toEqual("first");
    expect(list.head.next.value).toEqual("second");
    expect(list.tail.value).toEqual("second");
    expect(list.tail.prev.value).toEqual("first");
  });

  it("should remove the first node from a list of three nodes", () => {
    // Arrange.
    const list = new DoublyLinkedList();
    const node2 = {
      value: "second",
    };
    const node3 = {
      value: "third",
      next: null,
      prev: node2,
    };
    list.tail = node3;
    node2.next = node3;
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.prev = node1;
    list.head = node1;

    // Act.
    list.remove(node1);

    // Assert.
    expect(list.head.value).toEqual("second");
    expect(list.head.next.value).toEqual("third");
    expect(list.tail.value).toEqual("third");
    expect(list.tail.prev.value).toEqual("second");
  });

  it("should remove a node from the middle of a list of three nodes", () => {
    // Arrange.
    const list = new DoublyLinkedList();
    const node2 = {
      value: "second",
    };
    const node3 = {
      value: "third",
      next: null,
      prev: node2,
    };
    list.tail = node3;
    node2.next = node3;
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.prev = node1;
    list.head = node1;

    // Act.
    list.remove(node2);

    // Assert.
    expect(list.head.value).toEqual("first");
    expect(list.head.next.value).toEqual("third");
    expect(list.tail.value).toEqual("third");
    expect(list.tail.prev.value).toEqual("first");
  });
});

describe("traverse", () => {
  it("should return null when traversing an empty list", () => {
    // Arrange.
    const list = new DoublyLinkedList();

    // Act.
    const actual = list.traverse((node) => node.value === "second");

    // Assert.
    expect(actual).toBeNull();
  });

  it("should traverse the list and find the node requested", () => {
    // Arrange.
    const list = new DoublyLinkedList();
    const node2 = {
      value: "second",
    };
    const node3 = {
      value: "third",
      next: null,
      prev: node2,
    };
    list.tail = node3;
    node2.next = node3;
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.prev = node1;
    list.head = node1;

    // Act.
    const actual = list.traverse((node) => node.value === "second");

    // Assert.
    expect(actual.value).toEqual("second");
  });

  it("should traverse the list to the end", () => {
    // Arrange.
    const list = new DoublyLinkedList();
    const node2 = {
      value: "second",
    };
    const node3 = {
      value: "third",
      next: null,
      prev: node2,
    };
    list.tail = node3;
    node2.next = node3;
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.prev = node1;
    list.head = node1;

    // Act.
    const actual = list.traverse((_) => false);

    // Assert.
    expect(actual.value).toEqual("third");
  });
});

describe("traverseBackward", () => {
  it("should return null when traversing an empty list", () => {
    // Arrange.
    const list = new DoublyLinkedList();

    // Act.
    const actual = list.traverseBackward((node) => node.value === "second");

    // Assert.
    expect(actual).toBeNull();
  });

  it("should traverse the list backward and find the node requested", () => {
    // Arrange.
    const list = new DoublyLinkedList();
    const node2 = {
      value: "second",
    };
    const node3 = {
      value: "third",
      next: null,
      prev: node2,
    };
    list.tail = node3;
    node2.next = node3;
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.prev = node1;
    list.head = node1;

    // Act.
    const actual = list.traverseBackward((node) => node.value === "second");

    // Assert.
    expect(actual.value).toEqual("second");
  });

  it("should traverse to the beginning of the list", () => {
    // Arrange.
    const list = new DoublyLinkedList();
    const node2 = {
      value: "second",
    };
    const node3 = {
      value: "third",
      next: null,
      prev: node2,
    };
    list.tail = node3;
    node2.next = node3;
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.prev = node1;
    list.head = node1;

    // Act.
    const actual = list.traverseBackward((_) => false);

    // Assert.
    expect(actual.value).toEqual("first");
  });
});
