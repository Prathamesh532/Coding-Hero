function MinStack() {
  this.stack = [];
}

MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

MinStack.prototype.pop = function () {
  if (this.stack.length < 1) return;
  let poped = this.stack.pop();
  return poped;
};

MinStack.prototype.top = function () {
  if (this.stack.length < 1) return;
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  if (this.stack.length == 0) return null;
  let min = Infinity;
  for (let i = 0; i < this.stack.length; i++) {
    min = Math.min(min, this.stack[i]);
  }
  return min;
};

/* ----------------------------------------------------- */

function MinStack_V2() {
  this.stack = [];
  this.minStack = [];

  this.push = function (val) {
    this.stack.push(val);

    if (
      this.minStack.length == 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  };

  this.pop = function () {
    if (this.stack.length < 1) return;

    let poped = this.stack.pop();

    if (poped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return poped;
  };

  this.top = function () {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  };

  this.getMin = function () {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  };
}
