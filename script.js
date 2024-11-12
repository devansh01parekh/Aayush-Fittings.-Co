// Function to reveal the website on logo click
function revealWebsite() {
    const logoContainer = document.querySelector(".logo-container");
    const header = document.querySelector(".header");
    const content = document.querySelector(".content");
    const logo = document.querySelector(".logo");

    // Apply a blending effect (fade and shrink) to the logo
    logo.style.opacity = 0;
    logo.style.transform = "scale(0.5)"; // Shrinks the logo to half its size

    // Delay to reveal the header and website content after the logo blend effect
    setTimeout(() => {
        // Hide the logo container (center logo disappears)
        logoContainer.style.display = "none";

        // Show the header with the logo at the top
        header.classList.add("revealed");  

        // Show the main content
        content.classList.add("revealed"); 

        // Allow scrolling
        document.body.style.overflow = "auto"; 
    }, 2000); // Wait for the blending effect to finish (2s)
}
