// "Routes" - Each path maps to a function that returns HTML
const routes = {
    '/': () => `
        <h1>Home</h1>
        <p>Welcome to the Home page of your Single Page Application!</p>
    `,
    '/about': () => `
        <h1>About</h1>
        <p>This is a simple SPA made with HTML, CSS, and JS only. You can expand it with more features!</p>
    `,
    '/contact': () => `
        <h1>Contact</h1>
        <form id="contactForm">
            <label>Name:<br>
                <input type="text" name="name" required>
            </label><br><br>
            <label>Email:<br>
                <input type="email" name="email" required>
            </label><br><br>
            <label>Message:<br>
                <textarea name="message" required></textarea>
            </label><br><br>
            <button type="submit">Send</button>
        </form>
        <div id="formMsg"></div>
    `
};

// Simple SPA Router
function router() {
    const path = location.hash.replace('#', '') || '/';
    const render = routes[path] || (() => '<h1>404 - Page Not Found</h1>');
    document.getElementById('app').innerHTML = render();

    // Highlight active nav link
    document.querySelectorAll('nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + path);
    });

    // Add form handler if on contact
    if (path === '/contact') {
        document.getElementById('contactForm').onsubmit = function(e) {
            e.preventDefault();
            document.getElementById('formMsg').innerHTML = '<span style="color:green;">Message sent! (not really, this is a demo)</span>';
            this.reset();
        };
    }
}

// Listen for hash changes and initial load
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);