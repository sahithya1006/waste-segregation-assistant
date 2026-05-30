async function uploadImage() {
    const fileInput = document.getElementById("image");

    if (!fileInput.files[0]) {
        alert("Please select an image");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        const response = await fetch(
            "https://waste-segregation-assistant1.onrender.com/predict",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>Category: ${data.category}</h3>
            <h3>Suggestion: ${data.suggestion}</h3>
        `;
    } catch (error) {
        console.error("Error:", error);
        alert("Backend not reachable. Check connection or server.");
    }
}