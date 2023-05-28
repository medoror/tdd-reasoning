import React from 'react';
import TextTransition, {presets} from 'react-text-transition';

const TEXTS = ['Forest', 'Building', 'Tree', 'Color'];
const App = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div>
            <div style={{display: 'grid', paddingBottom: '5px'}}>
                <h1>
                    Test Driven Development Reasoning App
                </h1>
                <button>test</button>
            </div>
            <h2>
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </h2>
        </div>
    );
}

export default App
