const Hero = ({ todos_completed, total_todos}) => {
    return (
        <section>
            <div>
                <p>Task Done</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}

export default Hero;