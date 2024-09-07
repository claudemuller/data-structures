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
	 * @returns {any} The value that gets popped off of the stack or null if empty.
	 */
	pop() {
		const v = this.#data.pop();
		if (!v) return null;
		return v;
	}

	/**
	* Returns the number of items in the stack.
	*
	* @returns {number} The number of items in the stack.
	*/
	len() {
		return this.#data.length;
	}
}
