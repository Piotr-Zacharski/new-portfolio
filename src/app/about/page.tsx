import TimelineItem from "@/components/TimelineItem";
import timeline from "@/config/timeline";
import Title from "@/components/Title";

export default function About() {
    return (
        <div className="max-w-5xl w-11/12 mx-auto my-10">
        <div className="flex flex-col md:flex-row justify-center">
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
                {timeline.map(item => (
                    <TimelineItem
                        key={item.title}
                        year={item.year}
                        title={item.title}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}