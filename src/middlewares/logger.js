export async function logger(request, reply) {
  console.log(request.method, request.url);
}
