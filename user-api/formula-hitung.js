function findExpressions(numbers, target) {
    const operators = ['+', '-', '*'];
    const results = [];

    function helper(currentExpression, currentIndex, currentValue) {
        // Jika kita sudah menggunakan semua angka
        if (currentIndex === numbers.length) {
            if (currentValue === target) {
                results.push(currentExpression);
            }
            return;
        }

        // Menggunakan angka berikutnya dengan setiap operator
        for (let operator of operators) {
            let nextValue;
            let nextExpression;

            if (operator === '+') {
                nextValue = currentValue + numbers[currentIndex];
                nextExpression = `(${currentExpression} + ${numbers[currentIndex]})`;
            } else if (operator === '-') {
                nextValue = currentValue - numbers[currentIndex];
                nextExpression = `(${currentExpression} - ${numbers[currentIndex]})`;
            } else if (operator === '*') {
                nextValue = currentValue * numbers[currentIndex];
                nextExpression = `(${currentExpression} * ${numbers[currentIndex]})`;
            }

            // Rekursi untuk angka berikutnya
            helper(nextExpression, currentIndex + 1, nextValue);
        }
    }

    // Memulai rekursi dengan angka pertama
    helper(numbers[0].toString(), 1, numbers[0]);

    // Menambahkan kombinasi dengan tanda kurung
    function addParentheses(expr, index) {
        if (index >= numbers.length - 1) return;

        for (let i = index; i < numbers.length; i++) {
            const newExpr = `(${expr})`;
            const newValue = eval(newExpr);
            helper(newExpr, i + 1, newValue);
            addParentheses(newExpr, i + 1);
        }
    }

    // Memulai dengan menambahkan tanda kurung
    addParentheses(numbers[0].toString(), 1);

    return results;
}

// Contoh penggunaan
const source1 = [1, 4, 5, 6];
const target1 = 16;
console.log(findExpressions(source1, target1));

const source2 = [1, 4, 5, 6];
const target2 = 12;
console.log(findExpressions(source2, target2));

const source3 = [1, 4, 5, 6];
const target3 = 14;
console.log(findExpressions(source3, target3));