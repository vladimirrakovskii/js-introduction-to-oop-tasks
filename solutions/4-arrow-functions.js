// BEGIN
export default function collectionForEach(collection, callback) {
  for (const item of collection) {
    callback.call(item);
  }
}
// END
