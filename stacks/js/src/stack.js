/** Class representing a stack. **/
export class Stack {
	/**
	 * The internal data structure.
	 *
	 * @type {any}
	 * @private
	 */
	#data;

	/**
	 * Create a stack.
	 *
	 * @param {any[]} - The initial values to push to the stack.
	 */
	constructor(vals = []) {
		this.#data = vals;
	}

	/**
	 * Pushes an item onto the stack.
	 * 
	 * @param {any} val - The value to push onto the stack.
	 */
	push(val) {
		this.#data.push(val);
	}

	/**
	 * Pops the last item off the stack.
	 * 
	 * @returns {(any|null)} The value that gets popped off of the stack or null if empty.
	 */
	pop() {
		if (!this.#data.length) return null;
		return this.#data.pop();
	}

	/**
	* Returns the number of items in the stack.
	*
	* @returns {number} The number of items in the stack.
	*/
	len() {
		return this.#data.length;
	}

	/**
	 * Peek returns the value at the top of the stack without removing it from the stack.
	 *
	 * @returns {(any|null)} The value at the top of the stack or null if empty.
	 */
	peek() {
		if (!this.#data.length) return null;
		return this.#data[this.#data.length - 1];
	}
}
