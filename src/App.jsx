import React from 'react';
import TextTransition, {presets} from 'react-text-transition';
import {challenges_with_tdd} from "./quotes/challenges_with_tdd.js";
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import {Button} from "@mui/material";
import {definition_tdd} from "./quotes/definition_tdd.js";
import {how_to_do_tdd} from "./quotes/how_to_do_tdd.js";
import {how_to_explain_tdd} from "./quotes/how_to_explain_tdd.js";
import {whats_a_test_in_tdd} from "./quotes/whats_a_test_in_tdd.js";
import {whats_production_code_tdd} from "./quotes/whats_production_code_tdd.js";
import {when_do_not_write_tests_first} from "./quotes/when_do_not_write_tests_first.js";
import {when_tdd_is_important} from "./quotes/when_tdd_is_important.js";
import {why_companies_dont_tdd} from "./quotes/why_companies_dont_tdd.js";
import {why_not_test_after} from "./quotes/why_not_test_after.js";
import {why_tdd_quotes} from "./quotes/why_tdd.js";
import {when_do_write_tests_first} from "./quotes/when_do_write_tests_first.js";

const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const QUOTE_MAP = new Map();

QUOTE_MAP.set("What are some of the challenges with TDD?", challenges_with_tdd);
QUOTE_MAP.set("What is the definition of TDD?", definition_tdd);
QUOTE_MAP.set("How does one do TDD?", how_to_do_tdd);
QUOTE_MAP.set("How do you explain TDD?", how_to_explain_tdd);
QUOTE_MAP.set("What is a test in TDD?", whats_a_test_in_tdd);
QUOTE_MAP.set("What is production code in TDD?", whats_production_code_tdd);
QUOTE_MAP.set("When do you not write tests first?", when_do_not_write_tests_first);
QUOTE_MAP.set("When do you write tests first?", when_do_write_tests_first);
QUOTE_MAP.set("When is TDD important?", when_tdd_is_important);
QUOTE_MAP.set("Why don't companies do TDD?", why_companies_dont_tdd);
QUOTE_MAP.set("Why not test afterwards?", why_not_test_after);
QUOTE_MAP.set("Why TDD?", why_tdd_quotes);

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [category_index, setCategoryIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            9000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    function getQuoteTitle(idx = category_index){
        const relevantTitle = Array.from(QUOTE_MAP.keys())[idx]
        return <>{relevantTitle}</>
    }

    function getQuoteDescription() {
        const relevantQuotes = QUOTE_MAP.get(Array.from(QUOTE_MAP.keys())[category_index])
        const computed_idx = index % relevantQuotes.length
        return <>
            {relevantQuotes[computed_idx]}
        </>;
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1 style={{textAlign: 'center'}}>
                        Test Driven Development Reasoning App
                    </h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>
                        <TextTransition springConfig={presets.wobbly}>{getQuoteTitle()}</TextTransition>
                        <TextTransition springConfig={presets.wobbly}>{getQuoteDescription()}</TextTransition>
                    </h2>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(0)}}>{getQuoteTitle(0)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(1)}}>{getQuoteTitle(1)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(2)}}>{getQuoteTitle(2)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(3)}}>{getQuoteTitle(3)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(4)}}>{getQuoteTitle(4)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(5)}}>{getQuoteTitle(5)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(6)}}>{getQuoteTitle(6)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(7)}}>{getQuoteTitle(7)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(8)}}>{getQuoteTitle(8)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(9)}}>{getQuoteTitle(9)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(10)}}>{getQuoteTitle(10)}</StyledButton>
                </Grid>
                <Grid item xs={4}>
                    <StyledButton fullWidth onClick={() => {setCategoryIndex(11)}}>{getQuoteTitle(11)}</StyledButton>
                </Grid>
            </Grid>
        </div>
    );
}


export default App
