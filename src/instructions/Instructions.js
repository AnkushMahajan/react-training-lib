import React from 'react';
import { Card, CardText } from 'react-mdl';
import ReactMarkdown from 'react-markdown';

export default function Instructions({exercise}) {
  return (
    <div className="exercise-instructions" >
      <Card shadow={1} style={{width: '100%', maxWidth: '800px', margin: 'auto', marginBottom: '20px'}}>
        <CardText style={{width: '95%'}}>
          <ReactMarkdown source={exercise} />
        </CardText>
      </Card>
    </div>
  );
}
