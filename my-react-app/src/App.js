import logo from './logo.svg';
import './App.css';
import cover_page from './images/cover-page.jpg'
function App() {
  return (
    <div className="App">
      {/* first bar */}
<div className="first-bar">
    <h1>Ian Motaln</h1>
    <div className="first-barrightside">
    <h1>About me</h1>
    <h1>My projects</h1>
    </div>
</div>
{/* cover page */}
<div class="coverpageimage">
    <img src={cover_page} alt="Pc with code "/> 
</div>
{/* text on image - name */}
<div class="text-on-picture">
    <p>Hi, my name is Ian</p>
    <p>i'm a developer</p>
    </div>

{/* bottom bar */}
<div class="bottom-bar">
<p><a href="https://www.instagram.com/ianmotaln/?hl=en" target="_blank" title="Go to Instagram profile">Instagram</a></p>
<p> <a href="https://www.linkedin.com/in/ian-m-4b8832242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQBnkp9qVQA26oyiBa0CAnw%3D%3D"target="_blank" title="Go to Linkedin">Linkedin</a></p>
<p><a href="https://github.com/Ian-Motaln" target="_blank" title="Go to github page">Github</a></p>
<p><a href="mailto:ian.motaln@gmail.com" title="compose an email">Email</a> </p>
<p><button onclick="location.href='';">CV</button></p>
</div>

{/* about me section */}
<div class="aboutme">
<p> <b>About me</b></p>
<p>my name is Ian Motaln.</p>
    <p>I'm Slovene, living in Austria, studying full-stack-development in Barcelona</p>
</div>
    {/* picture */}
    <div class="personalpicture">
    <img src="images/Ian-schoool_Photo.JPG"alt="picture of me"/>
    </div>
    </div>
  );
}

export default App;
