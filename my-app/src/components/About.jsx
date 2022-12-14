import reading from '/Users/fannyli/Projects/portfolio/my-app/src/images/reading.jpg'
import bike from '/Users/fannyli/Projects/portfolio/my-app/src/images/bike.jpg'
const About = (props) => {
    return (
        <div className="grid-about">
            <div className="grid-about-1"
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
            >
                <h5 className="subtitle">personal information</h5>
                <div className="grid-info">
                    <p className="description">name: Fanny</p>
                    <p className="description">birthday: July 4</p>
                    <p className="description">age: 20</p>
                    <p className="description">horoscope: cancer</p>
                </div>

            </div>
            <div className="grid-about-2" data-aos="fade-left"
                data-aos-duration="5000"
                data-aos-easing="ease-in-out">
                <h5 className="subtitle">about me</h5>
                <p className="description">{props.description}</p>
            </div>
            <div className="grid-about-3" data-aos="zoom-in"
                data-aos-duration="5000"
                data-aos-easing="ease-in-out" data-aos-delay="400">
                <h5 className="subtitle">hobbies</h5>
                <div className='polaroid img-left'
                >
                    <div className="polaroid-img">
                        <img src={reading} alt="Book" width={'200px'} height={'200px'} title="Reading" />
                    </div>
                    <div className='caption'>
                        Reading
                    </div>
                </div>
                <div className='polaroid img-right'>

                    <div className="polaroid-img">
                        <img src={bike} alt="Bike" width={'200px'} height={'200px'} />
                    </div>
                    <div className="caption">
                        Biking
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;