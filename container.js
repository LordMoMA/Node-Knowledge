class Container {
    constructor() {
      this.values = [];
    }
  
    add(value) {
      this.values.push(value);
      this.values.sort((a, b) => a - b); // Keep the array sorted for median calculation
    }
  
    delete(value) {
      const index = this.values.indexOf(value);
      if (index !== -1) {
        this.values.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  
    getMedian() {
      if (this.values.length === 0) {
        throw new Error('No values in container');
      }
  
      const mid = Math.floor(this.values.length / 2);
  
      return this.values.length % 2 === 0 ? this.values[mid - 1] : this.values[mid];
    }
  }
  
  module.exports = Container;