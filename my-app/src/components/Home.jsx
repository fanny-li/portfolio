const Home = () => {
    return (
        <section>
            <div id="root"></div>
            <div className="home">
                <div className="home-box1">
                </div>
                <div className="home-box2">
                    <div className="title-content">
                        <h2>Hello, I'm Fanny.</h2>
                        <p>Aspiring Software Developer</p>
                        <p>&</p>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
            </div>
            <div className="scroll-down">
                <a href="#aboutme"><i class="fa-solid fa-angles-down fa-2x fa-bounce" style={{ '--fa-bounce-rebound': 0 }} aria-hidden="true"></i></a>
            </div>
            <div id="aboutme"></div>
        </section>


    )
}

export default Home;