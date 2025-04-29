import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaHome, FaInfoCircle, FaRegLightbulb, FaCog, FaQuestionCircle, FaEnvelope, FaSignInAlt, FaArrowCircleRight } from 'react-icons/fa';


// NavLink Component with Prop Types
interface NavLinkProps {
	to: string;
	children: React.ReactNode;
	className?: string; // Allow className as an optional prop
  }
  
  const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => (
	<li>
	  <a href={`#${to}`} className={`text-cyan-400 hover:text-white transition duration-300 ${className}`}>
		{children}
	  </a>
	</li>
  );
  


// FeatureCard Component with Prop Types

interface FeatureCardProps {
	title: string;
	description: string;
	borderColor: string;
	className?: string; // Add this line to allow `className` prop
  }
  

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, borderColor }) => (
  <div className={`text-center p-6 border-4 ${borderColor} rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

// SolutionCard Component with Prop Types


interface SolutionCardProps {
	title: string;
	desc: string;
	className?: string;  // Add this line to allow className
  }
  

const SolutionCard: React.FC<SolutionCardProps> = ({ title, desc }) => (
  <div className="bg-white/20 p-6 rounded-xl">
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p>{desc}</p>
  </div>
);

// SocialIcon Component with Prop Types
interface SocialIconProps {
  href: string;
  Icon: React.ComponentType;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon }) => (
  <a href={href} className="text-white text-2xl hover:text-orange-400 transition duration-300">
    <Icon />
  </a>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-gray-100 font-sans">
      {/* Header/NavBar */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg py-6 px-6 transition-all duration-500 ease-in-out transform hover:scale-105">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
          <a href="/" className="text-4xl font-extrabold text-cyan-400 hover:text-white transition duration-300 transform hover:scale-105">
            GoGetWell.ai
          </a>
          <ul className="hidden md:flex space-x-8 text-lg">
		  <NavLink to="home" className="flex items-center space-x-2">
  <FaHome /> <span>Home</span>
</NavLink>

<NavLink to="about" className="flex items-center space-x-2">
  <FaInfoCircle /> <span>About Us</span>
</NavLink>

<NavLink to="fea" className="flex items-center space-x-2">
  <FaRegLightbulb /> <span>Features</span>
</NavLink>

<NavLink to="solutions" className="flex items-center space-x-2">
  <FaCog /> <span>Solutions</span>
</NavLink>

<NavLink to="faq" className="flex items-center space-x-2">
  <FaQuestionCircle /> <span>FAQ</span>
</NavLink>

<NavLink to="contact" className="flex items-center space-x-2">
  <FaEnvelope /> <span>Contact Us</span>
</NavLink>

<NavLink to="login" className="flex items-center space-x-2">
  <FaSignInAlt /> <span>Login</span>
</NavLink>

<NavLink to="get-started" className="flex items-center space-x-2">
  <FaArrowCircleRight /> <span>Get Started</span>
</NavLink>
          </ul>
          <div className="md:hidden flex items-center">
            <button className="text-3xl text-cyan-400">☰</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-6 py-32 text-center text-white animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Website Builder for Healthcare Facilitators</h1>
        <p className="text-xl md:text-2xl mb-4">Create AI Store in 2 min</p>
        <p className="text-lg mb-8">Boost Patients Conversion and Earn While Sleeping</p>
        <button className="bg-cyan-400 text-white font-semibold py-3 px-8 rounded-full hover:bg-indigo-500 transition duration-300 transform hover:scale-110">
          Get Started
        </button>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-lg">
          <div><span className="text-3xl font-bold">2100+</span><br />Qualified Doctors</div>
          <div><span className="text-3xl font-bold">1000+</span><br />Hospitals</div>
          <div><span className="text-3xl font-bold">800+</span><br />AI Treatment Plans</div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="fea" className="px-6 py-32 text-white text-center">
  <h2 className="text-4xl font-bold mb-12 text-cyan-400">Key Benefits</h2>
  <div className="grid md:grid-cols-3 gap-12">
    <FeatureCard
      title="Online Website With AI Agent"
      description="Intelligent digital presence"
      borderColor="border-purple-400"
      className="transform transition duration-500 hover:scale-105 hover:shadow-lg hover:border-purple-500"
    />
    <FeatureCard
      title="Build Digital Business"
      description="Scale your operations"
      borderColor="border-green-400"
      className="transform transition duration-500 hover:scale-105 hover:shadow-lg hover:border-green-500"
    />
    <FeatureCard
      title="Patient Conversation"
      description="Seamless communication"
      borderColor="border-blue-400"
      className="transform transition duration-500 hover:scale-105 hover:shadow-lg hover:border-blue-500"
    />
    <FeatureCard
      title="Boost Revenue"
      description="Increase your earnings"
      borderColor="border-pink-400"
      className="transform transition duration-500 hover:scale-105 hover:shadow-lg hover:border-pink-500"
    />
    <FeatureCard
      title="Lead Generation Support"
      description="Convert visitors to clients"
      borderColor="border-yellow-400"
      className="transform transition duration-500 hover:scale-105 hover:shadow-lg hover:border-yellow-500"
    />
    <FeatureCard
      title="24/7 Support for Patients"
      description="Round-the-clock assistance"
      borderColor="border-red-400"
      className="transform transition duration-500 hover:scale-105 hover:shadow-lg hover:border-red-500"
    />
  </div>
</section>

{/* Get Started Banner */}
<section className="px-6 py-24 text-center text-white">
  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-cyan-400">Get Your Patient Ready Website Now</h2>
  <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
    Use the power of AI to transform your online presence and automate patient interactions
  </p>
  <button className="bg-pink-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-pink-500 hover:scale-105 transition-all duration-300">
    Join the Waiting List
  </button>
</section>

{/* Comprehensive Solutions */}
<section id="solutions" className="px-6 py-32 text-white">
  <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Our Comprehensive Solutions</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <SolutionCard 
      title="Custom AI-Powered Website" 
      desc="Responsive websites tailored to healthcare providers with automated patient interactions." 
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-purple-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Enhanced Patient Conversion" 
      desc="Tools to turn visitors into patients with personalized experiences."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-blue-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Real-Time Query Handling" 
      desc="Instant response system with AI-powered chat support."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-green-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Medical Report Analysis" 
      desc="Advanced AI analysis of medical reports for accurate patient assessments."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-orange-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Improved Lead Generation" 
      desc="Data-driven strategies to attract and engage patients."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-pink-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Comprehensive Healthcare Database" 
      desc="Accurate guidance through extensive medical info."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-teal-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Multilingual Support" 
      desc="Break barriers with multilingual tools."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-yellow-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Seamless Payment Handling" 
      desc="Secure payment processing for global services."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-red-600 p-6 rounded-xl"
    />
    <SolutionCard 
      title="Marketing And SEO Support" 
      desc="Boost visibility with optimized SEO strategies."
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-indigo-600 p-6 rounded-xl"
    />
  </div>
</section>



      {/* About Us & Mission */}
	  <section id="about" className="px-6 py-32 text-white bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold mb-6 text-center text-cyan-400">About Us</h2>
  <p className="max-w-3xl mx-auto text-center mb-6 text-xl">
    We are a pioneering AI-driven platform revolutionizing the medical tourism industry. We help healthcare facilitators modernize operations, attract patients, and deliver personalized care.
  </p>
  <p className="text-center text-lg mb-6">
    Our cutting-edge solutions streamline processes and enhance patient experiences, all while ensuring that healthcare providers can offer the highest quality of service with ease.
  </p>
  
  <div className="flex flex-wrap justify-center gap-8 mt-12">
    <div className="w-64 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition duration-300 shadow-lg">
      <h3 className="font-bold text-2xl mb-4 text-cyan-400">Modern Solutions</h3>
      <p className="text-lg">Leveraging AI technology to transform healthcare operations and patient interactions.</p>
    </div>
    <div className="w-64 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition duration-300 shadow-lg">
      <h3 className="font-bold text-2xl mb-4 text-cyan-400">Patient-Centric</h3>
      <p className="text-lg">We prioritize personalized care to provide the best patient experience.</p>
    </div>
  </div>

  <div className="mt-12 text-center">
    <h3 className="text-xl font-semibold text-cyan-400 mb-6">Our Core Values</h3>
    <div className="flex justify-center gap-12 text-lg">
      <div className="p-6 w-64 bg-white/10 border-4 border-yellow-400 rounded-xl shadow-xl">
        <h4 className="font-bold text-lg text-yellow-400">Innovation</h4>
        <p>We bring forward-thinking solutions to healthcare.</p>
      </div>
      <div className="p-6 w-64 bg-white/10 border-4 border-green-400 rounded-xl shadow-xl">
        <h4 className="font-bold text-lg text-green-400">Integrity</h4>
        <p>We value honesty, transparency, and ethical practices in all we do.</p>
      </div>
      <div className="p-6 w-64 bg-white/10 border-4 border-blue-400 rounded-xl shadow-xl">
        <h4 className="font-bold text-lg text-blue-400">Excellence</h4>
        <p>We strive for the highest standards in everything we deliver.</p>
      </div>
    </div>
  </div>
</section>


<section className="px-6 py-32 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white  rounded-lg shadow-lg">
  <h2 className="text-4xl font-extrabold text-center mb-6 text-cyan-400">Our Mission</h2>
  <p className="max-w-3xl mx-auto text-center mb-6 text-xl">
    We simplify medical tourism using advanced AI to optimize operations, maximize revenue, and create stress-free treatment journeys.
  </p>
  <div className="flex flex-wrap justify-center gap-12 text-center">
    <div className="w-64 bg-white/10 p-8 rounded-xl border-4 border-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-xl">
      <h3 className="font-bold text-2xl mb-4 text-cyan-400">AI-Powered Solutions</h3>
      <p className="text-lg">Operational optimization to enhance efficiency across all processes.</p>
    </div>
    <div className="w-64 bg-white/10 p-8 rounded-xl border-4 border-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl">
      <h3 className="font-bold text-2xl mb-4 text-yellow-400">Growth Focus</h3>
      <p className="text-lg">Maximize revenue opportunities through targeted strategies and solutions.</p>
    </div>
  </div>
</section>

      {/* Challenges Section */}
	  <section className="px-6 py-32  text-white">
  <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">The Challenges We Solve</h2>
  <p className="text-center max-w-3xl mx-auto mb-8 text-lg">
    Medical tourism in India is often disorganized. Our platform addresses lead management and operational inefficiencies for facilitators and hospitals.
  </p>
  <div className="flex flex-wrap justify-center gap-8 text-center">
    <div className="w-72 bg-white/20 border-2 border-teal-400 p-8 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="font-bold text-lg mb-4">Efficient Operations</h3>
      <p>Streamlined booking & management</p>
    </div>
    <div className="w-72 bg-white/20 border-2 border-indigo-400 p-8 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="font-bold text-lg mb-4">Enhanced Support</h3>
      <p>Better patient communication</p>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section id="faq" className="px-6 py-32 text-white">
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">Frequently Asked Questions</h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-lg">
          <li>What is gogetwell.ai?</li>
          <li>What is the AI Front Office for Healthcare Agents?</li>
          <li>How does the AI Agent assist me in my healthcare business?</li>
          <li>Can I customize the website for my healthcare services?</li>
          <li>How does this platform support independent healthcare facilitators like me?</li>
          <li>How does the platform help me manage patient leads?</li>
          <li>Is it easy to integrate the platform with the hospitals I work with?</li>
          <li>Is the platform secure and compliant with healthcare regulations?</li>
          <li>How quickly can I get started with the platform?</li>
          <li>What kind of customer support is available if I need help?</li>
          <li>How does the platform help me attract more patients?</li>
        </ul>
      </section>

      {/* Contact Section */}
<section id="contact" className="px-6 py-32  text-white">
  <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-6">Let's Get In Touch!</h2>
  <p className="text-xl text-center mb-6 max-w-3xl mx-auto">Got questions about GoGetWell.AI? Our team is here to help. Fill out the form below, and we will get back to you as soon as possible!</p>

  {/* Contact Form */}
  <div className="max-w-3xl mx-auto bg-white/20 p-8 rounded-xl shadow-2xl">
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-6 py-4 text-lg bg-transparent border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none transition duration-300"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-6 py-4 text-lg bg-transparent border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none transition duration-300"
          />
        </div>
      </div>
      <div className="relative">
        <textarea
          rows={4}
          placeholder="Your Message"
          className="w-full px-6 py-4 text-lg bg-transparent border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none transition duration-300"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-cyan-400 text-white py-4 px-10 rounded-full font-semibold text-lg hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-300 transition duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>

  {/* Contact Info */}
  <div className="text-center mt-12">
    <p className="text-lg mb-4">Phone: <span className="font-semibold">+91 9811396858</span></p>
    <p className="text-lg mb-4">Email: <span className="font-semibold">hello@gogetwell.ai</span></p>
  </div>
</section>


      {/* Footer */}
	  <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
  <div className="container mx-auto text-center text-white">
    {/* Logo and Copyright */}
    <div className="mb-8">
     
      <p className="text-lg mt-2 opacity-70">&copy; 2025 GoGetWell.AI, All Rights Reserved.</p>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center space-x-8 mb-8">
      <a
        href="https://facebook.com"
        className="text-white text-4xl hover:text-blue-500 transition duration-300 transform hover:scale-110"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com"
        className="text-white text-4xl hover:text-blue-400 transition duration-300 transform hover:scale-110"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com"
        className="text-white text-4xl hover:text-blue-700 transition duration-300 transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://instagram.com"
        className="text-white text-4xl hover:text-pink-400 transition duration-300 transform hover:scale-110"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://youtube.com"
        className="text-white text-4xl hover:text-red-500 transition duration-300 transform hover:scale-110"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
    </div>

    {/* Footer Links */}
    <div className="flex justify-center space-x-12 text-lg mb-8">
      <a href="#about" className="hover:text-cyan-400 transition duration-300 transform hover:scale-105">About Us</a>
      <a href="#faq" className="hover:text-cyan-400 transition duration-300 transform hover:scale-105">FAQ</a>
      <a href="#contact" className="hover:text-cyan-400 transition duration-300 transform hover:scale-105">Contact Us</a>
      <a href="#privacy" className="hover:text-cyan-400 transition duration-300 transform hover:scale-105">Privacy Policy</a>
    </div>

    
  </div>
</footer>


    </div>
  );
};

export default Home;
