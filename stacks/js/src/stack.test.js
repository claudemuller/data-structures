import { Stack } from "./stack";

describe("push", () => {
    it("should append a value to the end of an empty stack", () => {
        // Arrange.
        const stack = new Stack();

        // Act.
        stack.push("first");
        const actual = stack.len();

        // Assert.
        expect(actual).toEqual(1);
    });

    it("should append a value to the end of a non-empty stack", () => {
        // Arrange.
        const stack = new Stack([1, 2, 3]);

        // Act.
        stack.push(99);
        const actual = stack.len();

        // Assert.
        expect(actual).toEqual(4);
    });
});

describe("pop", () => {
    it("should pop the only value from the end of a stack", () => {
        // Arrange.
        const stack = new Stack([1]);

        // Act.
        const actual = stack.pop();
        const actualLen = stack.len();

        // Assert.
        expect(actual).toEqual(1);
        expect(actualLen).toEqual(0);
    });

    it("should pop a value from the end of a non-empty stack", () => {
        // Arrange.
        const stack = new Stack([1, 2, 3]);

        // Act.
        const actual = stack.pop();
        const actualLen = stack.len();

        // Assert.
        expect(actual).toEqual(3);
        expect(actualLen).toEqual(2);
    });

    it("should return null when popping from an empty stack", () => {
        // Arrange.
        const stack = new Stack();

        // Act.
        const actual = stack.pop();
        const actualLen = stack.len();

        // Assert.
        expect(actual).toBeNull();
        expect(actualLen).toEqual(0);
    });
});

