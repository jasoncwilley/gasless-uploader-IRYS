import Query from "@irys/query";

const myQuery = new Query();
const network = process.env.NEXT_PUBLIC_NETWORK || "devnet";

const results = await myQuery
.search("irys:transactions")
.ids("CFo1XPrS2UkUnIAe8Qj5dYQcjnaH94_T7KAKsa4rRNA");

// Iterate through the array of items
results.forEach(item => {
    // Check if there are tags
    if (item.tags.length > 0) {
        // Print the first tag object
        console.log("First Tag: ", item.tags[0]);
        // Alternatively, you can access properties of the first tag object here
    } else {
        console.log("No tags found for item with id:", item.id);
    }
});


