async function check_route(url) {

    console.log("Fetching from URL:", url);
    try {
        let response = await fetch(url);
        if (response.ok) {
            console.log("all is good");
        } else {
            console.log("shit happens, status code:", response.status);
        }
    } catch (error) {
        console.error("shit happens, fetch failed with error:", error);
    }
}

























