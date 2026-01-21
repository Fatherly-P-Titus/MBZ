
// scripts/main.js

// Initialize Materialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile sidenav
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    
    // Initialize parallax for poster section
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);
    
    // Initialize scrollspy for smooth navigation
    const scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy, {
        scrollOffset: 64
    });
    
    // Initialize card reveal functionality
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const revealBtn = card.querySelector('.activator');
        if (revealBtn) {
            revealBtn.addEventListener('click', function() {
                const cardReveal = card.querySelector('.card-reveal');
                if (cardReveal) {
                    cardReveal.style.display = 'block';
                    cardReveal.style.transform = 'translateY(0)';
                }
            });
            
            const closeBtn = card.querySelector('.card-reveal .card-title i');
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    const cardReveal = card.querySelector('.card-reveal');
                    if (cardReveal) {
                        cardReveal.style.transform = 'translateY(100%)';
                        setTimeout(() => {
                            cardReveal.style.display = 'none';
                        }, 300);
                    }
                });
            }
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.card-action .btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.card').querySelector('.card-title').textContent.trim();
            M.toast({
                html: `${productName} added to cart!`,
                classes: 'rounded light-blue lighten-1'
            });
        });
    });
    
    // Newsletter subscription
    const subscribeBtn = document.querySelector('.footer-copyright .btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const emailInput = document.getElementById('email');
            if (emailInput && emailInput.value) {
                M.toast({
                    html: 'Thank you for subscribing to our newsletter!',
                    classes: 'rounded light-blue lighten-1'
                });
                emailInput.value = '';
            } else {
                M.toast({
                    html: 'Please enter a valid email address',
                    classes: 'rounded red'
                });
            }
        });
    }
    
    // Initialize all Materialize input fields
    M.updateTextFields();
});

// Search function
function performSearch(query) {
    if (query.trim() !== '') {
        // In a real implementation, this would filter products or redirect to search results
        M.toast({
            html: `Searching for: ${query}`,
            classes: 'rounded light-blue lighten-1'
        });
        
        // For demo purposes, simulate a search
        setTimeout(() => {
            M.toast({
                html: `Found 3 products matching "${query}"`,
                classes: 'rounded light-blue lighten-1'
            });
        }, 500);
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's not an anchor link to the same page
        if (href === '#' || href.includes('.html')) return;
        
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 64, // Offset for fixed navbar
                behavior: 'smooth'
            });
            
            // Close mobile sidenav if open
            const sidenav = document.querySelector('.sidenav');
            if (sidenav && sidenav.style.transform === 'translateX(0%)') {
                M.Sidenav.getInstance(sidenav).close();
            }
        }
    });
});
