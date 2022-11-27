class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }

    set(key, value) {
        // accepts a key and a value
        // hashes the key
        let index = this._hash(key);
        // stores the key-value pair in the hash table array via separate chaining
        if (!this.keyMap[index]) {
            // If the entry is empty, then set the value at index to be an empty array
            this.keyMap[index] = [];
        }
        // Push the key-value pair into the array at index
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        // accepts a key
        // hashes the key
        let index = this._hash(key);
        // retrieves the key value pair in the hash table, in a nested list
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                // select into the array and check if the first element matches our key
                if (this.keyMap[index][i][0] === key) {
                    // return back the corresponding value
                    return this.keyMap[index][i][1];
                }
            }
        }
        // if the key isn't found, returned undefined
        return undefined;
    }

    keys() {
        // Loop through the hash table array
        // and return an array of keys in the table
        let keysArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // iterate over the nested array
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // check for duplicates
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                        // push in the value
                        keysArray.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArray;
    }

    values() {
        // Loop through the hash table array
        // and return an array of values in the table
        let valuesArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                // iterate over the nested array
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // check for duplicates
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                        // push in the value
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArray;
    }
  }

  let ht = new HashTable();
  ht.set("hello world", "goodbye");
  console.log(ht.get("hello world")); // goodbye
  console.log(ht.values());