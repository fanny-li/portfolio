import Timeline from './Timeline';
import profexp from './info/ProfExp';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience-title">
                <div className="line line-left"></div>
                <h5>professional experience</h5>
                <div className="line line-right"></div>
            </div>
            <div className="timeline">
                {profexp.map((exp) =>
                    <Timeline start={exp.start} end={exp.end} desc={exp.desc} />
                )}
            </div>
        </div>

    )
}

export default Experience;