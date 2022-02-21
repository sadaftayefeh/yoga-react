
import "./about.css"
import image from "../../../../images/pexels-mikhail-nilov-7530037.jpg"

export default function About() {
    return (
        <div className='about'>
            <div className="header">
                <img className="image" src={image}>   
                </img>
                <p>Keep In Touch!</p>
                <a className='round-button-header' href="#contain"><i class="fa fa-chevron-down"></i></a>
            </div>
            <div className="contain" id="contain">
                <div className="form">
                    <div className="firstdiv">
                    <label className="first">First Name</label>
                    <label className="second">Last Name</label></div>
                    
                    <div className="firstinputdiv">
                    <input type="text" placeholder="FirstName"></input>
                    <input type="text" placeholder="LastName"></input>
                    </div>
                    <div className="firstdiv">
                    <label className="first-1">Email</label>
                    <label className="second">Phone Number</label></div>
                    
                    <div className="firstinputdiv">
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Phone Number"></input>
                    </div>

                    <div className="memberdiv">
                    <label>Are You A Member?</label>
                    <input type="text" placeholder="Are You A Member?"></input></div>

                    <div className="enquirydiv">
                    <label>What is the nature of your enquiry?</label>
                    


                    <form ><select>
                    <option value="au">What is the nature of your enquiry?</option>
                    <option value="au">I Want To Join</option>
                    </select>
                    <p>Please select an option from the dropdown menu.</p></form></div>
                    
                    
                    <div className="boxdiv">
                    <label>Please let us know more information using the text box below*</label>
                    <form ><textarea placeholder="Please let us know more information"></textarea></form></div>

                    <button className="submit-button"><a>Submit</a></button>


                </div>
                <div className="info-box">
                    <div className="card">
                        <div className="top">
                            <div className="topcard">
                                <p>Giv Us A Call</p>
                            </div>
                            <div className="contentcard">
                                <span>Solve your enquiry quickly by calling us on 0131 659 9922 or 0800 088 6067</span>
                            </div>
                        </div>
                        <div className="center">
                        <div className="topcard">
                            <p>Check The Help Desk</p>
                        </div>
                            <div className="contentcard">
                                <span>See if you can find the answer on our help desk! The help desk has answers to our most asked questions.</span>
                            </div>
                        </div>
                        <div className="bottum">
                        <div className="topcard">
                        <p>Opening Hours</p>
                        </div>
                            <div className="contentcard">
                                <span>Monday - Friday we are open from 9am until 5pm (GMT)
We are also open on Saturdays from 10am - 4pm (GMT)</span>
                            </div>
                        </div>
                           
                    </div>

                </div>
                </div>

                <div className="social-contact">
                    <div className="livechat">
                        <div className="roundicon"><i class="fas fa-comment"></i>
                        </div><a>
                            Live Chat
                        </a>
                        <p>We recommend checking out our help desk for answers in the first instance. Visit the help desk.</p>
                    </div>
                    <div className="helpdesk"><div className="roundicon"><i class="fas fa-question"></i>
                    </div><a>Help Desk</a>
                    <p>We recommend checking out our help desk for answers in the first instance. Visit the help desk.</p></div>
                    <div className="phone"><div className="roundicon"><i class="fas fa-phone"></i>
                    </div><a>Phone</a><p>We recommend checking out our help desk for answers in the first instance. Visit the help desk.</p></div>
                    <div className="socialmedia"><div className="roundicon"><i class="fas fa-share-alt"></i>
                    </div><a>Social Media</a><div className="icon-media">
            <i class="fab fa-instagram-square"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
            </div></div>
                </div>
                <div className="blue-line">

                </div>
            <div className="map">
                <div className="map-nav"><p>
                We're Based In Tehran
                    </p></div>
                <div className="triangle"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d356835.2806807721!2d-84.16437438964842!3d45.67540439040928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1642884984312!5m2!1sen!2sus"  allowfullscreen="" loading="lazy"></iframe>
            
            </div>
            
        </div>
    )
}
