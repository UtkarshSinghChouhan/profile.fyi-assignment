// import { getPlaiceholder } from "plaiceholder";

// export async function getImage(src: string) {

//     const buffer = await fetch(src).then(async res => 
//         Buffer.from(await res.arrayBuffer())
//     )

//     // const {
//     //     metadata : {height, width},
//     //     ...plaiceholder
//     // } = await getPlaiceholder(buffer, {size : 10})

//     const {base64} = await getPlaiceholder(buffer, {size : 10})


//     // return {
//     //     ...plaiceholder,
//     //     img : {src, height, width}
//     // }
//     return {base64}
// }