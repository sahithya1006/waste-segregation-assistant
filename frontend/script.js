async function uploadImage() {

    const fileInput = document.getElementById("image");

    if (!fileInput.files[0]) {
        alert("Please select an image");
        return;
    }

    const formData = new FormData();

    formData.append("file", fileInput.files[0]);

    const response = await fetch(
        fetch(https://waste-segregation-assistant1.onrender.com/predict", 
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    document.getElementById("result").innerHTML =
        `
        <h3>Category: ${data.category}</h3>
        <h3>Suggestion: ${data.suggestion}</h3>
        `;
}