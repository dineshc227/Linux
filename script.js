function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}

// Show the first section by default
document.getElementById('file-commands').style.display = "block";

 document.addEventListener('DOMContentLoaded', function() {
            const floatingMailBtn = document.getElementById('floatingMailBtn');
            const popup = document.getElementById('popup');
            const closePopupBtn = document.getElementById('closePopup');
            
            // Open popup when floating mail button is clicked
            floatingMailBtn.addEventListener('click', function() {
                popup.style.display = 'flex';
            });
            
            // Close popup when close button is clicked
            closePopupBtn.addEventListener('click', function() {
                popup.style.display = 'none';
            });
            
            // Close popup when clicking outside the content
            popup.addEventListener('click', function(event) {
                if (event.target === this) {
                    popup.style.display = 'none';
                }
            });
            
            // Close popup with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    popup.style.display = 'none';
                }
            });
        });