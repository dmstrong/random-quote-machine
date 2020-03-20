import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = props => (
  <Card>
    <CardContent>
      <Typography>
        <span id="text">{props.selectedQuote.quote}</span>
        <span id="author"> - {props.selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        style={{
          backgroundColor: props.colorHolder,
          color: 'white'
        }}
        size="small"
        onClick={props.assignNewQuoteIndex}
        id="new-quote"
      >
        Next Quote
      </Button>
      <IconButton
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${props.selectedQuote.quote} - ${props.selectedQuote.author}&hashtags=CodingIsMyLife`
        )}
        target="_blank"
        id="tweet-quote"
      >
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteMachine;
