// export function random_string(len?) {
//     len = len || 32;
//     const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz12345678",
//         maxPos = chars.length,
//         pwd: any = '1231412as441231dasdgasda';
//     // for (let i = 0; i < len; i++) {
//     //     pwd = chars.charAt(Math.floor(Math.random() * maxPos));
//     // }
//     return pwd;
// }


export function random_string() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 32; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}