<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interior Design</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Concert+One&family=Oleo+Script:wght@400;700&family=Poetsen+One&display=swap" rel="stylesheet">
</head>
<body>
    
    <section id="home">
        <header>
            <div class="container">
                <div class="logo">
                    <img src="./images/logo.png" alt="Interior Design Studio Logo">
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    
        <div class="container">
            <h2>Welcome to Our <span>Interior Design Studio</span></h2>
            <p>We create spaces that inspire.</p>
            <a href="#service" class="btn">Explore More ~></a>
        </div>
    </section>

    <section id="works">
        <h1>How We Work</h1>
        <div class="container-works">
            <div class="work-item">
                <img src="./images/planning.jpg" alt="Planning Image">
                <h2>Planning & Design</h2>
                <p>Our team meticulously plans and designs every aspect of your project, ensuring it meets your vision and requirements.</p>
            </div>
            <div class="work-item">
                <img src="./images/construction.jpg" alt="Construction Image">
                <h2>Construction & Execution</h2>
                <p>We handle all aspects of construction and execution with precision and expertise, bringing your vision to life.</p>
            </div>
            <div class="work-item">
                <img src="./images/consulting.jpg" alt="Consulting Image">
                <h2>Consultation & Collaboration</h2>
                <p>We value open communication and collaboration, ensuring your needs are understood and met every step of the way.</p>
            </div>
        </div>
    </section>

    <section id="service">
        <h1>Services</h1>
        <div class="container-works">
            <div class="work-item">
                <img src="./images/kitchen.jpg" alt="Planning Image">
                <h2>Kitchen Design</h2>
                <p>Transform your kitchen into a functional and stylish space tailored to your needs.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="work-item">
                <img src="./images/family room.jpg" alt="Construction Image">
                <h2>Family Room</h2>
                <p>Elevate your family room with our innovative design solutions for comfort and aesthetics.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="work-item">
                <img src="./images/light design.jpg" alt="Consulting Image">
                <h2>Lighting Design</h2>
                <p>Illuminate your space with our expert lighting design to create ambiance and functionality.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="work-item">
                <img src="./images/bedroom.jpg" alt="Bedroom Image">
                <h2>Bedroom Styling</h2>
                <p>Create a tranquil retreat with our personalized bedroom styling services.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="work-item">
                <img src="./images/bathroom.jpg" alt="Bathroom Image">
                <h2>Bathroom Renovation</h2>
                <p>Revamp your bathroom with our renovation expertise, creating a luxurious and functional space.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
            
            <div class="work-item">
                <img src="./images/living room.jpg" alt="Living Room Image">
                <h2>Living Room Makeover</h2>
                <p>Transform your living room into a stylish and inviting space for relaxation and entertainment.</p>
                <a href="#" class="btn">Learn More</a>
            </div>
            
        </div>
    </section>

    <section id="about">
        <div class="container-about">
            <h2>About Us</h2>
            <p>Welcome to NestWorks, where we transform spaces into stunning reflections of your personality and lifestyle. With a passion for creativity and an eye for detail, we specialize in crafting bespoke interior designs that captivate and inspire.</p>
            <p>At NestWorks, we believe that interior design is more than just arranging furniture or choosing color palettes – it's about creating immersive environments that tell your unique story. Whether you're looking to revamp your home, office, or commercial space, our team of talented designers is here to bring your vision to life.</p>
            <p>With years of experience and a commitment to excellence, we pride ourselves on delivering personalized solutions tailored to your specific needs and preferences. From concept development to final execution, we'll work closely with you every step of the way to ensure your complete satisfaction.</p>
            <p>Discover the endless possibilities of interior design with NestWorks. Let's embark on a journey of creativity, innovation, and transformation together.</p>
        </div>
    </section>
    
    <section id="contact">
        <h2>Contact Us</h2>
        <div class="container-cont">
            <div class="info">
                <h1>Address</h1>
                <p>Address:NIT Raipur,<br> Raipur, Chhattisgarh 492010<br></p>
                <h1>Contact</h1>
                <p>Phone: 01234-56789<br>Email: info@example.com<br>Working Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
            </div>
            
            <div class="form">
                <h3>Send us a message</h3>
                <form action="#" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-container">
            <div class="footer-wrapper">
                <div class="footer-widget">
                    <div class="address-contact">
                        Address:NIT Raipur,<br> Raipur, Chhattisgarh 492010<br>
                        Phone: 123-456-7890<br>
                        Email: info@gmail.com
                    </div>
                </div>
                <div class="footer-widget">
                    <h6>Menu</h6>
                    <ul class="links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#service">services</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div class="footer-widget">
                    <h6>Help &amp; Support</h6>
                    <ul class="links">
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#">Terms &amp; Conditionns</a></li>
                    </ul>
                </div>
                <div class="footer-widget">
                    <h6>Social Media Links</h6>
                    <ul class="socials">
                        <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright-wrapper">
                <p>Desing and Developed by
                    <a href="#" terget="blank">NestWorks</a>
                </p>
            </div>
        </div>
    </footer>

    <script src="scripts.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>
