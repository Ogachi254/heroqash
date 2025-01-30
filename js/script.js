function changeContent(page) {
    var contentDiv = document.getElementById('content');

    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <img src="https://www.heroqash.com/images/hero-image.jpg" alt="HeroQash Logo">
                <h2>Welcome to HeroQash Agencies</h2>
                <p>HeroQash is your trusted partner to grow your online business. We provide all the tools and resources
                you need to succeed online.</p>
                <p>Discover how you can start earning and scaling your business today with HeroQash Agencies!</p>
            `;
            break;

        case 'about':
            contentDiv.innerHTML = `
                <h2>About HeroQash</h2>
                <p>HeroQash Agencies is a unique platform designed to help individuals and businesses maximize their
                online earnings through affiliate marketing, watching videos, and engaging in simple tasks.</p>
                <p>Our mission is to make it simple for anyone to get started and succeed in the digital world.</p>
            `;
            break;

        case 'services':
            contentDiv.innerHTML = `
                <h2>Services Offered</h2>
                <ul>
                    <li>Promoted Instagram Reels</li>
                    <li>Promoted YouTube Videos</li>
                    <li>Promoted TikTok Videos</li>
                    <li>Trivia Questions</li>
                    <li>Financial eBooks</li>
                    <li>Forex Classes</li>
                </ul>
                <p>HeroQash offers flexible and secure methods for you to earn online while engaging in fun and rewarding tasks!</p>
            `;
            break;

        case 'contact':
            contentDiv.innerHTML = `
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us for any inquiries or support!</p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            `;
            break;

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}
