

console.log('init');
await new Promise(f => setTimeout(f, 5000));

console.log('done');

// exports.handler = async (event: any): Promise<string> => {
//     console.log('handler');

//     return "done"
// }

// export {}
export async function handler() {
    console.log('handler');
}