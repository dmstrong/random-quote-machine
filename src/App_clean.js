//https://www.youtube.com/watch?v=iZx7hqHb5MU

import React, { useState, useEffect } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import QuoteMachine from './components/QuoteMachine';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
};

function App({ classes }) {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);
  const [colorHolder, setColorHolder] = useState('black');

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
      );
      const quotes = await data.json();
      setQuotes(quotes);
      setSelectedQuoteIndex(random(0, quotes.length - 1));
    }
    fetchData();
  }, []);

  function getSelectedQuote() {
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }
  /**
   * Returns an integer between 0 and 102 representing an index in state.quotes
   **/
  function generateNewQuoteIndex() {
    if (!quotes.length) {
      return undefined;
    }
    return random(0, quotes.length - 1);
  }

  /**
   * Assigns a random background color for (container and button) and Sets the state for selectedQuoteIndex
   **/
  function assignNewQuoteIndex() {
    const colorCode =
      'rgb(' +
      random(0, 256) +
      ',' +
      random(0, 256) +
      ',' +
      random(0, 256) +
      ')';
    setColorHolder(colorCode);
    
    setSelectedQuoteIndex(generateNewQuoteIndex());
  }

  return (
    <Grid
      className={classes.container}
      style={{
        backgroundColor: colorHolder
      }}
      id="quote-box"
      justify="center"
      container
    >
      <Grid xs={8} large={6} item>
        {getSelectedQuote() ? (
          <QuoteMachine
            selectedQuote={getSelectedQuote()}
            assignNewQuoteIndex={assignNewQuoteIndex}
            colorHolder={colorHolder}
          />
        ) : null}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App);
