function arrayMove(array, fromIndex, toIndex) {
    const item = array[fromIndex];
    const increment = toIndex < fromIndex ? -1 : 1;
    for (let i = fromIndex; i !== toIndex; i += increment) {
        array[i] = array[i + increment];
        array[i].position = i;
    }
    array[toIndex] = item;
    array[toIndex].position = toIndex;
    return array;

};

module.exports = arrayMove;