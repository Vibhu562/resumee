import Image from 'next/image'
import bgImg from '../../public/vibhuphoto.jpg'
export default function Home() {
  return (
    <div >

  <nav>
          <div className="containers">
            <nav className="menu">
              <li>Vibhu Nohria</li>
              <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </nav>
        <div className="container">
        <section id="home" className="section">
          <div>
          <Image className="centered-image" src={bgImg} alt = "wrong" width={100} height={150}></Image>
          </div>
          <div className="container">
            <h2>Hey I am Vibhu Nohria</h2>
            <p>A Computer Science Student passionate about web development.</p>
          </div>
        </section></div>
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <p className="abc">
              I am passionate about technology and have a solid foundation in programming languages such as C++, Python, and MERN stack technologies like ReactJS, NodeJS, and MongoDB. During my academic journey, I gained practical experience through various projects, including developing a food ordering website and ecommerce website. I have done open-source contributions in the Python domain at GirlScript Winter of Code. I have done various internships. My first internship was in Grroom as an ML intern. I love development.
            </p>
          </div>
        </section>
        <section id="projects" className="section">
          <div className="container">
            <h2>My Projects</h2>
            <div className="project">
              <h3>Ecommerce Website</h3>
              <p>Ecommerce Website with 1 Admin and multiple customers. It includes buying and selling of products with reviewing of products, filtering products by name, price, and type of product.</p>
            <iframe width="560" height="315" src="https://drive.google.com/file/d/1GBkwOFEcSrLv3Z-GSWonQ_2JVeHkT7Fz/preview" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               <br /><br />
            </div>
            <div className="project">
              <h3>Food Ordering Website</h3>
              <p>Food Ordering Website which includes table booking, viewing recipes of food items, viewing and reviewing food items and restaurants, seeing the location of the restaurant on the map, chatbot with functionality of complaints and feedback of restaurant and food items, and filtering of food items with parameters like calories, price, and disease.</p>
              <iframe width="560" height="315" src="https://drive.google.com/file/d/180J1pIOLR3TIWBQxOT-IWs9hYOrKQfob/preview" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <br />
            </div>

          </div>
          <section id="contact" class="section">
    <div class="container">
      <h2>Contact Me</h2>
      <p>You can reach me at vibhunohria3@gmail.com and you can call me via phone number:- 9971835469</p>
    </div>
  </section>

        </section>
  </div>

  )
}
