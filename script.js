function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
function openModal(content) {
    const modal = document.getElementById('articleModal');
    const modalContent = document.getElementById('modalContent');
    
    // Clone the content and remove the click event
    const clonedContent = content.cloneNode(true);
    clonedContent.style.cursor = 'default';
    clonedContent.onclick = null;
    
    // Clear previous content and add new content
    modalContent.innerHTML = '';
    modalContent.appendChild(clonedContent);
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add click handlers to all articles
document.addEventListener('DOMContentLoaded', () => {
    // Dark mode initialization remains the same

    // Add click handlers to articles
    const articles = document.querySelectorAll('.article-main, .article-sidebar');
    articles.forEach(article => {
        article.onclick = () => openModal(article);
    });

    // Close modal when clicking outside
    const modal = document.getElementById('articleModal');
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});