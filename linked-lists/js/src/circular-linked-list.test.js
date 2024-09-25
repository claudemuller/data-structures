import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { CircularLinkedList } from "./circular-linked-list.js";

describe("append", () => {
  it("should append a node to the end of an empty list", () => {
    // Arrange.
    const list = new CircularLinkedList();

    // Act.
    const actual = list.append("first");

    // Assert.
    expect(actual.value).toEqual("first");
    expect(list.current.value).toEqual("first");
    expect(list.current.next.value).toEqual("first");
  });

  it("should append a node to the end of a list of one", () => {
    // Arrange.
    const list = new CircularLinkedList();
    const node = {
      value: "first",
      next: null,
    };
    node.next = node;
    list.current = node;

    // Act.
    const actual = list.append("second");

    // Assert.
    expect(actual.value).toEqual("second");
    expect(list.current.value).toEqual("second");
    expect(list.current.next.value).toEqual("first");
  });

  it("should append a node to the end of a list of two", () => {
    // Arrange.
    const list = new CircularLinkedList();
    const node2 = {
      value: "second",
      next: null,
    };
    const node1 = {
      value: "first",
      next: node2,
    };
    node2.next = node1;
    list.current = node2;

    // Act.
    const actual = list.append("third");

    // Assert.
    expect(actual.value).toEqual("third");
    expect(list.current.value).toEqual("third");
    expect(list.current.next.value).toEqual("first");
    expect(list.current.next.next.value).toEqual("second");
  });
});

describe("insertAt", () => {
  it("should insert a node after the node passed", () => {
    // Arrange.
    const list = new CircularLinkedList();
    const node3 = {
      value: "fourth",
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
    node3.next = node1;
    list.current = node1;

    // Act.
    const actual = list.insertAt(node2, "third");

    // Assert.
    expect(actual.value).toEqual("third");
    expect(actual.next.value).toEqual("fourth");
    expect(list.current.value).toEqual("third");
    expect(list.current.next.next.value).toEqual("first");
  });
});

describe("remove", () => {
  it("should do nothing when removing a node from an empty list", () => {
    // Arrange.
    const list = new CircularLinkedList();

    // Act.
    const actual = list.remove("value");

    // Assert.
    expect(actual).toBeUndefined();
    expect(list.head).toBeNull();
  });

  it("should remove a node from a list of one", () => {
    // Arrange.
    const list = new CircularLinkedList();
    const node = {
      value: "first",
      next: null,
    };
    list.current = node;

    // Act.
    list.remove(node);

    // Assert.
    expect(list.head).toBeNull();
  });

  it("should remove a node from a list of three nodes", () => {
    // Arrange.
    const list = new CircularLinkedList();
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
    list.current = node1;

    // Act.
    list.remove(node2);

    // Assert.
    expect(list.current.value).toEqual("first");
    expect(list.current.next.value).toEqual("third");
  });
});

describe("traverse", () => {
  it("should return the first node requested", () => {
    // Arrange.
    const list = new CircularLinkedList();
    const node4 = {
      value: "fourth",
      next: null,
    };
    const node3 = {
      value: "third",
      next: node4,
    };
    const node2 = {
      value: "second",
      next: node3,
    };
    const node1 = {
      value: "first",
      next: node2,
    };
    node4.next = node1;
    list.current = node3;

    // Act.
    const actual = list.traverse((n) => n.value === "third");

    // Assert.
    expect(actual.value).toEqual("third");
    expect(actual.next.value).toEqual("fourth");
    expect(actual.next.next.value).toEqual("first");
  });

  it("should traverse the list and find the node requested", () => {
    // Arrange.
    const list = new CircularLinkedList();
    const node4 = {
      value: "fourth",
      next: null,
    };
    const node3 = {
      value: "third",
      next: node4,
    };
    const node2 = {
      value: "second",
      next: node3,
    };
    const node1 = {
      value: "first",
      next: node2,
    };
    node4.next = node1;
    list.current = node1;

    // Act.
    const actual = list.traverse((n) => n.value === "third");

    // Assert.
    expect(actual.value).toEqual("third");
    expect(actual.next.value).toEqual("fourth");
    expect(actual.next.next.value).toEqual("first");
  });

  it("should return null if the entire list is traversed without a result", () => {
    // Arrange.
    const list = new CircularLinkedList();
    const node4 = {
      value: "fourth",
      next: null,
    };
    const node3 = {
      value: "third",
      next: node4,
    };
    const node2 = {
      value: "second",
      next: node3,
    };
    const node1 = {
      value: "first",
      next: node2,
    };
    list.current = node3;
    node4.next = node1;

    // Act.
    const actual = list.traverse((n) => n.value === "huh?");

    // Assert.
    expect(actual).toBeNull();
  });
});
