// export default function handler(req, res) {
//     res.status(200).json({ name: 'hello world' })
//   } 

export function GET(request) {
    return new Response(`Hello from lauren`);
  }