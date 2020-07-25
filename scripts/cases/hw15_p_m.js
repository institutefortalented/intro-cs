let hw15_m_cases = {
    1: [
        [`product(1, lambda x: x)`, 1],
        [`product(5, lambda x : x)`, 120],
        [`product(1, lambda x: x + 1)`, 2],
        [`product(10, lambda x: x + 1)`, 39916800],
        [`product(6, lambda x: x**2)`, 518400]
    ],
    2: [
        [`factorial(1)`, 1],
        [`factorial(2)`, 2],
        [`factorial(5)`, 120],
        [`factorial(8)`, 40320],
        [`factorial(10)`, 3628800]
    ],
    3: [
        [`accumulate(lambda x, y: x + y, 0, 5, lambda x: x)`, 15],
        [`accumulate(lambda x, y: x + y, 11, 5, lambda x: x)`, 26],
        [`accumulate(lambda x, y: x + y, 11, 0, lambda x: x)`, 11],
        [`accumulate(lambda x, y: x + y, 11, 3, lambda x: x**2)`, 25],
        [`accumulate(lambda x, y: x * y, 2, 3, lambda x: x**2)`, 72]
    ],
    4: [
        [`summation_using_accumulate(5, lambda x: x)`, 15],
        [`summation_using_accumulate(5, lambda x: x**2)`, 55],
        [`summation_using_accumulate(5, lambda x: x*3)`, 45],
        [`summation_using_accumulate(0, lambda x: x + 1)`, 0],
        [`summation_using_accumulate(3, lambda x: x + 1)`, 9]
    ],
    5: [
        [`product_using_accumulate(0, lambda x: x)`, 1],
        [`product_using_accumulate(1, lambda x: x)`, 1],
        [`product_using_accumulate(2, lambda x: x + 1)`, 6],
        [`product_using_accumulate(4, lambda x: x**2)`, 576],
        [`product_using_accumulate(6, lambda x: x*3)`, 524880]
    ]
};
