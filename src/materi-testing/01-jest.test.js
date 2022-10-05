function penjumlahan(n1, n2) {
    return n1 + n2
}

test("testing sederhana", () => {
    expect(true).toBe(true)
})

test("menjumlahkan nilai", () => {
    expect(1 + 1).toBe(2)
    expect(4 * 2).toBe(8)
})

test('fungsi penjumlahan', () => {
    expect(penjumlahan(3, 2)).toBe(5)
    expect(penjumlahan(4, 5)).toBe(9)
})