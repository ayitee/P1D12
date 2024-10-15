async function my_fetch(url) {

    console.log("Fetching data from:", url);
    try {
        let response = await fetch(url);
        console.log("Response status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}























