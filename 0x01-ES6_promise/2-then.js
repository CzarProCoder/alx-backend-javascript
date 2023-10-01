export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (Promise.resolve()) resolve({status: 200, body: success});
    else reject(Error());
    console.log('Got a response from the API');
  });
}
