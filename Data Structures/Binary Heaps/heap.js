class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        // Push the value into the values property on the heap
        this.values.push(value);
        // Bubble up:
        // Create a variable called index which is he length of the values property - 1
        let index = this.values.length - 1;
        // Create a variable called parentIndex which is the floor of (index - 1)/2
        let parentIndex = Math.floor( (index - 1) / 2 );
        // Keep looping as long as the values element at the parentIndex
        // is less than the values element at the child index
        while(this.values[parentIndex] < this.values[index]) {
            // Swap the value of the values element at the parentIndex
            // with the value of the element property at the child index
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            // Set the index to be the parentIndex, and start over
            index = parentIndex;
            parentIndex = Math.floor( (index - 1) / 2 );
        }
        return this;
    }

    extractMax() {
        if (!this.values.length) return;
        // Swap the first value in the values property with the last one
        this.swap(0, this.values.length - 1);
        // Pop from the values property so you can return the value at the end
        const oldNode = this.values.pop();
        // Have the new root "sink down" to the correct spot
        // Your parent index starts at 0 (the root)
        let parent = 0;
        let childLeft = 1;
        let childRight = 2;
        // Get the largest of the two children
        // Math.max returns NaN is one of the arguments is undefined
        let max = Math.max(this.values[childLeft], this.values[childRight] || -Infinity);
        // Loop over the array to sink down the largest value
        while (this.values[parent] < max) {
            // If the left or right child is greater than the element, then swap
            // If both left and right children are larger, swap with the largest child
            let child = this.values[childLeft] === max ? childLeft : childRight;
            this.swap(parent, child);
            // The child index you swapped to now becomes the new parent index
            parent = child;
            // Get the index of the left and right child again
            childLeft = parent * 2 + 1;
            childRight = parent * 2 + 2; 
            // Reset max and keep looping until neither child is larger than the element
            max = Math.max(this.values[childLeft], this.values[childRight] || -Infinity);
        }
        // Finally return the old root
        return oldNode;
    }
    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }
}

// [41,39,33,18,27,12]
//  0  1  2  3  4  5
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.extractMax()); // 41
console.log(heap.values); // [ 39, 27, 33, 18, 12 ]