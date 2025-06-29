// // 1. useRef
// // import React, { useRef, useState } from 'react';

// // const App = () => {
// //     const [count, setCount] = useState(0);
// //     // khởi tạo giá trị của ref là 0
// //     // setCount là một hàm để cập nhật giá trị của count
// //     // count là một biến để lưu giá trị của count
// //     const countRef = useRef(0);
// //     // để truy cập giá trị của ref, cần thông qua thuộc tính current
// //     // do bản chất giá trị của ref là một object
// //     console.log('Count Ref Global:', countRef.current);
// //     // tăng giá trị của count và countRef
// //     const incrementCount = () => {
// //         setCount(count + 1); // tăng giá trị của count
// //         countRef.current += 1; // tăng giá trị của countRef
// //         console.log('Count:', count); // hiển thị giá trị của count
// //         // để truy cập giá trị của ref, cần thông qua thuộc tính current
// //         // do bản chất giá trị của ref là một object
// //         console.log('Count Ref:', countRef.current);
// //     };
// //     const increRef = () => {
// //         countRef.current += 1;
// //         // để truy cập giá trị của ref, cần thông qua thuộc tính current
// //         // do bản chất giá trị của ref là một object
// //         console.log('Count Ref:', countRef.current);
// //     }
// //     return (
// //         <div>
// //             <p>Count: {count}</p>
// //             <p>Count ref: {countRef.current}</p>
// //             <button onClick={incrementCount}>Increment</button>
// //             <button onClick={increRef}>Incre ref</button>
// //         </div>
// //     );
// // };

// // export default App;

// //2. memo
// import React, { useState } from 'react';

// // Component ListItem được ghi nhớ
// const ListItem = React.memo(({ item }) => {
//     console.log('Rendering item:', item.id);//
//     return <li>{item.text}</li>; // return là một phương thức của component để trả về phần tử HTML
// });

// const List = ({ items }) => {
//     return (
//         <ul>
//             {items.map // map là một phương thức của mảng để lặp qua từng phần tử của mảng
//             (item => (
//                 <ListItem key={item.id} // key là một thuộc tính của phần tử HTML để định danh phần tử
//                 item={item} /> // ghi nhớ component ListItem
//             ))}
//         </ul>
//     );
// };

// const App = () => {
//     const [items, setItems] = useState // khởi tạo giá trị của items là một mảng có 3 phần tử
//     ([
//         { id: 1, text: 'Item 1' },
//         { id: 2, text: 'Item 2' },
//         { id: 3, text: 'Item 3' }
//     ]);

//     const updateItem = () => {
//         const newItems = [...items];
//         newItems[1] = {
//             text: 'Updated text item 2',
//             ...newItems[1]
//         };
//         setItems(newItems);
//     };

//     return (
//         <div>
//             <List items={items} />
//             <button onClick={updateItem}>Update Item 2</button>
//         </div>
//     );
// };

// export default App;
