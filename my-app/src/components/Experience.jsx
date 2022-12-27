import Timeline from './Timeline';
import profexp from './info/ProfExp';

const Experience = () => {
    return (
        <div id="experience-container">
            <div className="experience-title">
                <div className="line line-left"></div>
                <h5>professional experience</h5>
                <div className="line line-right"></div>
            </div>
            <div id="timeline">
                {profexp.map((exp) =>
                    <Timeline index={exp.index} start={exp.start} end={exp.end} desc={exp.desc} company={exp.company} />
                )}
            </div>
        </div>

    )
}

export default Experience;