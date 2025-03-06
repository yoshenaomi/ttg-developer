function findMissingNumber(arr) {
    // Mengurutkan array terlebih dahulu
    arr.sort((a, b) => a - b);
    
    // Mencari nomor yang hilang
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
    
    return null; // Jika tidak ada nomor yang hilang
}

// Contoh penggunaan
console.log(findMissingNumber([3, 0, 2, 4])); // Output: 1
console.log(findMissingNumber([3106, 3102, 3104, 3105, 3107])); // Output: 3103