async function main() {
  const head = await getHead();
  console.log("Head: ", head);

  console.log("----------------------");

  const header = await getHeaderHead(head);
  console.log("Header: ", header.header?.height);
}

main();

// GET /head
// Returns the tip (head) of the node's current chain.
async function getHead() {
  try {
    const response = await fetch("http://127.0.0.1:26659/head");
    const data = await response.json();

    return data.header?.height;
  } catch (error) {
    console.log("Something went wrong");
  }
}

// GET /header/{height}
// Returns the header of the given height.
async function getHeaderHead(head) {
  console.log("Args",head)
  try {
    const response = await fetch("http://127.0.0.1:26659/header/"+head);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Something went wrong");
  }
}
