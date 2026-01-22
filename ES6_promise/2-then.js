export default function handleResponseFromAPI(promise) {
    return promise
    .then(() => {
        return {status: 200, body: "success"};
    })
    .catch((err) => {
        return new Error();
    })
    .finally(() => {
        console.log("got a response form the api");
});
}