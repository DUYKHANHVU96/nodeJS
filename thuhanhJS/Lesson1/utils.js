//Bài 1: In ra chuỗi sử dụng Template Literals, kết hợp Function như sau:
export const productInfo = (name, price) => {
    let string = `Sản phẩm: ${name}, Giá: ${price} VNĐ`
    return string
}

//Bài 2: Viết hàm chào người theo tên
export const greet = (name) => {
    return `Xin chào ${name}`
}
//Bài 3: Tính tổng các số từ 1 đếm n
export const sumUpTo //tổng các số từ 1 đếm n
    = (n) => {
        let sum = 0
        for (let i = 0; i <= n; i++) {
            sum = sum + i
        }
        return sum
    }


//Bài 4: tính bình phương của một số
export const square = (n) => {
    return n * n
}