import { useEffect, useState } from 'react';
import React from 'react';

export const useTextWithLineBreak = (text: string | null): React.ReactNode => {
  const [processedText, setProcessedText] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (text) {
      const lines = text.split('\\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split('\\n').length - 1 && <br />}
        </React.Fragment>
      ));
      setProcessedText(lines);
    } else {
      setProcessedText(null);
    }
  }, [text]);

  return processedText;
};
