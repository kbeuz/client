// import { useEffect, useState } from "react";

// const Home = () => {
//   const [index, setIndex] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   const data = [
//     { id: 12, name: "Juratbek" },
//     { id: 23, name: "Ahmadjon" },
//     { id: 33, name: "Nematjon" },
//     { id: 43, name: "Nurbek" },
//     { id: 533, name: "Nematjon" },
//     { id: 6323, name: "Ishladi" },
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 2000);

//     setIntervalId(intervalId);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [data.length]);

//   return (
//     <div className="w-4/5">
//       <div>
//         {data
//           .filter((user, itemIndex) => itemIndex === index)
//           .map((item) => {
//             return <h1>{`${item.id} ${item.name}`}</h1>;
//           })}
//       </div>

//       <div className="flex gap-1 mt-3">
//         <h1
//           className={`cursor-pointer text-red-500 ${
//             index === data.length - 1 && "hidden"
//           }`}
//           onClick={() => {
//             clearInterval(intervalId);
//             setIndex(index + 1);
//           }}
//         >
//           Next
//         </h1>

//         <h1
//           className={`text-green-500 cursor-pointer ${index === 0 && "hidden"}`}
//           onClick={() => {
//             clearInterval(intervalId);
//             setIndex(index - 1);
//           }}
//         >
//           Back
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Home;
