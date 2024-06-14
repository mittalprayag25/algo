const maxHeap = () => {
    let values = [];

    const insert = (element) => {
        values.push(element)
        bubbleUp()
    };

    const bubbleUp = () => {
        let lastIndex = values.length - 1;
        let element = values[lastIndex];
        while (lastIndex > 0) {

            let parentIndex = Math.floor((lastIndex - 1) / 2);
            if (element < values[parentIndex]) return;
            values[lastIndex] = values[parentIndex];
            values[parentIndex] = element;
            lastIndex = parentIndex;
        }
        console.log(values)
        return values;
    };

    return { insert };
}

let heap = maxHeap()
heap.insert(23);
heap.insert(43);
heap.insert(12);
heap.insert(1);
heap.insert(42);
heap.insert(33);
heap.insert(23);
heap.insert(53);
heap.insert(54);